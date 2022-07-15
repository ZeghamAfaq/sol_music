import React from 'react'
import './style.css'
const Header = () => {
  return (
    <div className='mainheader'>
        <div className='logo'><span>Sol</span>Music</div>
        <div className='left-nav'>
            <ul className='navbar'>
                <li>Home</li>
                <li>About</li>
                <li>Pages</li>
                <li>News</li>
                <li>Contact</li>
            </ul>
        </div>
        <div className='right-nav'>
            <div className='help'>
                <ul>
                    <li>Help</li>
                    <li>|</li>
                </ul>
            </div>
            
            <div className='reg'>
                <ul>
                    <li>login</li>
                    <li>Create an Account</li>
                </ul>
            </div>
        </div>
        <div className='menu'>
            <button className='menu-btn'>Menu</button>
        </div>
      
    </div>
  )
}

export default Header;
