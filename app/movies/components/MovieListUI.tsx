'use client';

import {Movie} from "@/lib/model/model";
import MovieUI from "@/app/movies/components/MovieUI";
import Button from "@mui/material/Button";
import {useRouter} from "next/navigation";

interface MovieListUIProps {
  movies: Movie[];
}
export default function MovieListUI({movies}: MovieListUIProps) {
  const router = useRouter();
  const onDetailHandler = (id: string) => {
    router.push(`/movies/${id}`);
  }
  return (<div>
    {
      movies.map((movie) => <MovieUI
        key={movie._id}
        movie={movie}
        renderAction={(movie: Movie) => (
          <>
            <Button size="small">Delete</Button>
            <Button size="small" onClick={() => onDetailHandler(movie._id)}>Detail</Button>
          </>)} />)
    }
  </div>)
}