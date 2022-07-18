import React from 'react'
import './style.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
const Footer = () => {
  return (
    <div className='footer'>
        <div className='left-footer'>
            <h1><span>Sol</span>Music</h1>
            <p>COPYRIGHT ©2022 ALL RIGHTS RESERVED | THIS TEMPLATE IS MADE WITH  BY 
               <FavoriteBorderOutlinedIcon style={{ fontSize: 15,}} />
                <a href='https://colorlib.com/' target='_blank'>COLORLIB</a></p>
            <div className='social'>
                <InstagramIcon />
                <PinterestIcon />
                <FacebookIcon />
                <TwitterIcon />
                <YouTubeIcon />
            </div>
        </div>
        <div className='right-footer'>
            <div className='footer-card'>
                <div className='card1'>
                    <ul>
                        <h1>About Us</h1>
                        <li><a href='/'>Our Story</a></li>
                        <li><a href='/'>Sol Music Blog</a></li>
                        <li><a href='/'>History</a></li>
                    </ul>
                </div>
                <div className='card2'>
                    <ul>
                        <h1>Products</h1>
                        <li><a href='/'>Music</a></li>
                        <li><a href='/'>Subsription</a></li>
                        <li><a href='/'>Custom Music</a></li>
                        <li><a href='/'>Footage</a></li>
                    </ul>
                    </div>
                <div className='card3'>
                    <ul>
                        <h1>Playlists</h1>
                        <li><a href='/'>Newletters</a></li>
                        <li><a href='/'>Careers</a></li>
                        <li><a href='/'>Press</a></li>
                        <li><a href='/'>Contact</a></li>
                    </ul>
                    
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Footer