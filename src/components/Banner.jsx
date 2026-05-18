import { motion } from 'framer-motion'
import { CheckCircle, Zap } from 'lucide-react'
import { shopInfo } from '../data/data'

const POINTS = [
  'Authorized Amaron battery dealer since 2000',
  'Specializing in alternators, self motors & auto wiring',
  'Thousands of satisfied customers across Coimbatore',
  'Skilled technicians — precision in every service',
  'Transparent pricing with no hidden charges',
  'Emergency battery support available on call',
]

export default function Banner() {
  return (
    <section id="about" className="py-16 s2 transition-colors duration-300">
      <div className="wrap grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Left – image */}
        <motion.div initial={{opacity:0,x:-24}} whileInView={{opacity:1,x:0}} viewport={{once:true}}
          className="relative hidden md:block">
          <div className="absolute -inset-4 rounded-3xl blur-2xl" style={{background:'rgba(34,197,94,.08)'}}/>
          <img src="https://res.cloudinary.com/dmtafuh5c/image/upload/v1728196403/photos/About_iviauc.png"
            alt="Gokul Auto Electricals"
            className="relative z-10 w-4/5 object-cover rounded-2xl shadow-2xl shadow-green-500/15 border border-token"/>
          <motion.div animate={{y:[0,-6,0]}} transition={{duration:4,repeat:Infinity}}
            className="absolute -bottom-4 -right-2 z-20 sc rounded-2xl px-5 py-3 shadow-xl text-center border border-token">
            <p className="font-display font-black text-4xl grad-text">{shopInfo.yearsExp}+</p>
            <p className="text-xs font-semibold mt-0.5" style={{color:'var(--tb)'}}>Years of Trust</p>
          </motion.div>
        </motion.div>

        {/* Right – text */}
        <motion.div initial={{opacity:0,x:24}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{delay:.1}}>
          <p className="inline-flex items-center gap-1.5 text-green-500 text-xs font-bold tracking-[.18em] mb-4">
            <Zap size={13} className="fill-green-500"/> WHO WE ARE
          </p>
          <h2 className="font-display font-black text-3xl sm:text-5xl mb-5 uppercase leading-tight" style={{color:'var(--th)'}}>
            About <span className="grad-text">Us</span>
          </h2>
          <p className="text-sm leading-relaxed mb-6" style={{color:'var(--tb)'}}>
            For over <strong className="text-green-500">{shopInfo.yearsExp} years</strong>, Gokul Auto Electricals has been a trusted provider of high-quality automotive electrical components and services.
            Specializing in alternators, self motors, and more, we deliver reliable, cost-effective solutions that keep vehicles and homes running smoothly.
          </p>
          <ul className="space-y-2.5 mb-7">
            {POINTS.map(p=>(
              <li key={p} className="flex items-start gap-2.5 text-sm" style={{color:'var(--th)'}}>
                <CheckCircle size={14} className="text-green-500 shrink-0 mt-0.5"/> {p}
              </li>
            ))}
          </ul>
          <a href="tel:9842296867"
            className="inline-flex items-center gap-2 grad-bg text-white font-bold px-6 py-3 rounded-full glow hover:scale-105 active:scale-95 transition-all text-sm shadow-lg shadow-green-500/25">
            Call Us Today →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
