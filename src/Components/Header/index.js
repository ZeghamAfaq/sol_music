import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import './style.css'
const Header = () => {
  return (
    <>
    <div className='mainheader'>
        <div className='logo'><a href='/'><span>Sol</span>Music</a></div>
        <div className='left-nav'>
            <ul className='navbar'>
                <li><a href='/'>Home</a></li>
                <li><a href='/'>About</a></li>
                <li className='dropdown'><a href='/'>Pages</a>
                    <ul className='sub-menu'>
                        <li><a href='/'>Category</a></li>
                        <li><a href='/'>Playlist</a></li>
                        <li><a href='/'>Artist</a></li>
                        <li><a href='/'>Blog</a></li>
                        <li><a href='/'>Contact</a></li>
                    </ul>
                </li>
                <li><a href='/'>News</a></li>
                <li><a href='/'>Contact</a></li>
            </ul>
        </div>
        <div className='right-nav'>
            <div className='help'>
                <ul>
                    <li><a href='/'>Help</a></li>
                    <li>|</li>
                </ul>
            </div>
            
            <div className='reg'>
                <ul>
                    <li><a href='/'>Login</a></li>
                    <li><a href='/'>Create an Account</a></li>
                </ul>
            </div>
        </div>
    </div>
    <div className='menu'>
            <button className='menu-btn'>Menu<MenuIcon /></button>
        </div>
</>
    
  )
}

export default Header;
