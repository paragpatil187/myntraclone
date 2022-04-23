
import './App.css';
import {Routes,Route,Link, Navigate} from "react-router-dom"
import Home from './components/Home';
import Login from './components/pages/Login';
import { useSelector } from 'react-redux';
import Productdetails from './components/pages/Productdetails';
import Cart from './components/pages/Cart';
const PrivateRoute=({isAuthenticated,children})=>{
  return isAuthenticated ? children:<Navigate to ="/login"/>
}


function App() {
  const {isAuthenticated}=useSelector((state)=>state.login)
  return (
    <div className="App">
    <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/product/:id" element={<Productdetails/>}></Route>
    <Route path="/cart" element={<PrivateRoute isAuthenticated={isAuthenticated}><Cart/></PrivateRoute>}></Route>
    </Routes>
      
    </div>
  );
}

export default App;
