import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
//import * as React from 'react';
import "./pd.css"
import Grid from "@mui/material/Grid";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import { Button } from "@material-ui/core";



const theme = createTheme();

export default function Productdetails() {
  var navigate=useNavigate()
  const params = useParams();
  const idx = params.id;
  console.log(idx);

  const data = useSelector((state) => state.data.data);
  console.log("product", data);

  
  var po=data.filter((x) => {
  if(+x.id === +idx){
    return x
  }})
  console.log("po",po)

  
  // var items = data.find((e) => {
  //   if (data.id == idx) {
  //     return e;
  //   }
  // });
  //console.log("par",items);
  return (
    <>
    <div>
    {po.map((e)=>{
      return(
        
        <div id ="main">
        <div id="clicked_data">
        <img  src={e.images.image1}/>
        </div>
        <div id="right_box">
        <h2>{e.brand}</h2>
        <h3 style={{color:"#908680"}}>{e.title}</h3>
        <h3>Rs. {e.price} <span id="do">{e.off_price}</span>{e.discount} % off </h3> 
        </div>
        <h5 style={{color:"#1eb0a0"}}></h5>
        <h5>SELECT SIZE</h5>
        <p style={{fontWeight:"600",fontSize:"20px"}}> <span style={{border:"1px solid",padding:"1% 3%" }} className="ml-3">M</span> <span style={{border:"1px solid",padding:"1% 4%" }} className="ml-2">L</span> <span style={{border:"1px solid",padding:"1% 3%"}} className="ml-2">XL</span></p>
        <div id="button">
        <Button id="btn1">add to cart</Button> 
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
        <Grid  className="imagediv">
       
        <img item xs={2} sm={4} md={4}  src={e.images.image2}/>
        <img   item xs={2} sm={4} md={4} src={e.images.image3}/>
        <img item xs={2} sm={4} md={4} src={e.images.image4}/>
        </Grid>
        <h1>{e.desc}</h1>  
        
        <p>{e.color}</p>
        <p>{e.rating}</p>
        
        
        <Button onClick={()=>{navigate("/")}}>go to home</Button>
        
        
        
        </div>
        

      )
    })}
    </div>
    </>
    // <ThemeProvider theme={theme}>
    //   productdetailc
    //   <CssBaseline />
    //   <main>
    //     {/* Hero unit */}
    //     <Box
    //       sx={{
    //         bgcolor: "background.paper",
    //         pt: 8,
    //         pb: 6,
    //       }}
    //     ></Box>
    //     <Container sx={{ py: 8 }} maxWidth="md">
    //       {/* End hero unit */}
    //       <Typography gutterBottom variant="h5" component="h2">
    //         product name here {/* {product.name}*/}
    //       </Typography>
    //       <Typography>
    //         product description here {/* {product.desc}*/}
    //       </Typography>

    //       <Typography>product price {/* {product.price}*/}</Typography>
    //       <Button size="big">add to cart</Button>
    //       <Grid container spacing={4}>
    //         <Typography>product images {/* {product.desc}*/}</Typography></Grid>
    //         </Container>
        
    //   </main>
    // </ThemeProvider>
  );
}
