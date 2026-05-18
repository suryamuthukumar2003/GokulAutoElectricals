import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Zap, Menu, X, Sun, Moon, Phone } from 'lucide-react'

const LINKS = [
  { label:'Home',     id:'home' },
  { label:'Services', id:'service' },
  { label:'Products', id:'products' },
  { label:'About',    id:'about' },
  { label:'Reviews',  id:'reviews' },
  { label:'FAQ',      id:'faq' },
  { label:'Contact',  id:'contact' },
]
const go = id => { const el=document.getElementById(id); if(el) el.scrollIntoView({behavior:'smooth'}) }

export default function Appbar({ dark, setDark }) {
  const [solid, setSolid] = useState(false)
  const [open,  setOpen]  = useState(false)
  const ref = useRef()

  useEffect(() => {
    const fn = () => setSolid(window.scrollY > 50)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    const fn = e => { if (ref.current && !ref.current.contains(e.target)) setOpen(false) }
    document.addEventListener('mousedown', fn)
    return () => document.removeEventListener('mousedown', fn)
  }, [])

  return (
    <motion.header ref={ref}
      initial={{y:-64}} animate={{y:0}} transition={{duration:.5}}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${solid ? 'nav-surface shadow-md shadow-green-900/20' : ''}`}
    >
      <div className="wrap flex items-center justify-between h-16">
        {/* Logo */}
        <button onClick={() => go('home')} className="flex items-center gap-2 shrink-0 group">
          <div className="relative w-9 h-9 grad-bg rounded-xl grid place-items-center glow-sm group-hover:scale-110 transition-transform">
            <Zap size={18} className="text-white fill-white" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-green-300 rounded-full border-2 border-white dark:border-[#030f07] ping2" />
          </div>
          <div className="leading-none">
            <p className="block font-display font-black text-[15px] text-green-600 dark:text-green-400 tracking-wide">GOKUL AUTO</p>
            <p className="block text-[10px] font-semibold tracking-[.14em]" style={{color:'var(--tm)'}}>ELECTRICALS</p>
          </div>
        </button>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {LINKS.map(n => (
            <button key={n.id} onClick={() => go(n.id)}
              className="px-3 py-1.5 text-sm font-semibold transition-colors duration-200 relative group"
              style={{color:'var(--tb)'}}
              onMouseEnter={e => e.currentTarget.style.color='#22c55e'}
              onMouseLeave={e => e.currentTarget.style.color='var(--tb)'}
            >
              {n.label}
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-green-500 group-hover:w-full transition-all duration-300 rounded-full" />
            </button>
          ))}
        </nav>

        {/* Right */}
        <div className="flex items-center gap-2">
          <button onClick={() => setDark(!dark)}
            className="w-9 h-9 rounded-xl grid place-items-center transition-all border border-token"
            style={{background:'var(--bg-2)',color:'var(--tm)'}}>
            {dark ? <Sun size={16}/> : <Moon size={16}/>}
          </button>
          <a href="tel:9842296867"
            className="hidden sm:flex items-center gap-1.5 grad-bg text-white text-xs font-bold px-4 py-2 rounded-xl glow-sm hover:scale-105 active:scale-95 transition-all">
            <Phone size={13}/> Call Now
          </a>
          <button onClick={() => setOpen(!open)}
            className="lg:hidden w-9 h-9 rounded-xl grid place-items-center transition-all"
            style={{color:'var(--tm)'}}>
            {open ? <X size={18}/> : <Menu size={18}/>}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}}
            className="lg:hidden overflow-hidden border-t border-token-mid"
            style={{background:'var(--nav-bg)',backdropFilter:'blur(14px)'}}>
            <ul className="wrap py-3 flex flex-col gap-0.5">
              {LINKS.map(n => (
                <li key={n.id}>
                  <button onClick={() => { go(n.id); setOpen(false) }}
                    className="w-full text-left py-3 px-2 border-b font-semibold text-sm transition-colors"
                    style={{borderColor:'var(--border)',color:'var(--tb)'}}>
                    {n.label}
                  </button>
                </li>
              ))}
              <li className="pt-2">
                <a href="tel:9842296867" className="flex items-center gap-2 text-green-500 font-bold text-sm">
                  <Phone size={14}/> +91 9842296867
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
