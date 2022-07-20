import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import './style.css'
const Header = () => {
  return (
    <>
    <div className='mainheader'>
        <div className='logo'><link to='/home'><span>Sol</span>Music</link></div>
        <div className='left-nav'>
            <ul className='navbar'>
                <li><link to='/home'>Home</link></li>
                <li><link to='/about'>About</link></li>
                <li className='dropdown'><a href='/pages'>Pages</a>
                    <ul className='sub-menu'>
                        <li><link to='/'>Category</link></li>
                        <li><link to='/playlist'>Playlist</link></li>
                        <li><link to='/'artist>Artist</link></li>
                        <li><link to='/blog'>Blog</link></li>
                        <li><link to='/contact'>Contact</link></li>
                    </ul>
                </li>
                <li><link to='/news'>News</link></li>
                <li><link to='/contact'>Contact</link></li>
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
                    <li><link to='/login'>Login</link></li>
                    <li><link to='/create an account'>Create an Account</link></li>
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
