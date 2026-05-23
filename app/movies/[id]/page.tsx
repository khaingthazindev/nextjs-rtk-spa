'use client';

import {useParams, useRouter} from "next/navigation";
import {Movie} from "@/lib/model/model";
import MovieDetailUI from "@/app/movies/components/MovieDetailUI";
import Button from "@mui/material/Button";

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
  const {id} = useParams<Params>();
  return (<div>
    <h3>Movie Detail</h3>
    <Button size={'medium'} onClick={() => router.push('/movies')}>Back</Button>
    <MovieDetailUI movie={movie} />
  </div>);
}