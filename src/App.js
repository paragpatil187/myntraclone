
import './App.css';
import {Routes,Route, Navigate} from "react-router-dom"
import Home from './components/Home';
import Login from './components/pages/Login';
import { useSelector } from 'react-redux';
import Productdetails from './components/pages/Productdetails';
import Cart from './components/pages/Cart';
import { Header } from './components/header/Header';
import CheckoutPage from './components/pages/CheckoutPage';
import Payment from './components/pages/Payment';
import PaymentSuccess from './components/pages/Paymentsucess';
const PrivateRoute=({isAuthenticated,children})=>{
  return isAuthenticated ? children:<Navigate to ="/login"/>
}


function App() {
  const {isAuthenticated}=useSelector((state)=>state.login)
  
    
    return (
    <div className="App">
    <Header/>
    <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/product/:id" element={<Productdetails/>}></Route>
    <Route path="/cart" element={<PrivateRoute isAuthenticated={isAuthenticated}><Cart/></PrivateRoute>}></Route>
    <Route path="/checkout" element={<CheckoutPage/>}></Route>
    <Route path="/payment" element={<Payment/>}></Route>
    <Route path="/paymentsuccess" element={<PaymentSuccess/>}></Route>
    </Routes>
      
    </div>
  );
}

export default App;
