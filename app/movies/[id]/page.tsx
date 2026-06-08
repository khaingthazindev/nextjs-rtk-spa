'use client';

import {useParams, useRouter} from "next/navigation";
import MovieDetailUI from "@/app/movies/components/MovieDetailUI";
import Button from "@mui/material/Button";
import ReviewListUI from "@/app/movies/components/ReviewListUI";
import ReviewEntryUI from "@/app/movies/components/ReviewEntryUI";
import * as React from "react";
import useModal from "@/lib/hooks/useModal";
import {useGetAllMoviesQuery} from "@/lib/features/movie/movieApiSlice";
import {useGetAllReviewsByMovieIdQuery} from "@/lib/features/review/reviewsApiSlice";

export default function MovieDetailPage() {
  const {id} = useParams<{id: string}>();
  const { movie } = useGetAllMoviesQuery(undefined, {
    selectFromResult: ({ data }) => ({
      movie: data?.data?.find((item) => item._id === id),
    }),
  });
  const { data: response, isError, isLoading, isSuccess } = useGetAllReviewsByMovieIdQuery(id);
  console.log('reviews: ', response);
  
  const router = useRouter();
  
  // const reviews: Review[] = [
  //   {
  //     "_id": "03468le0y39630683064",
  //     "movie": "0634634634",
  //     "rating": 3,
  //     "review": "Good",
  //   },
  //   {
  //     "_id": "03468le0y3963683064",
  //     "movie": "0634634634",
  //     "rating": 2,
  //     "review": "Not Bad",
  //   }
  // ];
  
  const {open, handleOpen, handleClose} = useModal();
  const newButtonHandler = () => {
    handleOpen();
  }
  const modelCloseHandler = () => {
    handleClose();
  }
  
  return (<div>
    <h3>Movie Detail</h3>
    <Button size={'medium'} onClick={() => router.push('/movies')}>Back</Button>
    { movie && <MovieDetailUI movie={movie} /> }
    <ReviewEntryUI modelOpen={open} modelCloseHandler={modelCloseHandler} />
    
    <div style={{padding: '10px'}}>
      <Button size={'large'} variant={'contained'} onClick={newButtonHandler}>New</Button>
      { response?.data && <ReviewListUI reviews={response?.data} />}
    </div>
  </div>);
}