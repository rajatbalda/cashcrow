import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function Register({ open, setOpen, submitHandler }) {
  const [fname, setfname] = React.useState("");
  const [lname, setlname] = React.useState("");
  const [mobile, setmobile] = React.useState("");
  const [email, setemail] = React.useState("");
  const [gender, setgender] = React.useState("");
  const [password, setpassword] = React.useState("");
  const [confirmpassword, setconfirmpassword] = React.useState("");

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
        <DialogTitle>Register</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            id="fname"
            label="First Name"
            type="text"
            fullWidth
            variant="standard"
            autoComplete='off'
            onChange={(e)=>{setfname(e.target.value)}}
          />
          <TextField
            id="lname"
            label="Last Name"
            type="text"
            fullWidth
            variant="standard"
            autoComplete='off'
            onChange={(e)=>{setlname(e.target.value)}}
          />
          <TextField
            id="mobile"
            label="Mobile Number"
            type="number"
            fullWidth
            variant="standard"
            autoComplete='off'
            onChange={(e)=>{setmobile(e.target.value)}}
          />
          <TextField
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            autoComplete='off'
            onChange={(e)=>{setemail(e.target.value)}}
          />
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              id="gender"
              onChange={(e)=>{setgender(e.target.value)}}
            >
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
          </FormControl>
          <TextField
            id="password"
            label="Password"
            type="password"
            fullWidth
            variant="standard"
            onChange={(e)=>{setpassword(e.target.value)}}
          />
          <TextField
            id="cpassword"
            label="Confirm Password"
            type="password"
            fullWidth
            variant="standard"
            onChange={(e)=>{setconfirmpassword(e.target.value)}}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained" color="error">Cancel</Button>
          <Button onClick={()=>submitHandler({firstname:fname,lastname:lname,mobilenumber:mobile,gender:gender,email:email,password:password,confirmpassword:confirmpassword})} variant="outlined" color="primary">Register</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
