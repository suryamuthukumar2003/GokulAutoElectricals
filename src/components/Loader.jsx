import { motion } from 'framer-motion'
import { Zap } from 'lucide-react'
export default function Loader() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-6 s1">
      <motion.div animate={{scale:[1,1.15,1],rotate:[0,5,-5,0]}} transition={{duration:1.2,repeat:Infinity}}
        className="w-16 h-16 grad-bg rounded-2xl flex items-center justify-center glow">
        <Zap size={30} className="text-white fill-white"/>
      </motion.div>
      <div className="text-center">
        <p className="font-display font-black text-2xl grad-text">GOKUL AUTO</p>
        <p className="text-green-500 text-xs tracking-[.22em] font-semibold mt-1">ELECTRICALS</p>
      </div>
      <div className="w-40 h-1 rounded-full overflow-hidden" style={{background:'var(--bg-3)'}}>
        <motion.div initial={{width:'0%'}} animate={{width:'100%'}} transition={{duration:1.3}} className="h-full grad-bg rounded-full"/>
      </div>
    </div>
  )
}
