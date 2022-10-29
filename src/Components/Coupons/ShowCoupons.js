import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import Coupon from './Coupon';
import TextField from '@mui/material/TextField';
import { CircularProgress,Button } from '@mui/material';

function ShowCoupons() {
    const [Coupons, setCoupons] = useState([]);
    const [search, setsearch] = useState("");
    const Wrapper = styled.div`
    margin:7px;
    `;
    const [isLoading, setisLoading] = useState(true);
    const [CouponWidth, setCouponWidth] = useState("330px");
    const [CouponMargin, setCouponMargin] = useState("71%");
    const [prev, setprev] = useState(null);
    const [next, setnext] = useState(null);

    const fetch = async(dataUrl) =>{
        let searchUrl = "";
        if(dataUrl.indexOf('?')!==-1){
            searchUrl = `${dataUrl}&token=65382fdc6fc8ecff5b74f0d88c6e09741ef44d62&id=dee542885700`;
        }
        else{
            searchUrl = `${dataUrl}?token=65382fdc6fc8ecff5b74f0d88c6e09741ef44d62&id=dee542885700`;
        }
        setisLoading(true);
        await axios.post('https://api.cashcrow.in/get_api_data',{url:searchUrl}).then(data=>{
        setprev(data.data.prev_page_url);
        setnext(data.data.next_page_url);
        const dataFilter  = data.data.data.filter(item=>{
            if(search===""){
                return item;
            }
            else if(item.offer.toLowerCase().includes(search.toLowerCase())){
                return item;
                }
            })    
            setCoupons(dataFilter);
        });
        setisLoading(false);
    }

    const handleResize = () => {
        setCouponWidth(window.innerWidth > 768 ? "330px":"20rem");
        setCouponMargin(window.innerWidth > 768 ? "71%":"3%")
      }

    useEffect(() => {
        fetch("https://inrdeals.com/api/v1/coupon-feed");
        handleResize();
        window.addEventListener("resize", handleResize)
    }, [search])

    const handler = (e)=>{
        setisLoading(true);
        setsearch(e.target.value);
    }
    
  return (
      <Container style={{marginBottom:"100px"}}>
        <TextField id="outlined-basic" label="Search" variant="outlined" type='text' onChange={handler} style={{marginLeft: CouponMargin,marginTop:"11px",width:CouponWidth}} />
        <Row>
            <Col>
            <Button onClick={()=>fetch(prev)} disabled={prev===null} >
                Prev
            </Button>
            </Col>
            <Col style={{position:"relative"}}>
            <Button style={{position: "absolute",right: "47px",top: "5px"}} onClick={()=>fetch(next)} disabled={next===null}>
                Next
            </Button>
            </Col>
        </Row>
        <Row>
   {     isLoading ? 
        <div style={{display: 'flex', justifyContent: 'center', marginTop:'70px'}}>
            <CircularProgress size={'70px'}/> </div>
            :
        Coupons.map((item,index)=>{
            return(<Col><Wrapper>
                <Coupon data={item} key={index}/>
                </Wrapper></Col>
            )
        })
    }
        </Row>
    </Container>
  )
}

export default ShowCoupons