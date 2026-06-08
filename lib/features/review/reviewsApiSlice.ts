import {movieApiSlice} from "@/lib/features/movie/movieApiSlice";
import {Review} from "@/lib/model/model";
import {ApiResponse} from "@/lib/model/ApiResponse";

export const reviewsApiSlice = movieApiSlice.injectEndpoints({
  endpoints: (build) => ({
    getAllReviewsByMovieId: build.query<ApiResponse<Review[]>, string>({
      query: (movieId: string) => `/api/reviews/${movieId}`,
    }),
  }),
});

export const {useGetAllReviewsByMovieIdQuery} = reviewsApiSlice;