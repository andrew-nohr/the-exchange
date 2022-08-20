import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Checkout from './Components/Checkout/Checkout';

function App() {
  return (
    
    <Router>
      <Header/>
      <Routes>
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/" element={<Home />}  />
        
      </Routes>
    </Router>
  );
}

export default App;
