import React from 'react'
import Crouselcmp from './Crouselcmp'
import styled from 'styled-components';
import ShowOffers from '../Offers/ShowOffers';
import FewOffers from '../Offers/FewOffers';
import FewCoupons from '../Coupons/FewCoupons';

const Wrapper = styled.div`
width:auto;
height:10px;
background-color:#e6e1f5;
margin:20px;
`;

const WrapperCmp = styled.div`
width:100%;
height:100px;
`;


function Content() {
  return (
    <>
    <Wrapper />
    <div style={{textAlign:"center",fontSize:"20px"}}>
      <u>Offers</u>
      </div>
    <FewOffers />
    <Wrapper />
    <div style={{textAlign:"center",fontSize:"20px"}}>
      <u>Coupons</u>
      </div>
    <FewCoupons />
    <Wrapper />
    <WrapperCmp />
    </>
  )
}

export default Content