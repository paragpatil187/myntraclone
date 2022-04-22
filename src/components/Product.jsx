import { Button } from '@material-ui/core'
import { Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import storeData, { addCart } from '../redux/Data/action'


const Product = ({form}) => {
  const[category,setCategory]=useState("");
  const[sorte,setSort]=useState("");
  const dispatch=useDispatch()
  const handleNavigate=(productId)=>{
    navigate(`product/${productId}`)
  }
  const data=useSelector((state)=>state.data.data)
  console.log(data)
  const handleCart=(idx)=>{
    // let carter=data.filter((e)=>{
    //   if(e.id==idx){
    //     return e
    //   }
    // })
    data.forEach((e)=>{
      if(e.id==idx){
        dispatch(addCart(e))

      }

    })
  }
    //console.log("carter",carter)


    //  const payload=[
    //    carter
    //  ]
    

  
  const navigate=useNavigate()
    const params=useParams();
        console.log(params.id)
  console.log(form)
    
    
    
    useEffect(()=>{
        fetch("http://localhost:3000/products")
        .then((res)=>res.json())
        .then((res)=>dispatch(storeData(res)))
        .catch((err)=>console.log(err))
       
   },[])
  
    const search=useSelector((state)=>state.data.search)
   console.log("s",search)
   //const form =useSelector((state)=>state.form)
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
    <>
    
    <div  style={{display:"flex" ,flexWrap:"wrap", marginLeft:"20%", gap:"5%"}}>
    <Stack>
    <Button onClick={()=>{setCategory("shoes")}}>shoes</Button>
    <Button onClick={()=>{setCategory("shirt")}}>shirt</Button>
    <Button onClick={()=>{setCategory("Men Clothing")}}>Men Clothing</Button>
    <Button onClick={()=>{setCategory("Men Footwear")}}>Men Footwear</Button>
    <Button onClick={()=>{setCategory("kurta")}}>kurta</Button>
    <Button onClick={()=>{setCategory("tshirt")}}>tshirt</Button>
    <Button onClick={()=>{setCategory("")}}>removefilter</Button>
    <Button onClick={()=>{setSort("ltoh")}}>ascending</Button>
    <Button onClick={()=>{setSort("htol")}}>descending</Button>

    </Stack>
    {
      //   data?.filter((e)=>{
      //     if (form == "") return e;
      //   else if (
      //     e.name?.toLowerCase().includes(form?.toLowerCase()) ||
      //     e.price?.includes(form)
      //   ) {
      //     return e;
      //   }
      // })
        


        
          
          
          data.filter((e)=>{
            if(category==""){
              return e
            }
            else{
              return e.categories==category
            }

          })
          .filter((e)=>{
            if(search==""){
              return e
            }
            else{
              return e.title.toLowerCase().includes(search.toLowerCase())
            }
          })
          .sort((a,b)=>{
            if(sorte==""){
              return 
            }
            else if(sorte=="ltoh"){
              return a.price-b.price
            }
            else if(sorte=="htol"){
              return b.price-a.price
            }
          })


          // else if(sorte=="htol"){
          //   data.sort((a,b)=>b.cost-a.cost)
          // }
        
        .map((e)=>{
            return (
                <div key={e.id}  >
                <img  src={e.images.image1} onClick={()=>handleNavigate(e.id)} alt="product image"/>
                
                <h1>{e.title}</h1>
                <p>{e.price}</p>
                <p>{e.discount}</p>
                <button onClick={()=>{handleCart(e.id)}}>add to cart</button>
                <button>add to wishlist</button>
                
                </div>
            )
        })
    }
    
    
    </div>
    </>
  )
}




export default Product