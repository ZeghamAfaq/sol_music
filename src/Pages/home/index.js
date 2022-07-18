import React from 'react'
import Header from '../../Components/Header'
import Slider from '../../Components/Slider'
import Footer from '../../Components/Footer'
import Subsription from '../../Components/Subsription'
import Tracks from '../../Components/Tracks'
import Artist from '../../Components/Artist'

const Home = () => {
  return (
    <div>
        <Header />
        <Slider />
        <Tracks />
        <Subsription />
        <Artist />
        <Footer />
    </div>
  )
}

export default Home