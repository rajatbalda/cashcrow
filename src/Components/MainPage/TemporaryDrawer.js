import { Typography } from '@mui/material';
import React from 'react';
import { Row,Col, Container } from 'react-bootstrap';
import Sidebar from './Sidebar';
import ShowCoupons from '../Coupons/ShowCoupons';
import ShowOffers from '../Offers/ShowOffers';
import Dashboard from './Dashboard';
import TransactionReport from '../Transacction/TransactionReport';

function TemporaryDrawer() {
    const [content, setcontent] = React.useState("Dashboard");
  return (
    <div style={{display:"flex"}} >
        <Sidebar setcontent={setcontent}/>
        <Container style={{height: '85vh',maxHeight: '85vh',overflowY:"scroll",paddingBottom:"100px"}}>
            {content === "Dashboard" && <Dashboard />}
            {content === "Campaigns" && <ShowCoupons />}
            {content === "Offers" && <ShowOffers />}
            {content === "Coupons" && <ShowOffers />}
            {content === "Transaction Report" && <TransactionReport />}
        </Container>
    </div>
  )
}

export default TemporaryDrawer