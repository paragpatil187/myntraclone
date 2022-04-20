import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/Login/action';
import { Navigate } from 'react-router-dom';


 export default function Login() {
  const[username,setUsername]=useState("");
  const[password,setPassword]=useState("");
  const dispatch=useDispatch()
  let {isAuthenticated}=useSelector((state)=>state.login)
  const handleLogin=()=>{
    const payload={
      username,
      password
    };
    console.log(payload)
    dispatch(login(payload))
    
  }
  
 

  //  if(isAuthenticated){
  //   return <Navigate to="/"/>
  //  }
  return (
    <div>
    <img src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2022/3/16/d4edb37c-aee8-4989-86f4-33b117edd4bc1647415464555-Banner_Login-Landing-page--1-.jpg" alt=''/>
    <TextField
          required
          id="outlined-disabled"
          name='username'
          placeholder='username'
          onChange={(e)=>setUsername(e.target.value)}
          
        /><br/>
        <TextField
        required
        id="outlined-disabled"
        name="password"
        placeholder=' Enter password'
        onChange={(e)=>setPassword(e.target.value)}
        
      /><br/>
        <p>By continuing ,I agree to the <span style={{color:"deeppink"}}>Term of Use & Privacy Policy</span></p>
        <Button variant="contained"  style={{backgroundColor:"deeppink"}} onClick={handleLogin}>continue</Button>
<p>Have troble logging in? <span style={{color:"deeppink"}}>Get help</span></p>

    
    </div>
  )
  }