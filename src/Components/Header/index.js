import React from 'react'
import './style.css'
const Header = () => {
  return (
    <>
    <div className='navbar'>
        <ul className='logo'>
            <li><span className='multiColor'>Sol</span>Music</li>
        </ul>
        <ul className='nav'>
            <li>Home</li>
            <li>About</li>
            <li>Pages</li>
            <li>News</li>
            <li>Contacts</li>
        </ul>
        <ul className='reg'>
            <li>Help</li>
            <li>|</li>
            <li>Login</li>
            <li>Create an account</li>
        </ul>
    </div>
    </>
  )
}

export default Header;
