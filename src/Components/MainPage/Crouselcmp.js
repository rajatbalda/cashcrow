import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import styled from 'styled-components';

const Wrapper = styled.img`
width:100%;
height:340px;
`
function Crouselcmp() {
  return (
    <><div style={{display:"flex",paddingLeft:window.innerWidth <=500?"11%":"25%",paddingTop:"20px"}}>
    {
      window.innerWidth <=500?<iframe src='https://inrdeals.com/dynamic/ad-300x250?user=dee542885700' height='90px' width='100%' frameborder='0' allowTransparency='true' scrolling='no'></iframe>:
      <iframe src='https://inrdeals.com/dynamic/ad-728x90?user=dee542885700' height='90px' width='100%' frameborder='0' allowTransparency='true' scrolling='no'></iframe>
    }
  </div>
    <Carousel style={{margin:"20px"}}>
      <Carousel.Item >
        <div style={{display:"flex"}}>
      <a href="https://track.clickonik.com/click?campaign_id=244&pub_id=7590&creative_name=728x90.jpg&crtv_id=6109492e7771e73d960e47b8" target="_blank"><img src="https://static.vnative.co/images/6109492e39a1e.jpg" width="728"height="340" border="0" /></a>
      <a href="https://track.clickonik.com/click?campaign_id=244&pub_id=7590&creative_name=728x90.jpg&crtv_id=6109492e7771e73d960e47b8" target="_blank"><img src="https://static.vnative.co/images/6109492e39a1e.jpg" width="728"height="340" border="0" /></a>
      </div>
      </Carousel.Item>
      
      <Carousel.Item>
        <Wrapper
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsTzKX0xW0wI8DZM9UExceBEsS2PajmThsBQ&usqp=CAU"
          alt="First slide"
            onClick={()=>{window.open('https://www.boddess.com/','_black')}}
        />
      </Carousel.Item>
      
      <Carousel.Item>
        <Wrapper
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEV0EOrsGcdsAEOfJbwjc2jCZdoq2-TVy6uA&usqp=CAU"
          alt="First slide"
            onClick={()=>{window.open('https://www.myntra.com/','_black')}}
        />
      </Carousel.Item>
    </Carousel>
    </>
  )
}

export default Crouselcmp