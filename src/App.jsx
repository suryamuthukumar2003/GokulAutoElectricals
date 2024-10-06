import React, { useEffect, useState } from 'react'
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
import Loader from './components/Loader'
function App() {
  const [isLoading,setIsLoading]=useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(false);
    },2000)
  },[])
  return (
    <>
    {
      isLoading ? (
        <Loader/>
      ):(
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
      )
    }
    </>
  )
}

export default App;