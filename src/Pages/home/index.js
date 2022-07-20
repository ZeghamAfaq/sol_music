import React from 'react'
import Header from '../../Components/Header'
import Slider from '../../Components/Slider'
import Footer from '../../Components/Footer'
import Subsription from '../../Components/Subsription'
import Tracks from '../../Components/Tracks'
import Artist from '../../Components/Artist'
import HowSection from '../../Components/HowSection'
import PremiumSection from '../../Components/PremiumSection'

const Home = () => {
  return (
    <div>
        <Header />
        <Slider />
        <Tracks />
        <HowSection />
        <Artist />
        <Subsription />
        <PremiumSection />
        <Footer />
    </div>
  )
}

export default Home