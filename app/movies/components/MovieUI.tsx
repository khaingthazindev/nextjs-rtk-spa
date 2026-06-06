'use client';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import {Movie} from "@/lib/model/model";
import styles from '@/app/movies/components/MovieUI.module.css';
import {ReactNode} from "react";

interface MovieUIProps {
  movie: Movie;
  renderDirector?: (movie: Movie) => ReactNode;
  renderAction: (movie: Movie) => ReactNode;
}

export default function MovieUI({movie, renderAction, renderDirector}: MovieUIProps) {
  
  return (<div className={styles['movie-container']}>
    <Card sx={{ width: 250 }}>
      <CardMedia
        sx={{ height: 150 }}
        image={"https://cdn.cinematerial.com/p/297x/wrzt54ae/the-devil-wears-prada-2-movie-poster-md.jpg?v=1776175842"}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {movie.title}
        </Typography>
        {renderDirector?.(movie)}
      </CardContent>
      <CardActions>
        {/*renderAction is render property to make dynamic ui */}
        {renderAction(movie)}
      </CardActions>
    </Card>
  </div>)
}