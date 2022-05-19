import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
//import * as React from 'react';
import "./pd.css"


import { createTheme, ThemeProvider } from "@mui/material/styles";

import { Button } from "@material-ui/core";
import { addCart } from "../../redux/Data/action";



const theme = createTheme();

export default function Productdetails() {
  var navigate=useNavigate()
  const params = useParams();
  const dispatch=useDispatch();
  const idx = params.id;
  console.log(idx);


  const data = useSelector((state) => state.data.data);
  console.log("product", data);

  
  var po=data.filter((x) => {
  if(+x.id === +idx){
    return x
  }})
  console.log("po",po);
  const handleCart=(idx)=>{
    data.forEach((e)=>{
      if(e.id==idx){
        dispatch(addCart(e))

      }

    })
      
      

      
    
  }


  
  // var items = data.find((e) => {
  //   if (data.id == idx) {
  //     return e;
  //   }
  // });
  //console.log("par",items);
  return (
    
    <div>
    {po.map((e)=>{
      return(
        <div>
        
        <div id ="main">
        <div id="clicked_data">
        <img  src={e.images.image1}/>
        </div>
        <div id="right_box">
        <h2>{e.brand}</h2>
        <h3 style={{color:"#908680"}}>{e.title}</h3>
        <h3>Rs. {e.price} <span id="do">{e.off_price}</span>{e.discount} % off </h3> 
        
        
        
        <h5 style={{color:"#1eb0a0"}}></h5>
        <h5>SELECT SIZE</h5>
        <p style={{fontWeight:"600",fontSize:"20px"}}> <span style={{border:"1px solid",padding:"1% 3%" }} className="ml-3">M</span> <span style={{border:"1px solid",padding:"1% 4%" }} className="ml-2">L</span> <span style={{border:"1px solid",padding:"1% 3%"}} className="ml-2">XL</span></p>
        <div id="button">
        <Button id="btn1" onClick={handleCart(idx)}>add to cart</Button> 
        <Button id="btn2">add to wishlist</Button>
        </div>
        
        <div id="content">
    <input type="text"  id="pin" placeholder="Enter a PIN code" />
    <h5 style={{marginTop:"1%"}}>Please enter PIN code to check delivery time & Pay on Delivery Availability</h5>

    
    <ul>
        <li>100% Original Products</li>
        <li>Pay on delivery might be available</li>
        <li>Easy 15 days returns and exchanges</li>
        <li>Try & Buy might be available</li>
        <li>Regular fit</li>
      
        <li>Polo with classic collar</li>
        <li>Hand wash</li>
    </ul>
</div>
<h3>BEST OFFERS</h3>
<p>This product is already at its best price</p>
<ul>
    <li>EMI option available</li>
</ul>

<p style={{color:"red",marginTop:"0px"}}>View Plan</p>
</div>
</div>
        <div  className="imagediv">
       <div className="imagedivimg"><img style={{width:"100%",height:"400px"}} src={e.images.image2}/></div>
       <div className="imagedivimg"><img style={{width:"100%",height:"400px"}}  src={e.images.image3}/></div>
       <div className="imagedivimg"><img style={{width:"100%",height:"400px"}}  src={e.images.image4}/></div>

        
        
        
        </div> 
      </div>  

      )
      
    })}
    </div>
    
    
  );
}
