import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
//import * as React from 'react';
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { productReducer } from "../../redux/Data/reducer";

const cards = [1, 2, 3, 4, 5];

const theme = createTheme();

export default function Productdetails() {
  const params = useParams();
  const idx = params.id;
  console.log(idx);

  const data = useSelector((state) => state.data.data);
  console.log("product", data);

  console.log("data", data[0].id);
  var po=data.filter((x) => {
  if(x.id === idx){
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
        <h1>{e.title}</h1>
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
