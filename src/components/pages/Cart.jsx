import { Button } from '@material-ui/core';
import { ConstructionOutlined } from '@mui/icons-material';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteCart, removeallcart } from '../../redux/Data/action';

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
    <div>
    <Button onClick={()=>handlecartDelete}>delete cart</Button>
    
     
     { x.map((e)=>{
      return(
        <div>
        <h1>{e.title}</h1>
        <h2>{e.price}</h2>
        <img src={e.images.image1} alt="producti"/>
        <br/>
        <Button>Buy Product</Button>
        <Button onClick={()=>handlecartRemove(e.id)}>remove item</Button>

        </div>
      )
    })}
    </div>
  )
}

export default Cart