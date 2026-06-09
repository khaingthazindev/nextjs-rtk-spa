import {movieApiSlice} from "@/lib/features/movie/movieApiSlice";
import {Review, ReviewApiResponse} from "@/lib/model/model";
import {ApiResponse} from "@/lib/model/ApiResponse";
import {ReviewFormSchema} from "@/lib/schema/schema";

export const reviewsApiSlice = movieApiSlice.injectEndpoints({
  endpoints: (build) => ({
    getAllReviewsByMovieId: build.query<ApiResponse<ReviewApiResponse[]>, string>({
      query: (movieId: string) => `/api/reviews/${movieId}`,
    }),
    
    // Pessimistic Create
    saveReview: build.mutation<ApiResponse<ReviewApiResponse>, Omit<Review, '_id'>>({
      query: (newReview) => ({
        url: '/api/reviews',
        method: 'POST',
        body: newReview,
      }),
      async onQueryStarted(newReview, { dispatch, queryFulfilled }) {
        try {
          const { data: savedReview } = await queryFulfilled;

          dispatch(
            reviewsApiSlice.util.updateQueryData('getAllReviewsByMovieId', newReview.movie as string, (draft) => {
              draft.data.push(savedReview.data);
            })
          );
        } catch (error) {
          console.error('Failed to create review:', error);
        }
      },
    }),

    updateReview: build.mutation<ApiResponse<ReviewApiResponse>, Review>({
      query: (editReview: Review) => ({
        url: `/api/reviews/${editReview._id}`,
        method: 'PUT',
        body: editReview,
      }),
      async onQueryStarted(editReview, { dispatch, queryFulfilled }) {
        try {
          const { data: updatedReview } = await queryFulfilled;

          dispatch(
            reviewsApiSlice.util.updateQueryData('getAllReviewsByMovieId', '69e4ba99f31b3a4deeecdf1b', (draft) => {
              draft.data = draft.data.map((r: ReviewApiResponse) => r._id == editReview._id ? updatedReview.data : r);
            })
          );
        } catch (error) {
          console.error('Failed to create review:', error);
        }
      },
    }),
    
    // Optimistic Delete
    deleteReview: build.mutation<Review, ReviewApiResponse>({
      query: (review) => ({
        url: `/api/reviews/${review._id}`,
        method: 'DELETE',
      }),
      async onQueryStarted(review, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          reviewsApiSlice.util.updateQueryData('getAllReviewsByMovieId', review.movie._id, (draft) => {
            draft.data = draft.data.filter((r) => r._id !== review._id);
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

export const {useGetAllReviewsByMovieIdQuery, useSaveReviewMutation, useUpdateReviewMutation, useDeleteReviewMutation} = reviewsApiSlice;
