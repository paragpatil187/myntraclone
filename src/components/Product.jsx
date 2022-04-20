import { Button } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import storeData from '../redux/Data/action'


const Product = () => {
    const dispatch=useDispatch()
    
    
    useEffect(()=>{
        fetch("http://localhost:3000/products")
        .then((res)=>res.json())
        .then((res)=>dispatch(storeData(res)))
        .catch((err)=>console.log(err))
       
   },[])
   const data=useSelector((state)=>state.data.data)
   console.log(data)
   //console.log(dispatch)
//    const handleCost =(cost)=>{
//     let item=[...data]
//      if(cost=="ltoh"){
         
//          item.sort((a,b)=>a.price - b.price);
//          showData(item)
//      }
//      else{
//      item.sort((a, b) => b.price - a.price);
//      showData(item)
//      }



 
 

   
    
        
    
    
    
  return (
    <div  style={{display:"flex" ,flexWrap:"wrap", marginLeft:"20%", gap:"5%"}}>
    {
        data.map((e)=>{
            return (
                <div key={e.id} >
                <img  src={e.image1} alt="product image"/>
                
                <h1>{e.name}</h1>
                <p>{e.price}</p>
                <p>{e.discount}</p>
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