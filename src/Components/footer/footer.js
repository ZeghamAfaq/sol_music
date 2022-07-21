import React from 'react'
import './style.css'
import {Link} from 'react-router-dom'
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
const Footer = () => {
  return (
    <div className='footer'>
        {/* left side of footer */}
        <div className='left-footer'>
            <h1><span>Sol</span>Music</h1>
            {/* copyright */}
            <p>COPYRIGHT ©2022 ALL RIGHTS RESERVED | THIS TEMPLATE IS MADE WITH  BY 
               <FavoriteBorderOutlinedIcon style={{ fontSize: 15,}} />
                <Link to='https://colorlib.com/'>COLORLIB</Link></p>
                {/* icons from material ui */}
            <div className='social'>
                <InstagramIcon />
                <PinterestIcon />
                <FacebookIcon />
                <TwitterIcon />
                <YouTubeIcon />
            </div>
        </div>
        {/* right side of footer */}
        <div className='right-footer'>
            <div className='footer-card'>
                <div className='card1'>
                    <ul>
                        <h1>About Us</h1>
                        <li><Link to='playlist'>Our Story</Link></li>
                        <li><Link to='playlist'>Sol Music Blog</Link></li>
                        <li><Link to='playlist'>History</Link></li>
                    </ul>
                </div>
                <div className='card2'>
                    <ul>
                        <h1>Products</h1>
                        <li><Link to='playlist'>Music</Link></li>
                        <li><Link to='playlist'>Subsription</Link></li>
                        <li><Link to='playlist'>Custom Music</Link></li>
                        <li><Link to='playlist'>Footage</Link></li>
                    </ul>
                    </div>
                <div className='card3'>
                    <ul>
                        <h1>Playlists</h1>
                        <li><Link to='playlist'>Newletters</Link></li>
                        <li><Link to='playlist'>Careers</Link></li>
                        <li><Link to='playlist'>Press</Link></li>
                        <li><Link to='playlist'>Contact</Link></li>
                    </ul>
                    
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Footer