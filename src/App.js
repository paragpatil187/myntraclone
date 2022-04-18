
import './App.css';
import {Routes,Route,Link} from "react-router-dom"
import Home from './components/Home';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
    <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    </Routes>
      
    </div>
  );
}

export default App;
