import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Sidebar = ({setcontent}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [MenuItemData, setMenuItemData] = React.useState([]);
  const open = Boolean(anchorEl);
  const handleClick = (event,data) => {
    setMenuItemData(data);
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div style={{ height: '85vh', overflow: 'scroll initial',marginTop:"-11px" }}>
      <CDBSidebar textColor="#fff" backgroundColor="#277">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            Menu
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
              <CDBSidebarMenuItem icon="columns" onMouseOver={(e)=>handleClick(e,["Campaigns","Offers","Coupons"])} >Campaigns</CDBSidebarMenuItem>
              <CDBSidebarMenuItem icon="chart-line" onMouseOver={(e)=>handleClick(e,["Transaction Report","Performance Report"])}>Report</CDBSidebarMenuItem>
              <CDBSidebarMenuItem icon="envelope" onMouseOver={(e)=>handleClick(e,["Bank Detail","My Invoices"])}>Payments</CDBSidebarMenuItem>
              <CDBSidebarMenuItem icon="info-circle" onMouseOver={(e)=>handleClick(e,["Report Missing Transaction","View Missing Transaction"])}>Support</CDBSidebarMenuItem>
              <CDBSidebarMenuItem icon="wrench" onMouseOver={(e)=>handleClick(e,["Short Url Generator"])}>Tools</CDBSidebarMenuItem>
              <CDBSidebarMenuItem icon="user">Profile</CDBSidebarMenuItem>
              <CDBSidebarMenuItem icon="home">About us</CDBSidebarMenuItem>
              <CDBSidebarMenuItem icon="door-open">Logout</CDBSidebarMenuItem>
          </CDBSidebarMenu>
          <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            position:"absolute",
            marginLeft:"150px"
          },
        }}
        transformOrigin={{ horizontal: 'left', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
      >
        {
          MenuItemData.map(item=>{
            return(
        <MenuItem style={{minWidth:"200px"}} onClick={()=>{setcontent(item)}}>
          {item}
        </MenuItem>
            )
          })
        }
          </Menu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
            CashCrow.in
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;