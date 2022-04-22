import { Button } from '@material-ui/core';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteCart } from '../../redux/Data/action';

const Cart = () => {
  const dispatch=useDispatch()
  const data = useSelector((state) => state.data.data);
  console.log("cart", data);
  const cartproducts=useSelector((state)=>state.data.cart);
 //var idx=id.id
 const handlecartDelete=(id)=>{
   //find by id
   //filter 
   //new ayrray
  const payload={
    id:[]
  }
  dispatch(deleteCart(payload))


 }
// var cartproducts=data.filter((x)=>{
//   if(+idx==x.id){
//     return x
//   }
// })
console.log(cartproducts)
let x=cartproducts
  return (
    <div>
    <Button onClick={()=>handlecartDelete}>delete cart</Button>
    {x && x.map((e)=>{
      return(
        <div>
        <h1>{e.title}</h1>
        <h2>{e.price}</h2>
        <img src={e.images.image1} alt="producti"/>
        <br/>
        <Button>Buy Product</Button>

        </div>
      )
    })}
    </div>
  )
}

export default Cart