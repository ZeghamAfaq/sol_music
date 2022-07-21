import React from 'react'
import './style.css'
import pcard1 from '../../Images/pcard1.png'
import pcard2 from '../../Images/pcard2.png'
import pcard3 from '../../Images/pcard3.png'
import pcard4 from '../../Images/pcard4.png'



const PremiumSection = () => {
  return (
    <div className='premiumSection-component'>
        <div
        className='premiumSection'>
            <div className='premiumSection-heading'>
            <h1>
                Why go Premium
            </h1>
        </div>
        <div className='premiumSection-desc'>
            <p>
                Lorem Ipsam dollor Lorem Ipsam dollor
                Lorem Ipsam dollor Lorem Ipsam dollor
                Lorem Ipsam dollor Lorem Ipsam dollor
                Lorem Ipsam dollor Lorem Ipsam dollor
                Lorem Ipsam dollor Lorem Ipsam dollor
                Lorem Ipsam dollor Lorem Ipsam dollor
                Lorem Ipsam dollor Lorem Ipsam dollor
                Lorem Ipsam dollor Lorem Ipsam dollor
                Lorem Ipsam dollor Lorem Ipsam dollor
                Lorem Ipsam dollor Lorem Ipsam dollor
            </p>
        </div>
        </div>
        
          <div className='premiumSection-cards'>
            <div className='premiumSection-card1'>
                <div className='premiumSection-card1-img'>
                    <img src={pcard1} alt=' premiumSection' />
                </div>
                <div className='premiumSection-card1-desc'>
                    <h4>No add interruptions</h4>
                    <p>Consectetur adipiscing elit</p>
                </div>
            </div>
             <div className='premiumSection-card2'>
                <div className='premiumSection-card2-img'>
                    <img src={pcard2} alt=' premiumSection' />
                </div>
                <div className='premiumSection-card2-desc'>
                    <h4>High Quality</h4>
                    <p>Ectetur adipiscing elit </p>
                </div>
            </div>
             <div className='remiumSection-card3'>
                <div className='premiumSection-card3-img'>
                    <img src={pcard3} alt=' premiumSection' />
                </div>
                <div className='premiumSection-card3-desc'>
                    <h4>Listen Offline</h4>
                    <p>Sed do eiusmod tempor</p>
                </div>
            </div>
             <div className='premiumSection-card4'>
                <div className='premiumSection-card4-img'>
                    <img src={pcard4} alt=' premiumSection' />
                </div>
                <div className='premiumSec-card4-desc'>
                    <h4>Download Music</h4>
                    <p>Adipiscing elit</p>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default PremiumSection