import React from 'react'
import {useState,useEffect} from 'react'
import styled from 'styled-components'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import Offer from './Offer';
import TextField from '@mui/material/TextField';
import { Button, CircularProgress } from '@mui/material';
import { useHistory } from 'react-router-dom';

function FewOffers() {
    const [offers, setoffers] = useState([]);
    const history = useHistory();
    const Wrapper = styled.div`
    margin:7px;
    `;
    const [isLoading, setisLoading] = useState(true);

    const fetch = async() =>{
        await axios.get('https://api.cashcrow.in/api_campaign').then(data=>{
        let dataItem = data.data.stores;
        setoffers(data.data.stores.slice(0,10));
        });
        setisLoading(false);
    }

    useEffect(() => {
        fetch();
        window.addEventListener("resize", ()=>{})
    }, [])
    
  return (
    isLoading ? 
    <div style={{display: 'flex', justifyContent: 'center', marginTop:'70px'}}>
        <CircularProgress size={'70px'}/> </div>
        :
    <Container >
        <Row className='justify-content-between'>

    {
        offers.map((item,index)=>{
            return(<Col><Wrapper>
                <Offer data={item} key={index}/>
                </Wrapper></Col>
            )
        })
    }
        </Row>
        <div style={{textAlign:"center",width:"100%"}}>
            <Button variant="outlined" onClick={()=>{history.push('/offers')}}>View more</Button>
        </div>
    </Container>
  )
}

export default FewOffers