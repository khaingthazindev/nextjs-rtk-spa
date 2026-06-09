'use client';

import {ReviewApiResponse} from "@/lib/model/model";
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
import ReviewEntryUI from "@/app/movies/components/ReviewEntryUI";
import useModal from "@/lib/hooks/useModal";
import {useDeleteReviewMutation} from "@/lib/features/review/reviewsApiSlice";

interface ReviewUIProps {
  review: ReviewApiResponse,
}

export default function ReviewUI({review} : ReviewUIProps) {
  const [deleteReview, deleteResult] = useDeleteReviewMutation();
  const {open, handleOpen, handleClose}= useModal();
  
  const modelCloseHandler = () => {
    handleClose();
  }
  const onEditHandler = () => {
    handleOpen();
  }
  const onDeleteHandler = (review: ReviewApiResponse) => {
    const confirmResult = window.confirm('Are you sure you want to delete this review?');
    if (confirmResult) {
      deleteReview(review)
        .unwrap()
        .then((res) => {
          console.log('res: ', res);
          handleClose();
        }, (err) => {
          console.log('err: ', err);
          handleClose();
        });
    } else {
      handleClose();
    }
  }
  console.log('review: ', review);
  return (<div>
    <ReviewEntryUI movieId={review?.movie?._id} modelOpen={open} modelCloseHandler={modelCloseHandler} reviewToEdit={review} />
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
        <Button type={'submit'} variant={'contained'} color={'error'} onClick={() => onDeleteHandler(review)}>
          <DeleteIcon />
        </Button>
      </CardContent>
    </Card>
  </div>);
}