import { API_URL } from "@/lib/config";
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {Director, Movie} from "@/lib/model/model";
import {ApiResponse} from "@/lib/model/ApiResponse";
import {RootState} from "@/lib/store";

export const movieApiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      
      return headers;
    },
  }),
  reducerPath: "moviesApi",
  endpoints: (build) => ({
    getAllMovies: build.query<ApiResponse<Movie[]>, undefined>({
      query: () => `/api/movies`,
    }),
    
    // Pestimistic Create
    saveMovie: build.mutation<ApiResponse<Movie>, Omit<Movie, '_id' | 'director'> & {
      director: Omit<Director, '_id'>;
    }>({
      query: (newMovie) => ({
        url: '/api/movies',
        method: 'POST',
        body: newMovie,
      }),
      async onQueryStarted(newMovie, { dispatch, queryFulfilled }) {
        try {
          // Wait for the server to successfully create the post
          const { data: savedMovie } = await queryFulfilled;
          
          // Pessimistically update the cache with the response
          dispatch(
            movieApiSlice.util.updateQueryData('getAllMovies', undefined, (draft) => {
              // Modify the draft state (it's safe to mutate thanks to Immer)
              draft.data.push(savedMovie.data);
            })
          );
        } catch (error) {
          console.error('Failed to create post:', error);
          // Cache remains unchanged if the request fails
        }
      },
    }),
    
    updateMovie: build.mutation<ApiResponse<Movie>, Movie>({
      query: (updateMovie) => ({
        url: `/api/movies/${updateMovie._id}`,
        method: 'PUT',
        body: updateMovie,
      }),
      async onQueryStarted(updateMovie, { dispatch, queryFulfilled }) {
        try {
          const {data: response} = await queryFulfilled;
          console.log('fulfilled: ', response);
          const updatedMovie = response.data;
          
          dispatch(
            movieApiSlice.util.updateQueryData('getAllMovies', undefined, (draft) => {
              console.log('updatedMovie: ', updatedMovie);
              draft.data = draft.data.map(m => m._id == updateMovie._id ? updatedMovie : m);
            })
          );
        } catch (error) {
          console.error('Failed to create post:', error);
        }
      },
    }),
    
    // Optimistic Delete
    deleteMovie: build.mutation<Movie, Movie>({
      query: (movie) => ({
        url: `/api/movies/${movie._id}`,
        method: 'DELETE',
      }),
      async onQueryStarted(movie, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          movieApiSlice.util.updateQueryData('getAllMovies', undefined, (draft) => {
            draft.data = draft.data.filter((m) => m._id !== movie._id);
          })
        );
        
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
    }),
  }),
});

export const { useGetAllMoviesQuery, useSaveMovieMutation, useUpdateMovieMutation, useDeleteMovieMutation } = movieApiSlice;