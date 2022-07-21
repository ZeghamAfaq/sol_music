import React from 'react'
import './style.css'
import icon1 from '../../Images/icon1.png'
import icon2 from '../../Images/icon2.png'
import icon3 from '../../Images/icon3.png'

const HowSection = () => {
  return (
    <div className='how-section'>
        <div className='head-sec'>
            <h1>How It Works</h1>
        </div>
        <div className='desc-sec'>
            <div className='create-account'>
                 <div className='icon1'>
                <img src={icon1} alt='create account' />
            </div>
            {/* create an account */}

            <h1>Create an Account</h1>
            <p>Lorem Ipsam Dollor Lorem Ipsam Dollor
                Lorem Ipsam Dollor Lorem Ipsam Dollor
                Lorem Ipsam Dollor Lorem Ipsam Dollor
                Lorem Ipsam Dollor Lorem Ipsam Dollor
                Lorem Ipsam Dollor Lorem Ipsam Dollor
            </p>
        </div>
        {/* subscription plans */}
        <div className='plan'>
            <div className='icon2'>
                <img src={icon2} alt='create account' />
            </div>
            {/* download music */}
             <h1>Download Music</h1>
            <p>Lorem Ipsam Dollor Lorem Ipsam Dollor
                Lorem Ipsam Dollor Lorem Ipsam Dollor
                Lorem Ipsam Dollor Lorem Ipsam Dollor
                Lorem Ipsam Dollor Lorem Ipsam Dollor
                Lorem Ipsam Dollor Lorem Ipsam Dollor
            </p>
        </div>
        <div className='download'>
            <div className='icon3'>
                <img src={icon3} alt='create account' />
            </div>
            
             <h1>Choose a plan</h1>
            <p>Lorem Ipsam Dollor Lorem Ipsam Dollor
                Lorem Ipsam Dollor Lorem Ipsam Dollor
                Lorem Ipsam Dollor Lorem Ipsam Dollor
                Lorem Ipsam Dollor Lorem Ipsam Dollor
                Lorem Ipsam Dollor Lorem Ipsam Dollor
            </p>
        </div>
    </div>
       
       </div>  
  )
}

export default HowSection