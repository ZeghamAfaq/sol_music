import React from 'react'
import { Link } from 'react-router-dom'
//import MenuIcon from '@mui/icons-material/Menu';
import './style.css'
const Header = () => {
  return (
    <>
    <div className='mainheader'>
        {/* logo */}
        <div className='logo'><Link to='homepage'><span>Sol</span>Music</Link></div>
        <div className='left-nav'>
            {/* main navigation bar */}
            <ul className='navbar'>
                <li><Link to='home'>Home</Link></li>
                <li><Link to='home'>About</Link></li>
                <li className='dropdown'><Link to=''>Pages</Link>
                    <ul className='sub-menu'>
                        <li><Link to='category'>Category</Link></li>
                        <li><Link to='playlist'>Playlist</Link></li>
                        <li><Link to='artistpage'>Artist</Link></li>
                        <li><Link to='contactpage'>Blog</Link></li>
                        <li><Link to='contactpage'>Contact</Link></li>
                    </ul>
                </li>
                <li><Link to='news'>News</Link></li>
                <li><Link to='contactpage'>Contact</Link></li>
            </ul>
        </div>
        <div className='right-nav'>
            <div className='help'>
                <ul>
                    <li><Link to=''>Help</Link></li>
                    <li>|</li>
                </ul>
            </div>
            
            <div className='reg'>
                <ul>
                    <li><Link to='contactpage'>Login</Link></li>
                    <li><Link to='contactpage'>Create an Account</Link></li>
                </ul>
            </div>
        </div>
    </div>

    {/* <div className='menu'>
            <button className='menu-btn'>Menu<MenuIcon /></button>
        </div>
         */}
</>
    
  )
}

export default Header;
