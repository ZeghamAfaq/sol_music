import React from 'react'
import ContactComponent from '../../Components/ContactComponent/contact'
import Footer from '../../Components/Footer/footer'
import Header from '../../Components/Header/header'

const Contact = () => {
  return (
    <div>
      {/* import header section */}
        <Header />
      {/8 import contact component8/}
        <ContactComponent />
      {/* import footer section */}
        <Footer />
    </div>
  )
}

export default Contact