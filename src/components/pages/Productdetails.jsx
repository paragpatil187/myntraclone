import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

const Productdetails = () => {
    const id=useParams();
    const data=useSelector((state)=>state.data.data)
    console.log("dataofproduct:",data)
    
  return (
    <div>{data}</div>
  )
}

export default Productdetails