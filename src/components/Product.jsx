import { Button } from '@material-ui/core'
import { Pagination, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import storeData, { addCart } from '../redux/Data/action'

import "./product.css"


const Product = () => {
  const[category,setCategory]=useState("");
  const[sorte,setSort]=useState("");
  const [page,setPage]=useState(0);
  const dispatch=useDispatch()
  const itemLimit=8;
const pagesVisited=page*itemLimit;
const changePage=({selected})=>{
  setPage(selected);
};

  const handleNavigate=(productId)=>{
    navigate(`product/${productId}`)
  }
  const data=useSelector((state)=>state.data.data)
  console.log(data)
  const pageTotal=Math.ceil(data.length/itemLimit);
  
  const handleCart=(idx)=>{
    data.forEach((e)=>{
      if(e.id==idx){
        dispatch(addCart(e))

      }

    })
  }
    

  
  const navigate=useNavigate()
    const params=useParams();
        console.log(params.id)

    
    
    
    useEffect(()=>{
        fetch("https://serverfakeappparag.herokuapp.com/products")
        .then((res)=>res.json())
        .then((res)=>dispatch(storeData(res)))
        .catch((err)=>console.log(err))
       
   },[])
  
    const search=useSelector((state)=>state.data.search)
   console.log("s",search)
  return (
    <>
    <div className='navbar2'>
    <div className='navbar2childdiv1'>FILTER</div>
    <div className='navbar2childdiv2'></div>
    <div className='navbar2childdiv3'>sort by
    <Button onClick={()=>{setSort("ltoh")}}>ascending</Button><br/>
    <Button onClick={()=>{setSort("htol")}}>descending</Button><br/>
    
    </div>

    </div>
    <div className='maindiv'>
    <div className='buttondiv'>
    <Button  onClick={()=>{setCategory("shoes")}}>shoes</Button><br/>
    <Button onClick={()=>{setCategory("shirt")}}>shirt</Button><br/>
    <Button onClick={()=>{setCategory("Men Clothing")}}>Men Clothing</Button><br/>
    <Button onClick={()=>{setCategory("Men Footwear")}}>Men Footwear</Button><br/>
    <Button onClick={()=>{setCategory("kurta")}}>kurta</Button><br/>
    <Button onClick={()=>{setCategory("tshirt")}}>tshirt</Button><br/>
    <Button onClick={()=>{setCategory("")}}>removefilter</Button><br/>
     

    </div>
    <div className='imagesdiv'>
  {
          data.slice(pagesVisited, pagesVisited + itemLimit)
          
          .filter((e)=>{
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
        .map((e)=>{
            return (
              
                <div key={e.id}  className="images" >
                <img  src={e.images.image1} onClick={()=>handleNavigate(e.id)} alt="product image"/>
                
                <p className='titlename'>{e.brand}</p>
                <p className='nameofitem'>{e.title}</p>
                <p> Rs {e.price}</p>
                <p>{e.discount}</p>
                <Button id='btn1' onClick={()=>{handleCart(e.id)}}>ADD TO BAG</Button>
                
                </div>
            )
        })
    }
    </div>
    
    
    
    </div>
    
    <ReactPaginate
      previousLabel={"Previous"}
      nextLabel={"Next"}
      pageCount={pageTotal}
      onPageChange={changePage}
      containerClassName={"paginationBttns"}
      theme="square-fill"
    />
    </>
  )
}




export default Product