import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Checkout from './Components/Checkout/Checkout';
import Login from './Components/Login/Login';

function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} /> 
        <Route path="/checkout" element={[<Header/> , <Checkout />]} /> 
        <Route path="/" element={[<Header/> ,<Home />]}  /> 
        
      </Routes>
    </Router>
  );
}

export default App;
