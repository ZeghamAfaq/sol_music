import React from 'react'
import './style.css'
import Image from '../../Images/img1.png'
const Slider = () => {
  return (
    <div className='slider'>
        <div className='left'>
            <h1><span>Music</span> for everyone. </h1>
            <p>Lorem Ipsam Dollor Lorem Ipsam Dollor Lorem Ipsam Dollor Lorem Ipsam Dollor 
                Lorem Ipsam Dollor
                Lorem Ipsam Dollor
                Lorem Ipsam Dollor
                Lorem Ipsam Dollor
                Lorem Ipsam Dollor</p>
            <button>DOWNLOAD NOW</button>
            <button>START FREE TRIAL</button>
        </div>
        <div className='right'>
           <img src={Image} alt='Music' className='img'/>
        </div>
    </div>
  )
}

export default Slider