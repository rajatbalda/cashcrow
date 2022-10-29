import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Divider } from '@mui/material';
import Swal from "sweetalert2";  

export default function Login({open,setOpen,submitHandler}) {

  const [email, setemail] = React.useState('');
  const [password, setpassword] = React.useState('');
  
  const handleClose = () => {
    setOpen(false);
  };
  
  const handle = () => {
    if(email === '' || password ===''){
      //alert('empty feild!');
      handleClose();
      Swal.fire({
        icon: 'error',   
        text: 'empty feild!',
        showConfirmButton: false,  
        timer: 1500 
      });  
    }
    else{
      submitHandler({email:email,password:password});
    }
  }

  return (
    <div>
      <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth >
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            autoComplete="off"
            onChange={(e)=>{
              setemail(e.target.value);
            }}
          />
          <TextField
            id="password"
            label="Password"
            type="password"
            fullWidth
            variant="standard"
            onChange={
              (e)=>{setpassword(e.target.value)}
            }
          />
        </DialogContent>
        <Divider />
        <DialogActions>
          <Button onClick={handleClose} variant="contained" color="error">Cancel</Button>
          <Button onClick={handle} variant="outlined" color="primary">Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
