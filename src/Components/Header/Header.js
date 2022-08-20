import React from 'react';
import './header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <div className='header'>
      <Link to='/'>
    
      <img className='header-logo' src={require('../../images/logo-4.png')}  alt="The letters E, X, C, H, and has a home with a"/>
      
      </Link>
      <div className="header-search">
        <input className='header-searchInput' type="text"></input>
        <SearchIcon className='header-searchIcon' />

      </div>
      <div className="header-nav">

        <div className='header-option'> 
            <span className='header-optionlineone'> Hello Guest</span>
            <span  className='header-optionlinetwo'> Sign-In</span>
        </div>
        <div className='header-option'>
            <span className='header-optionlineone'> Returns</span>
            <span  className='header-optionlinetwo'> & Orders</span>
        </div>
        <div className='header-option'>
            <span className='header-optionlineone'> Your </span>
            <span  className='header-optionlinetwo'> EXCH+ </span>
        </div>

        <Link to='/checkout'>
        <div className='header-optionBasket'>
            <ShoppingBasketIcon/>
            <span className='header-optionlinetwo header-basketCount'>0</span>
        </div>
        </Link>
      </div>
    </div>
    
  )
}

export default Header 
