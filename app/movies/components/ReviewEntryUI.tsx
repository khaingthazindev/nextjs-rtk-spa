'use client';

import {useEffect, useState} from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import * as React from "react";
import {useForm} from "react-hook-form";
import {ReviewFormData, ReviewFormSchema} from "@/lib/schema/schema";
import {zodResolver} from "@hookform/resolvers/zod";
import {Stack} from "@mui/system";
import {Rating} from "@mui/material";
import {Review} from "@/lib/model/model";

interface ReviewEntryUIProps {
  modelOpen: boolean;
  modelCloseHandler: () => void,
  reviewToEdit?: Review,
}
export default function ReviewEntryUI({modelOpen, modelCloseHandler, reviewToEdit}: ReviewEntryUIProps) {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors}
  } = useForm<ReviewFormSchema>({
    resolver: zodResolver(ReviewFormData),
    defaultValues: {
      rating: reviewToEdit? reviewToEdit.rating : 0,
      review: reviewToEdit? reviewToEdit.review : '',
    }
  });
  const [open, setOpen] = useState(modelOpen);
  const handleClose = () => {
    setOpen(false);
    modelCloseHandler();
  };
  
  const ratingOnChange = (rating: number) => {
    setValue('rating', rating);
  }
  
  const onSubmit = (data: ReviewFormSchema) => console.log(data);
  
  useEffect(() => {
    setOpen(modelOpen)
  }, [modelOpen]);
  
  return (<div>
    <Dialog open={open.valueOf()} onClose={handleClose}>
      <DialogTitle>{ reviewToEdit ? 'Edit Review' : 'New Review'}</DialogTitle>
      <DialogContent>
        <Box sx={{ width: 500 }}>
          <form onSubmit={handleSubmit(onSubmit)} id="subscription-form">
            <Stack spacing={1}>
              <Rating
                defaultValue={reviewToEdit ? reviewToEdit.rating : 0}
                name="half-rating"
                onChange={(event, newValue) => (ratingOnChange(newValue!))}/>
            </Stack>
            <TextField
              label="Review"
              { ...register('review') }
              error={!!errors.review}
              helperText={errors.review?.message}
              fullWidth
              margin="normal"
            />
            <Button type={'submit'} variant={'contained'} color={'primary'}>Submit</Button>
            &nbsp;
            <Button type={'submit'} variant={'outlined'} onClick={handleClose}>Cancel</Button>
          </form>
        </Box>
      </DialogContent>
    </Dialog>
  </div>);
}