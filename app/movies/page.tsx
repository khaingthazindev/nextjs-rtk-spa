'use client';

import {Movie} from "@/lib/model/model";
import MovieListUI from "@/app/movies/components/MovieListUI";
import MovieEntryUI from "@/app/movies/components/MovieEntryUI";
import Button from "@mui/material/Button";
import * as React from "react";
import useModal from "@/lib/hooks/useModal";
import WithProtectedRoute from "@/app/components/WithProtectedRoute";
import {useGetAllMoviesQuery} from "@/lib/features/movie/movieApiSlice";

function MoviesPage() {
  const { data: response, isError, isLoading, isSuccess } =
    useGetAllMoviesQuery(undefined);
  const {open, handleOpen, handleClose} = useModal();
  const modelCloseHandler = () => {
    handleClose();
  }
  
    return (<div>
      <Button size={'large'} variant={'contained'} onClick={handleOpen}>New</Button>
      <MovieEntryUI modelOpen={open} modelCloseHandler={modelCloseHandler} />
      { response && <MovieListUI movies={response?.data} />}
    </div>);
}

const ProtectedMoviePage = WithProtectedRoute(MoviesPage);
export default ProtectedMoviePage;