import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
export default function ScrollBackBtn() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const fn = () => setShow(window.scrollY > 400)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])
  return (
    <AnimatePresence>
      {show && (
        <motion.button initial={{opacity:0,scale:.6}} animate={{opacity:1,scale:1}} exit={{opacity:0,scale:.6}}
          onClick={()=>window.scrollTo({top:0,behavior:'smooth'})} title="Back to top"
          className="fixed z-50 bottom-5 right-4 w-11 h-11 grad-bg rounded-full flex items-center justify-center shadow-lg shadow-green-500/25 glow-sm hover:scale-110 active:scale-95 transition-all">
          <ArrowUp size={20} className="text-white"/>
        </motion.button>
      )}
    </AnimatePresence>
  )
}
