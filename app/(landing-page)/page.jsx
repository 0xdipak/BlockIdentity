import Navbar from '@/components/navbar/Navbar'
import React from 'react'
import HeroSection from './HeroSection'
import Section from './Section'
import Footer from '@/components/Footer'


const LandingPage = () => {
  return (
    <div>
      {/* Navbar  */}
      <Navbar/>
      {/* HeroSection  */}
      <HeroSection/>
      {/* Section  */}
      <Section/>
      <Footer/>
    </div>
  )
}

export default LandingPage
