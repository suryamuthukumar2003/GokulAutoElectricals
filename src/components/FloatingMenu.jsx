import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Phone, MapPin } from 'lucide-react'
import { shopInfo } from '../data/data'

export default function FloatingMenu() {
  const [open, setOpen] = useState(false)
  const ref = useRef()
  useEffect(() => {
    const fn = e => { if (ref.current && !ref.current.contains(e.target)) setOpen(false) }
    document.addEventListener('mousedown', fn)
    return () => document.removeEventListener('mousedown', fn)
  }, [])
  return (
    <div ref={ref}>
      <AnimatePresence>
        {open && (
          <motion.div initial={{opacity:0,y:10,scale:.9}} animate={{opacity:1,y:0,scale:1}} exit={{opacity:0,y:10,scale:.9}} transition={{duration:.22}}
            className="fixed z-40 right-4 bottom-36 flex flex-col items-center gap-3 bg-white dark:bg-green-950 rounded-2xl p-3 border border-token shadow-2xl shadow-green-500/15">
            <a href={shopInfo.call} title="Call" className="w-11 h-11 rounded-full grad-bg flex items-center justify-center glow hover:scale-110 transition-transform">
              <Phone size={18} className="text-white"/>
            </a>
            <a href={shopInfo.mapsDir} target="_blank" rel="noreferrer" title="Directions"
              className="w-11 h-11 rounded-full bg-gray-500 flex items-center justify-center hover:scale-110 transition-transform shadow-lg shadow-blue-500/25">
              <MapPin size={18} className="text-white"/>
            </a>
            <a href={shopInfo.whatsapp} target="_blank" rel="noreferrer" title="WhatsApp"
              className="w-11 h-11 rounded-full overflow-hidden hover:scale-110 transition-transform shadow-lg">
              <img src="https://res.cloudinary.com/dmtafuh5c/image/upload/v1728196418/photos/whatsapp_rfhpo3.png" alt="WhatsApp" className="w-full h-full object-cover"/>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
      <button onClick={()=>setOpen(p=>!p)} title={open?'Close':'Menu'}
        className={`fixed z-50 bottom-20 right-4 w-12 h-12 grad-bg rounded-full flex items-center justify-center shadow-lg shadow-green-500/35 glow hover:scale-110 active:scale-95 transition-all duration-300 ${open?'rotate-45':''}`}>
        <Plus size={22} className="text-white"/>
      </button>
    </div>
  )
}
