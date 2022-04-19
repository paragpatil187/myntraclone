import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import storeData from '../redux/data/action'


const Product = () => {
    const dispatch=useDispatch()
    
    useEffect(()=>{
        fetch("http://localhost:3000/products")
        .then((res)=>res.json())
        .then((res)=>dispatch(storeData(res)))
        .catch((err)=>console.log(err))
    },[])
    const data=useSelector((state)=>state.data)
    console.log(data)
  return (
    <div  style={{display:"flex"}}>
    {
        data.map((data)=>{
            return (
                <div key={data.id} >
                <img src={data.image}/>
                <h1>{data.product_name}</h1>
                <p>{data.price}</p>
                <button>add to cart</button>
                <button>add to wishlist</button>
                
                </div>
            )
        })
    }
    
    
    </div>
  )
}

export default Product