import React from 'react'
import './style.css'
import card1 from '../../Images/card1.png'
import card2 from '../../Images/card2.png'
import card3 from '../../Images/card3.png'
import card4 from '../../Images/card4.png'



const Artist = () => {
  return (
    <div className='artist-component'>
        <div
        className='artist'>
            {/* heading section */}
            <div className='artist-heading'>
            <h1>
                Our Concepts &
                Artists
            </h1>
        </div>
        {/* description section */}
        <div className='artist-desc'>
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
        {/* different artist cards */}
          <div className='artist-cards'>
            <div className='artist-card1'>
                <div className='artist-card1-img'>
                    <img src={card1} alt=' Artist' />
                </div>
                <div className='artist-card1-desc'>
                    <p>SolMusic</p>
                </div>
            </div>
             <div className='artist-card2'>
                <div className='artist-card2-img'>
                    <img src={card2} alt=' Artist' />
                </div>
                <div className='artist-card2-desc'>
                    <p>Live Concerts</p>
                </div>
            </div>
             <div className='artist-card3'>
                <div className='artist-card3-img'>
                    <img src={card3} alt=' Artist' />
                </div>
                <div className='artist-card3-desc'>
                    <p>Dj Sets</p>
                </div>
            </div>
             <div className='artist-card4'>
                <div className='artist-card4-img'>
                    <img src={card4} alt=' Artist' />
                </div>
                <div className='artist-card4-desc'>
                    <p>Live Streams</p>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Artist