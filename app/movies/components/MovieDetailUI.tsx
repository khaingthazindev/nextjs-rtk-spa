'use client';

import {Movie, Review} from "@/lib/model/model";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import MovieUI from "@/app/movies/components/MovieUI";
import MovieEntryUI from "@/app/movies/components/MovieEntryUI";
import {useState} from "react";

function renderAction(movie: Movie) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  
  const editButtonHandler = () => {
    handleOpen();
  }
  const modelCloseHandler = () => {
    handleClose();
  }
  return (<>
    <Button variant={'contained'} onClick={editButtonHandler}>Edit</Button>
    <MovieEntryUI modelOpen={open} modelCloseHandler={modelCloseHandler} movieToEdit={movie} />
  </>)
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