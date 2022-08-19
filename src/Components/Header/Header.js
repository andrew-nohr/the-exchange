import React from 'react'
import './header.css'
import SearchIcon from '@mui/icons-material/Search';
import logo from '../../images/logo.png';

function Header() {
  return (
    <div className='header'>
      <image className='header-logo' src={logo}  alt="The letters E, X, C, H, and has a home with a"/>

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

      </div>
    </div>
    
  )
}

export default Header 
