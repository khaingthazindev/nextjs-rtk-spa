'use client';

import * as React from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {MovieFormData, MovieFormSchema} from "@/lib/schema/schema";
import {Movie} from "@/lib/model/model";

interface MovieEntryUIProps {
  modelOpen: boolean;
  modelCloseHandler: () => void,
  movieToEdit?: Movie,
}

export default function MovieEntryUI({modelOpen, modelCloseHandler, movieToEdit}: MovieEntryUIProps) {
  const { register, handleSubmit, formState: { errors} } = useForm<MovieFormSchema>({
    resolver: zodResolver(MovieFormData),
    defaultValues: {
      title: movieToEdit ? movieToEdit.title : '',
      year: movieToEdit ? movieToEdit.year : 0,
      director: {
        name: movieToEdit ? movieToEdit.director.name : '',
        phoneNo: movieToEdit ? movieToEdit.director.phoneNo : '',
      }
    }
  });
  
  const [open, setOpen] = useState(modelOpen);
  const handleClose = () => {
    setOpen(false);
    modelCloseHandler();
  };
  
  useEffect(() => {
    setOpen(modelOpen);
  }, [modelOpen]);
  
  const onSubmit = (data: MovieFormSchema) => console.log(data);

  return (<div style={{padding: '10px'}}>
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{movieToEdit ? 'Edit Movie' : 'New Movie'}</DialogTitle>
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
            <div style={{marginTop: '10px'}}>
              <Button type={'submit'} variant={'contained'} color={'primary'}>Submit</Button>
              &nbsp;
              <Button variant={'outlined'} onClick={handleClose}>Cancel</Button>
            </div>
          </form>
        </Box>
      </DialogContent>
    </Dialog>
  </div>);
}