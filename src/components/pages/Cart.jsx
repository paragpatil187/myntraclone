import { Button } from '@material-ui/core';
import React from 'react'
import { useSelector } from 'react-redux';

const Cart = () => {
  const data = useSelector((state) => state.data.data);
  console.log("cart", data);
  const id=useSelector((state)=>state.data.cart);
 var idx=id.id
var cartproducts=data.filter((x)=>{
  if(+idx==x.id){
    return x
  }
})
console.log(cartproducts)
  return (
    <div>
    {cartproducts.map((e)=>{
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