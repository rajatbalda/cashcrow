import * as React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useState,useEffect} from 'react'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import {makeStyles} from '@mui/styles'

const useStyles = makeStyles(() => ({
  paper: { minWidth: "500px"},
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


function Coupon({data}) {
  const [CouponWidth, setCouponWidth] = useState("12rem");
  const [imageUrl, setimageUrl] = useState("");
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleResize = () => {
    setCouponWidth(window.innerWidth > 768 ? '12rem':'9rem');
  }
  useEffect(() => {
    window.addEventListener("resize", handleResize)
}, [])
const classes = useStyles();
  return (
    <Card style={{ width: CouponWidth,height:'7.5rem',marginLeft:'0px',backgroundColor:"#E4F9EB" }}>
      <Card.Body>
        <Card.Title style={{fontSize:"1rem",textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"}}>{data.offer}</Card.Title>
        <Card.Text>
            <p>{data.label}</p>
            {
              data.coupon_code === "ACTIVATE OFFER"?
              <p style={{fontSize:"15px",textAlign:"center",backgroundColor:"#ABA3A3",color:"white",cursor:"pointer"}} onClick={handleClickOpen}>{data.coupon_code}</p>:
              <p style={{fontSize:"15px",textAlign:"center",backgroundColor:"#000",color:"white",cursor:"pointer"}} onClick={handleClickOpen}>Show Coupon Code</p>
            }
        </Card.Text>
      </Card.Body>
      <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        classes={{ paper: classes.paper}}
      >
        <DialogTitle>{"Coupon Code"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description" style={{backgroundColor:"#000",color:"white",textAlign:"center"}}>
            Store name: {data.logo.store_name}
          </DialogContentText>
          <DialogContentText id="alert-dialog-slide-description" style={{textAlign:"center"}}>
            {
              data.coupon_code === "ACTIVATE OFFER"?
          <div dangerouslySetInnerHTML={{ __html: data.description }} style={{textAlign:"left"}}>
         </div>:""
            }
            <p style={{backgroundColor:"#bcb",textAlign:"center",marginLeft:"30%",padding:"5px",borderRadius:"20px",fontSize:"20px",width:"fit-content",marginTop:"20px"}}>{data.coupon_code}</p>
            <a href={data.url} target="_blank" >Visit Website</a>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
    </Card>
  );
}

export default Coupon;