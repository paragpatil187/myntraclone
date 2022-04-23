import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import { Box, Button, Container, createTheme, ThemeProvider, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import {loginFailure, loginLoading, loginSuccess } from '../../redux/Login/action';
import { Navigate } from 'react-router-dom';
import axios from 'axios';


 export default function Login() {
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const dispatch=useDispatch()
  const {isAuthenticated}=useSelector((state)=>state.login)
  console.log(isAuthenticated)
  const handleLogin=()=>{
    const payload={
      email,
      password
    };
      dispatch(loginLoading())
        dispatch(loginSuccess({token:123456,email:email}))
        axios.post("https://reqres.in/api/login",{
          email,
          password
          
          //  headers:{
          //    "Content-Type":"application/json"
          // }
        })
        .then((res)=> console.log(res))
        
        .catch((err)=>console.log(err))
      
    
    console.log(payload)
   // dispatch(login(payload))
    //dispatch(login({isAuthenticated:true}))
    
  }
  // useEffect(()=>{
  //   handleLogin()
  // },[])
  
  const theme = createTheme();

   if(isAuthenticated){
    return <Navigate to="/"/>
   }
  return (
    <ThemeProvider theme={theme}>
    <Container component="main" maxWidth="xs">
    <div>
    <img src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2022/3/16/d4edb37c-aee8-4989-86f4-33b117edd4bc1647415464555-Banner_Login-Landing-page--1-.jpg" alt=''/>
    <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleLogin}  sx={{ mt: 1 }}>
    <TextField
          required
          fullWidth
          autoFocus
          margin="normal"
          autoComplete="email"
          name='email'
          placeholder='email'
          label="email"
          onChange={(e)=>setEmail(e.target.value)}
          
        /><br/>
        <TextField
        required
        fullWidth
        autoFocus
        margin="normal"
        
        type="password"
        name="password"
        label="password"
        autoComplete="current-password"
        placeholder=' Enter password'
        onChange={(e)=>setPassword(e.target.value)}
        
      /><br/>
      
        <p>By continuing ,I agree to the <span style={{color:"deeppink"}}>Term of Use & Privacy Policy</span></p>
        <Button variant="contained"  style={{backgroundColor:"deeppink"}} type="submit">continue</Button>
        </Box>
<p>Have troble logging in? <span style={{color:"deeppink"}}>Get help</span>email": "eve.holt@reqres.in",
"password": "cityslicka"</p>

    
    </div>
    </Container>
    </ThemeProvider>
  )
  }