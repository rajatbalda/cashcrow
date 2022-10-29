import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { LoadingIcon } from './LogoIcon';
import { useHistory } from 'react-router-dom';
import Login from '../Loginandregister/Login';
import Register from '../Loginandregister/Register';
import axios from 'axios';
import { encryptStorage } from '../../ConfigFiles/EncryptStorage';
import {getUserData, isLogin, Logout} from '../../ConfigFiles/isLogin';
import Swal from "sweetalert2";  
import { Mixpanel } from '../../ConfigFiles/Mixpanel';

const pages = isLogin()?['Home','Dashboard']:['Home', 'Login', 'Register'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [openlogin, setOpenLogin] = React.useState(false);
  const [openRegister, setOpenRegister] = React.useState(false);
  const history = useHistory();

  React.useEffect(() => {
    if(isLogin()){
      console.log(encryptStorage.getItem('userDetail_cashcrow'));
    }
  }, [])
  

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const Submit=(e)=>{
    if(e.target.id === 'Login'){
      setOpenLogin(true);
      return;
    }
    if(e.target.id === 'Register'){
      setOpenRegister(true);
      return;
    }
    if(e.target.id === 'Logout'){
      Logout();
      history.push(`/`);
      window.location.reload();
      return;
    }
    history.push(`/${e.target.id}`);
  }

  const formLoginSubmit=async(data)=>{
    axios.post('https://api.cashcrow.in/api/loginuser',data).then(async res=>{
      if(res.data.success === false){
        setOpenLogin(false);
        await Swal.fire({
          icon: 'error',   
          text: 'incorrect username or password!',
          showConfirmButton: false,  
          timer: 3000 
        });
        Mixpanel.track('Unsuccessful login');
      }
      else{
        encryptStorage.setItem('userDetail_cashcrow',{customer_details:res.data.customer_details,token:res.data.token});
        setOpenLogin(false);
        await Swal.fire({
          icon: 'success',   
          text: res.data.message,
          showConfirmButton: false,
          timer:3000
        });
        Mixpanel.track('Successful login',{
          "first_name": res.data.customer_details.first_name,
          "last_name": res.data.customer_details.last_name,
        });
        window.location.reload('');
      }
    })
  }

  const formRegisterSubmit=(data)=>{
    console.log(data)
    if(data.firstname==""  || data.lastname=="" || data.mobilenumber=="" || data.gender=="" || data.email=="" || data.password=="" || data.confirmpassword ==""){
      setOpenRegister(false);
      Swal.fire({
        icon: 'error',   
        text: 'empty feild!',
        showConfirmButton: false,  
        timer: 1500 
      });
      return;
    }
    else if(data.password != data.confirmpassword){
      setOpenRegister(false);
      Swal.fire({
        icon: 'error',   
        text: 'Password  and Confirm Password not match!',
        showConfirmButton: false,  
        timer: 1500 
      });
      Mixpanel.track('Unsuccessful register');
      return;
    }
    else{
      console.log(data)
      axios.post('https://api.cashcrow.in/api/registeruser',data).then(async res=>{
      if(res.data.success === false){
        setOpenRegister(false);
        await Swal.fire({
          icon: 'error',   
          text: 'incorrect username or password!',
          showConfirmButton: false,  
          timer: 3000 
        });
      }
      else{
        setOpenRegister(false);
        await Swal.fire({
          icon: 'success',   
          text: res.data.message,
          showConfirmButton: false,
          timer:3000
        });
        Mixpanel.track('Successful register',{
          "first_name": res.data.customer_details.first_name,
          "last_name": res.data.customer_details.last_name,
        });
        window.location.reload('');
      }
    })
    }
  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <LoadingIcon />
          <Typography
            variant="h6"
            noWrap
            component="a"
            id={""}
            onClick={Submit}
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              cursor: 'pointer',
            }}
          >
            CashCrow
          </Typography>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page}>
                  <Typography textAlign="center" id={page} onClick={Submit}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            CASHCROW
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                id={page} onClick={Submit}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {isLogin() && <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar>{getUserData().customer_details.first_name[0].toUpperCase()}</Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} >
                  <Typography textAlign="center" id={setting} onClick={Submit}>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>}
        </Toolbar>
      </Container>
      <Login
      open={openlogin}
      setOpen={setOpenLogin}
      submitHandler={formLoginSubmit}
      />
      <Register
      open={openRegister}
      setOpen={setOpenRegister}
      submitHandler={formRegisterSubmit}
      />
    </AppBar>
  );
};
export default ResponsiveAppBar;
