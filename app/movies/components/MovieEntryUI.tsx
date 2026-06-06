'use client';

import * as React from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import {useState} from "react";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {MovieFormData, MovieFormSchema} from "@/lib/schema/schema";

export default function MovieEntryUI() {
  const { register, handleSubmit, watch, formState: { errors} } = useForm<MovieFormSchema>({
    resolver: zodResolver(MovieFormData)
  });
  const [open, setOpen] = useState(false);
  
  const handleClickOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };
  
  const onSubmit = (data: MovieFormSchema) => console.log(data);
  
  return (<div style={{padding: '10px'}}>
    <Button size={'large'} variant={'contained'} onClick={handleClickOpen}>New</Button>
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>New Movie</DialogTitle>
      <DialogContent>
        <Box sx={{ width: 500 }}>
          <form onSubmit={handleSubmit(onSubmit)} id="subscription-form">
            <TextField
              label="Title"
              { ...register('title') }
              error={!!errors.title}
              helperText={errors.title?.message}
              fullWidth
              margin="normal"
            />
            <TextField
              type={'number'}
              label="Year"
              { ...register('year') }
              error={!!errors.year}
              helperText={errors.year?.message}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Director Name"
              { ...register('director.name') }
              error={!!errors.director?.name}
              helperText={errors.director?.name?.message}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Phone Number"
              { ...register('director.phoneNo') }
              error={!!errors.director?.phoneNo}
              helperText={errors.director?.phoneNo?.message}
              fullWidth
              margin="normal"
            />
            <Button type={'submit'} variant={'contained'} color={'primary'}>Submit</Button>
          </form>
        </Box>
      </DialogContent>
    </Dialog>
  </div>);
}