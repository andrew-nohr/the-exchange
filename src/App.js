import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Checkout from './Components/Checkout/Checkout';
import Login from './Components/Login/Login';
import { useEffect } from "react";
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from "../src/fireBase";
import { useStateValue } from "../src/Components/StateProvider/StateProvider";

function App() {

  const [{ user }, dispatch] = useStateValue();

  // will only run once when the app component loads...acts as a dynamic if statement in React
  useEffect (() => {
    onAuthStateChanged(auth, (user) => {
       if (user) {
        //user is logged in
        dispatch ({
          type: "SET-USER",
          user: user,
        });
       } else (
        // user is logged out
        dispatch ({
          type: "SET-USER",
          user: null,
        })
       )
    })
  }, [user]);

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
