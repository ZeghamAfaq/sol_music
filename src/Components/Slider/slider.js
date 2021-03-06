import React from 'react'
import './style.css'
import Image from '../../Images/img1.png'
import { Swiper, SwiperSlide } from "swiper/react";


//  import required modules
import { Pagination } from "swiper";
const Slider = () => {
  return (
    <div className='slider'>
      {/* swiper laborary */}
      <Swiper
        slidesPerView={1}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide> <div className='left'>
            <h1><span>Music</span> for 
              everyone.
            </h1>
            <p>Lorem Ipsam Dollor Lorem Ipsam Dollor Lorem Ipsam Dollor Lorem Ipsam Dollor 
                Lorem Ipsam Dollor
                Lorem Ipsam Dollor
                Lorem Ipsam Dollor
                Lorem Ipsam Dollor
                Lorem Ipsam Dollor
            </p>
            <div className='slider-btns'>
                  <button className='btn1'>DOWNLOAD NOW</button>
                  <button className='btn2'>START FREE TRIAL</button>
            </div>
          </div>
          <div className='right'>
            <img src={Image} alt='Music' className='img'/>
          </div></SwiperSlide>
        <SwiperSlide> <div className='left'>
            <h1><span>Listen</span> to 
              new Music.
            </h1>
            <p>Lorem Ipsam Dollor Lorem Ipsam Dollor Lorem Ipsam Dollor Lorem Ipsam Dollor 
                Lorem Ipsam Dollor
                Lorem Ipsam Dollor
                Lorem Ipsam Dollor
                Lorem Ipsam Dollor
                Lorem Ipsam Dollor
            </p>
            <div className='slider-btns'>
                  <button className='btn1'>DOWNLOAD NOW</button>
                  <button className='btn2'>START FREE TRIAL</button>
            </div>
          </div>
          <div className='right'>
            <img src={Image} alt='Music' className='img'/>
          </div></SwiperSlide>
      </Swiper>
       
        </div>
  )
}

export default Slider