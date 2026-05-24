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

export default function MovieEntryUI() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  
  const handleClickOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries((formData as any).entries());
    const email = formJson.email;
    console.log(email);
    console.log('email: ', email);
    handleClose();
  };
  
  return (<div>
    <Button size={'large'} variant={'contained'} onClick={handleClickOpen}>New</Button>
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>New Movie</DialogTitle>
      <DialogContent>
        <Box sx={{ width: 500 }}>
          <form onSubmit={handleSubmit} id="subscription-form">
            <TextField
              autoFocus
              required
              margin="dense"
              id="name"
              name="email"
              label="Email Address"
              type="email"
              fullWidth
              variant="standard"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </form>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button type="submit" form="subscription-form">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  </div>);
}