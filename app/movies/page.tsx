'use client';

import {Movie} from "@/lib/model/model";
import MovieListUI from "@/app/movies/components/MovieListUI";
import MovieEntryUI from "@/app/movies/components/MovieEntryUI";

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

export default function MoviesPage() {
  return (<div>
    <MovieEntryUI />
    <MovieListUI movies={movies} />
  </div>);
}