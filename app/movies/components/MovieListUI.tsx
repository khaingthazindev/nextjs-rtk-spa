'use client';

import {Movie} from "@/lib/model/model";
import MovieUI from "@/app/movies/components/MovieUI";
import Button from "@mui/material/Button";
import {useRouter} from "next/navigation";
import {useDeleteMovieMutation} from "@/lib/features/movie/movieApiSlice";

interface MovieListUIProps {
  movies: Movie[];
}
export default function MovieListUI({movies}: MovieListUIProps) {
  const [deleteMovie, deleteResult] = useDeleteMovieMutation();
  const router = useRouter();
  const onDetailHandler = (id: string) => {
    router.push(`/movies/${id}`);
  }
  const onDeleteHandler = (movie: Movie) => {
    const result = window.confirm("Are you sure you want to delete this movie?");
    
    if (result) {
      deleteMovie(movie)
        .unwrap()
        .then((res) => {
          console.log('delete success: ', res);
        }, (error) => {
          console.log('delete failed: ', error);
        });
    }
  }
  return (<div>
    {
      movies?.map((movie) => <MovieUI
        key={movie._id}
        movie={movie}
        renderAction={(movie: Movie) => (
          <>
            <Button size="small" onClick={() => onDeleteHandler(movie)}>Delete</Button>
            <Button size="small" onClick={() => onDetailHandler(movie._id)}>Detail</Button>
          </>)} />)
    }
  </div>)
}