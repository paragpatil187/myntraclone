import { Button } from '@material-ui/core';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteCart } from '../../redux/Data/action';

const Cart = () => {
  const [idx,setIdx]=useState("")
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
const handlecartDelete=()=>{

}
console.log(cartproducts)
let x=cartproducts
  return (
    <div>
    <Button onClick={()=>handlecartDelete}>delete cart</Button>
    {x.filter((e)=>{
      if(+idx!=+e.id){
        return e

      }
    })
      .map((e)=>{
      return(
        <div>
        <h1>{e.title}</h1>
        <h2>{e.price}</h2>
        <img src={e.images.image1} alt="producti"/>
        <br/>
        <Button>Buy Product</Button>
        <Button onClick={()=>setIdx(e.id)}>remove item</Button>

        </div>
      )
    })}
    </div>
  )
}

export default Cart