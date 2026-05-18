import { useState, useEffect } from 'react'
import Appbar          from './components/Appbar'
import Hero            from './components/Hero'
import UpsBanner       from './components/UpsBanner'
import ServiceSection  from './components/ServiceSection'
import ProductSection  from './components/ProductSection'
import Banner          from './components/Banner'
import Reviews         from './components/Reviews'
import Faq             from './components/Faq'
import Contact         from './components/Contact'
import Footer          from './components/Footer'
import FloatingMenu    from './components/FloatingMenu'
import ScrollBackBtn   from './components/ScrollBackBtn'
import Loader          from './components/Loader'

export default function App() {
  const [dark,    setDark]    = useState(false)
  const [loading, setLoading] = useState(true)

  // apply dark class to <html>
  useEffect(() => {
    const root = document.documentElement
    if (dark) root.classList.add('dark')
    else       root.classList.remove('dark')
  }, [dark])

  // fake loader (matches your original Loader component behaviour)
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1400)
    return () => clearTimeout(t)
  }, [])

  if (loading) return <Loader />

  return (
    <div className="surface-1 text-head transition-colors duration-300 min-h-screen">
      <Appbar dark={dark} setDark={setDark} />
      <main>
        <Hero />
        <UpsBanner />
        <ServiceSection />
        <ProductSection />
        <Banner />
        {/* <Reviews /> */}
        <Faq />
        <Contact />
      </main>
      <Footer />
      <FloatingMenu />
      <ScrollBackBtn />
    </div>
  )
}
