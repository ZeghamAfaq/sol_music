import React from 'react'
import Header from '../../Components/Header/header'
import Slider from '../../Components/Slider/slider'
import Footer from '../../Components/Footer/footer'
import Subsription from '../../Components/Subsription/subscription'
import Tracks from '../../Components/Tracks/tracks'
import Artist from '../../Components/Artist/artist'
import HowSection from '../../Components/HowSection/howsection'
import PremiumSection from '../../Components/PremiumSection/premiumsection'

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