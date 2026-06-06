'use client';

import {useParams, useRouter} from "next/navigation";
import {Movie, Review} from "@/lib/model/model";
import MovieDetailUI from "@/app/movies/components/MovieDetailUI";
import Button from "@mui/material/Button";
import ReviewListUI from "@/app/movies/components/ReviewListUI";
import ReviewEntryUI from "@/app/movies/components/ReviewEntryUI";
import * as React from "react";
import {useState} from "react";

type Params = {
  id: string;
}

const movie:Movie = {
  "_id": "69e4ba99f31b3a4deeecdf1b",
  "title": "Matrix",
  "director": {
    "name": "Christopher",
    "phoneNo": "09993",
    "_id": "69e4ba99f31b3a4deeecdf1c"
  },
  "year": 2010,
};


export default function MovieDetailPage() {
  const router = useRouter();
  
  const reviews: Review[] = [
    {
      "_id": "03468le0y39630683064",
      "movie": "0634634634",
      "rating": 3,
      "review": "Good",
    },
    {
      "_id": "03468le0y3963683064",
      "movie": "0634634634",
      "rating": 2,
      "review": "Not Bad",
    }
  ];
  
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  
  const newButtonHandler = () => {
    handleClickOpen();
  }
  
  const modelCloseHandler = () => {
    handleClose();
  }
  
  return (<div>
    <h3>Movie Detail</h3>
    <Button size={'medium'} onClick={() => router.push('/movies')}>Back</Button>
    <MovieDetailUI movie={movie} />
    <ReviewEntryUI modelOpen={open} modelCloseHandler={modelCloseHandler} />
    
    <div style={{padding: '10px'}}>
      <Button size={'large'} variant={'contained'} onClick={newButtonHandler}>New</Button>
      <ReviewListUI reviews={reviews} />
    </div>
  </div>);
}