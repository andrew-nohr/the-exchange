import React from 'react'
import './header.css'
import SearchIcon from '@mui/icons-material/Search';

function Header() {
  return (
    <div className='header'>
      <image  className='header-logo' src="../public/images/logo.png" />

      <div className='header-search'>
        <input className='head-searchInput' type="text"></input>
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