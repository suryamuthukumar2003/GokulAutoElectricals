import React, { useEffect } from 'react'
import Appbar from './components/Appbar'
import Hero from './components/Hero'
import Banner from './components/Banner'
import ScrollBackButton from './components/ScrollBackButton'
import Footer from './components/Footer'
import UpsBanner from './components/UpsBanner'
import FloatingMenu from './components/FloatingMenu'
import Faq from './components/Faq'
import ServiceSection from './components/ServiceSection'
import GReviews from './components/GReviews'
function App() {
  
  return (
    <>
    <main>
      <Appbar/>
      <Hero/>
      <ServiceSection />
      <UpsBanner/>
      <Banner/> 
      <FloatingMenu/>
      <ScrollBackButton/>
      <GReviews/>
      <Faq/>
      <Footer/>
    </main>
    </>
  )
}

export default App;