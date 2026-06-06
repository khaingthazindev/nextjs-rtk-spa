'use client';

import {Review} from "@/lib/model/model";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import styles from '@/app/movies/components/ReviewUI.module.css';
import {Stack} from "@mui/system";
import {Rating} from "@mui/material";
import Button from "@mui/material/Button";
import * as React from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {useState} from "react";
import ReviewEntryUI from "@/app/movies/components/ReviewEntryUI";

interface ReviewUIProps {
  review: Review,
}

export default function ReviewUI({review} : ReviewUIProps) {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const modelCloseHandler = () => {
    handleClose();
  }
  
  const onEditHandler = () => {
    handleClickOpen();
  }
  return (<div>
    <ReviewEntryUI modelOpen={open} modelCloseHandler={modelCloseHandler} reviewToEdit={review} />
    <Card sx={{ width: 250 }} className={styles['review']}>
      <CardContent>
        <Stack spacing={1}>
          <Rating name="half-rating" defaultValue={review.rating} readOnly />
        </Stack>
        <Typography gutterBottom sx={{ color: 'text.secondary'}}>
          {review.review}
        </Typography>
        <Button
          size={'small'}
          type={'submit'}
          variant={'contained'}
          color={'primary'}
          onClick={onEditHandler}
        >
          <EditIcon />
        </Button>
        &nbsp;
        <Button type={'submit'} variant={'contained'} color={'error'}>
          <DeleteIcon />
        </Button>
      </CardContent>
    </Card>
  </div>);
}