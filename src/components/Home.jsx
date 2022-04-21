import React from 'react'
import { useSelector } from 'react-redux'
import { Header } from './header/Header'
import Productdetails from './pages/Productdetails'
import Product from './Product'


function Home() {
  const data=useSelector((state)=>state.data.data)
   console.log( "home",data)
  return (
    <>
    <Header/>
    <Product />
   
    
    <div>Home</div>
    
    </>
  )
}

export default Home