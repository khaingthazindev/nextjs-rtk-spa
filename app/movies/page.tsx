'use client';

import {Movie} from "@/lib/model/model";
import MovieListUI from "@/app/movies/components/MovieListUI";
import MovieEntryUI from "@/app/movies/components/MovieEntryUI";
import Button from "@mui/material/Button";
import * as React from "react";
import useModal from "@/lib/hooks/useModal";
import useAuth from "@/lib/hooks/useAuth";
import {useRouter} from "next/navigation";
import WithProtectedRoute from "@/app/components/WithProtectedRoute";

const movies: Movie[] = [
  {
    "_id": "69e4ba99f31b3a4deeecdf1b",
    "title": "Matrix",
    "director": {
      "name": "Christopher",
      "phoneNo": "09993",
      "_id": "69e4ba99f31b3a4deeecdf1c"
    },
    "year": 2010,
  },
  {
    "_id": "69e5a283ac959ce19e4e8575",
    "title": "Matrix",
    "director": {
      "name": "Christopher",
      "phoneNo": "09993",
      "_id": "69e5a283ac959ce19e4e8576"
    },
    "year": 2010,
  },
  {
    "_id": "69e5ae7fe2e0a1a36303b7ba",
    "title": "Matrix",
    "director": {
      "name": "Christopher",
      "phoneNo": "09993",
      "_id": "69e5ae7fe2e0a1a36303b7bb"
    },
    "year": 2010,
  },
];

function MoviesPage() {
  const {open, handleOpen, handleClose} = useModal();
  const modelCloseHandler = () => {
    handleClose();
  }
  
    return (<div>
      <Button size={'large'} variant={'contained'} onClick={handleOpen}>New</Button>
      <MovieEntryUI modelOpen={open} modelCloseHandler={modelCloseHandler} />
      <MovieListUI movies={movies} />
    </div>);
}

const ProtectedMoviePage = WithProtectedRoute(MoviesPage);
export default ProtectedMoviePage;