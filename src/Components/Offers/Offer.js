import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useState,useEffect} from 'react'

function Offer({data}) {
  const [offerWidth, setofferWidth] = useState("12rem");
  const handleResize = () => {
    setofferWidth(window.innerWidth > 768 ? '12rem':'9rem');
  }
  const payout=(value)=>{
    if(value.split('%').length>1){

      return( Math.floor(parseInt(value.split('%')[0])*.7)+"%")
    }
    else{
      return( Math.floor(parseInt(value.split('₹')[1])*.7)+"₹")
    }
  }
  payout(data.payout)
  useEffect(() => {
    fetch();
    window.addEventListener("resize", handleResize)
}, [])
  return (
    <Card style={{ width: offerWidth,height:'9rem',marginLeft:'0px' }} onClick={()=>{window.open(data.url,'_blank')}}>
      <Card.Img variant="top" src={data.logo} style={{display:"block",width:'9rem',height:"4rem"}}/>
      <Card.Body>
        <Card.Title style={{fontSize:"1rem",textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"}}>{data.merchant}</Card.Title>
        <Card.Text>
            <p>payout{" "}{payout(data.payout)}</p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Offer;