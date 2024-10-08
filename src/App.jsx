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
import Loader from './components/Loader'
import Review from './components/Review'
function App() {
  const [isLoading,setIsLoading]=useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(false);
    },4000)
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
      <Faq/>
      <Footer/>
    </main>
      )
    }
    </>
  )
}

export default App;