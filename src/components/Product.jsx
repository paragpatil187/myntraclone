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
    <div className='categoriescrousel'>
    <div onClick={()=>{setCategory("tshirt")}}><img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/2/19ec05fd-2288-4d94-826e-7c8e980ed90a1651475194672-T-Shirts--Men-.jpg" alt="categories"/></div>
    <div onClick={()=>{setCategory("shirt")}}><img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/2/d225e8f6-2295-427f-b1f8-9c4812469de51651475194250-Formal-Shirts.jpg" alt="shirts"/></div>
    <div onClick={()=>{setCategory("shoes")}}><img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/2/8658c08a-13d3-46e5-894e-55a8896f6ad71651475194257-Formal-Shoes.jpg" alt="shoes"/> </div>
    <div onClick={()=>{setCategory("Men Clothing")}}><img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/2/101edb35-e70b-453a-99ad-307c9a2ff04b1651475194201-Casual-Shirts-Men.jpg" alt="men clothing"/></div>
    <div onClick={()=>{setCategory("Men Footwear")}}><img src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/2/6aa9f929-ddf2-4aff-9826-9a267f6330fc1651483710221-Roadster-_M-H_-_More.jpg" alt="mens footewear"/></div>
    <div onClick={()=>{setCategory("kurta")}}><img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/2/95d0f95e-f564-4570-b28b-3075e704f0831651475194389-Kurtas-_-Kurta-Sets-Men.jpg" alt="kurta"/></div>
    
    </div>
    <div className='removefilter' onClick={()=>{setCategory("")}}><img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/7/1e599d37-1ed6-4e39-9057-ffb4065173b51651897264796-Unbelievable-Deals.jpg" alt="remove filter"/></div>
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
          data
          
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
          }).slice(pagesVisited, pagesVisited + itemLimit)
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