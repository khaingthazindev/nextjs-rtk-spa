'use client';

import {Movie, Review} from "@/lib/model/model";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import MovieUI from "@/app/movies/components/MovieUI";

function renderAction(movie: Movie) {
  return (<>
    <Button size="small">Edit</Button>
  </>);
}

function renderDirector(movie: Movie) {
  return (<>
    <Typography gutterBottom variant="h4" content="div">
      Directed by {movie.director.name}
    </Typography>
    <Typography gutterBottom content="div">
      Directed by {movie.director.phoneNo}
    </Typography>
  </>);
}

interface MovieDetailUIProps {
  movie: Movie;
}

export default function MovieDetailUI({movie}: MovieDetailUIProps) {
   return (<>
     <MovieUI movie={movie}
              renderAction={() => renderAction(movie)}
              renderDirector={() => renderDirector(movie)}/>
   </>);
}