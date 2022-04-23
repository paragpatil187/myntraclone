import { Button } from '@material-ui/core';
import { ConstructionOutlined } from '@mui/icons-material';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteCart, removeallcart } from '../../redux/Data/action';
import { Header } from '../header/Header';
import "./cart.css"
const Cart = () => {
  const dispatch=useDispatch()
  const data = useSelector((state) => state.data.data);
  console.log("cart", data);
  const cartproducts=useSelector((state)=>state.data.cart);
 //var idx=id.id
//  const handleRemove=(id)=>{
//    //alert("hii")
//    var cartproduct=cartproducts.filter((e)=>{
//      if(e.id!=id){
//        return e
//      }
//    })
//    console.log(cartproduct)
   //find by id
   //filter 
   //new ayrray
  


 //}
 
// var cartproducts=data.filter((x)=>{
//   if(+idx==x.id){
//     return x
//   }
// })
const handlecartRemove=(idx)=>{
  const filterdata=cartproducts.filter((e)=>{
    return e.id!=idx
  })
  console.log(filterdata)
  dispatch(deleteCart(idx))

  // data.forEach((e)=>{
  //   if(e.id==idx){
  //     dispatch(deleteCart(e))}
  //   })

}
  const handlecartDelete=()=>{
    dispatch(removeallcart())

  }
// console.log(cartproducts)
let x=cartproducts
  return (
    <>
    <Button onClick={()=>handlecartDelete}>delete cart</Button>
   
    <div className='maincart'>
    
    
    
     
     { x.map((e)=>{
      return(
        <div key={e.id} className='cartdiv'>
        <h1 className='title'>{e.brand}</h1>
        
        <img style={{width:"100%"}} src={e.images.image1} alt="producti"/>
        <h2> Rs {e.price}</h2>
        <br/>
        <Button onClick={()=>{alert("payment")}}>Buy Product</Button>
        <Button className='btns' onClick={()=>handlecartRemove(e.id)}>remove item</Button>

        </div>
      )
    })}
    </div>
    </>
  )
}

export default Cart