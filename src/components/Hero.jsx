// import { Suspense } from 'react'
// import { motion } from 'framer-motion'
// import { Phone, ArrowRight, Shield, Award, Truck, Zap } from 'lucide-react'
// import BatteryScene from './BatteryScene'

// const STATS = [
//   { val:'24+',  sub:'Years Experience' },
//   { val:'10K+', sub:'Happy Customers' },
//   { val:'100%', sub:'Genuine Products' },
//   { val:'24/7', sub:'Emergency Support' },
// ]

// export default function Hero() {
//   return (
//     <section id="home" className="relative min-h-screen flex flex-col overflow-hidden s1 transition-colors duration-300">
//       <div className="absolute inset-0 grid-bg pointer-events-none" />
//       <div className="absolute top-0 left-0 w-80 h-80 rounded-full blur-3xl pointer-events-none" style={{background:'rgba(34,197,94,.07)',transform:'translate(-30%,-30%)'}} />
//       <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full blur-3xl pointer-events-none" style={{background:'rgba(34,197,94,.06)',transform:'translate(25%,25%)'}} />

//       <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
//         <line x1="0" y1="100%" x2="35%" y2="0" stroke="#22c55e" strokeWidth=".8" strokeOpacity=".08"/>
//         <line x1="65%" y1="100%" x2="100%" y2="20%" stroke="#4ade80" strokeWidth=".6" strokeOpacity=".06"/>
//       </svg>

//       {/* Main grid */}
//       <div className="relative z-10 flex-1 wrap pt-24 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
//         {/* Left */}
//         <div className="flex flex-col">
//           <motion.div initial={{opacity:0,x:-20}} animate={{opacity:1,x:0}} transition={{duration:.6}}
//             className="inline-flex items-center gap-2 w-fit rounded-full px-4 py-1.5 mb-6 border"
//             style={{background:'rgba(34,197,94,.08)',borderColor:'rgba(34,197,94,.25)'}}>
//             <Zap size={13} className="text-green-500 fill-green-500" />
//             <span className="text-green-600 dark:text-green-400 text-[11px] font-bold tracking-[.15em]">AUTHORIZED AMARON DEALER · COIMBATORE</span>
//           </motion.div>

//           <motion.h1 initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:.65,delay:.08}}
//             className="font-display font-black leading-tight mb-4">
//             <span className="block text-4xl sm:text-5xl xl:text-6xl" style={{color:'var(--th)'}}>Power Your Journey</span>
//             <span className="block text-4xl sm:text-5xl xl:text-6xl grad-text">with Amaron</span>
//             <span className="block text-xl sm:text-2xl font-semibold mt-1" style={{color:'var(--tb)'}}>Batteries &amp; UPS Solutions</span>
//           </motion.h1>

//           <motion.p initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:.65,delay:.15}}
//             className="text-sm sm:text-base leading-relaxed max-w-md mb-6" style={{color:'var(--tb)'}}>
//             Gokul Auto Electricals — your trusted source for high quality Amaron batteries and UPS systems.
//             Experience unmatched performance and reliability that keeps you moving.
//           </motion.p>

//           <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.24}}
//             className="flex flex-wrap gap-4 mb-7">
//             {[{icon:Shield,label:'Upto 4Y Warranty'},{icon:Award,label:'Authorized Dealer'},{icon:Truck,label:'Free Installation'}].map(({icon:I,label})=>(
//               <span key={label} className="flex items-center gap-1.5 text-sm font-medium" style={{color:'var(--th)'}}>
//                 <I size={14} className="text-green-500"/> {label}
//               </span>
//             ))}
//           </motion.div>

//           <motion.div initial={{opacity:0,y:14}} animate={{opacity:1,y:0}} transition={{delay:.3}}
//             className="flex flex-wrap gap-3">
//             <a href="tel:9842296867"
//               className="flex items-center gap-2 grad-bg text-white font-bold px-6 py-3 rounded-full glow hover:scale-105 active:scale-95 transition-all text-sm shadow-lg shadow-green-500/25">
//               <Phone size={15}/> Enquire Now
//             </a>
//             <a href="https://wa.me/919842296867" target="_blank" rel="noreferrer"
//               className="flex items-center gap-2 border-2 border-green-500/40 hover:border-green-500 font-bold px-6 py-3 rounded-full transition-all text-sm"
//               style={{color:'var(--tm)'}}>
//               WhatsApp Us <ArrowRight size={14}/>
//             </a>
//           </motion.div>
//         </div>

//         {/* Right – 3D */}
//         <motion.div initial={{opacity:0,scale:.85}} animate={{opacity:1,scale:1}} transition={{duration:.9,delay:.15}}
//           className="relative h-[300px] sm:h-[420px] lg:h-[500px] w-full">
//           <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
//             <div className="w-64 h-64 rounded-full blur-3xl animate-pulse" style={{background:'rgba(34,197,94,.12)'}}/>
//           </div>
//           <Suspense fallback={<div className="h-full flex items-center justify-center"><div className="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin"/></div>}>
//             <BatteryScene height="100%"/>
//           </Suspense>
//           <motion.div animate={{y:[0,-8,0]}} transition={{duration:3.5,repeat:Infinity}}
//             className="absolute top-6 right-2 sm:right-6 backdrop-blur rounded-xl p-3 text-xs shadow-xl border sc">
//             <p className="text-green-500 font-bold">⚡ AMARON PRO</p>
//             <p className="mt-0.5" style={{color:'var(--tb)'}}>Nothing Stops You</p>
//           </motion.div>
//           <motion.div animate={{y:[0,8,0]}} transition={{duration:4,repeat:Infinity,delay:1.2}}
//             className="absolute bottom-16 left-2 sm:left-6 backdrop-blur rounded-xl p-3 text-xs shadow-xl border sc">
//             <p className="text-green-500 font-bold">✓ FREE INSTALL</p>
//             <p className="mt-0.5" style={{color:'var(--tb)'}}>Across Coimbatore</p>
//           </motion.div>
//         </motion.div>
//       </div>

//       {/* Stats bar */}
//       <motion.div initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{delay:.55}}
//         className="relative z-10 border-t border-token s2">
//         <div className="wrap py-5 grid grid-cols-2 sm:grid-cols-4 gap-4">
//           {STATS.map(({val,sub})=>(
//             <div key={sub} className="text-center">
//               <p className="font-display font-black text-3xl grad-text">{val}</p>
//               <p className="text-xs font-semibold mt-0.5" style={{color:'var(--tb)'}}>{sub}</p>
//             </div>
//           ))}
//         </div>
//       </motion.div>
//     </section>
//   )
// }

import { motion } from 'framer-motion'
import { Phone, ArrowRight, Shield, Award, Truck, Zap } from 'lucide-react'

const STATS = [
  { val:'24+',  sub:'Years Experience' },
  { val:'10K+', sub:'Happy Customers' },
  { val:'100%', sub:'Genuine Products' },
  { val:'24/7', sub:'Emergency Support' },
]

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col overflow-hidden s1 transition-colors duration-300">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="absolute top-0 left-0 w-80 h-80 rounded-full blur-3xl pointer-events-none" style={{background:'rgba(34,197,94,.07)',transform:'translate(-30%,-30%)'}} />
      <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full blur-3xl pointer-events-none" style={{background:'rgba(34,197,94,.06)',transform:'translate(25%,25%)'}} />

      <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
        <line x1="0" y1="100%" x2="35%" y2="0" stroke="#22c55e" strokeWidth=".8" strokeOpacity=".08"/>
        <line x1="65%" y1="100%" x2="100%" y2="20%" stroke="#4ade80" strokeWidth=".6" strokeOpacity=".06"/>
      </svg>

      {/* Main grid */}
      <div className="relative z-10 flex-1 wrap pt-24 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left */}
        <div className="flex flex-col">
          <motion.div initial={{opacity:0,x:-20}} animate={{opacity:1,x:0}} transition={{duration:.6}}
            className="inline-flex items-center gap-2 w-fit rounded-full px-4 py-1.5 mb-6 border"
            style={{background:'rgba(34,197,94,.08)',borderColor:'rgba(34,197,94,.25)'}}>
            <Zap size={13} className="text-green-500 fill-green-500" />
            <span className="text-green-600 dark:text-green-400 text-[11px] font-bold tracking-[.15em]">AUTHORIZED AMARON DEALER · COIMBATORE</span>
          </motion.div>

          <motion.h1 initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:.65,delay:.08}}
            className="font-display font-black leading-tight mb-4">
            <span className="block text-4xl sm:text-5xl xl:text-6xl" style={{color:'var(--th)'}}>Power Your Journey</span>
            <span className="block text-4xl sm:text-5xl xl:text-6xl grad-text">with Amaron</span>
            <span className="block text-xl sm:text-2xl font-semibold mt-1" style={{color:'var(--tb)'}}>Batteries &amp; UPS Solutions</span>
          </motion.h1>

          <motion.p initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:.65,delay:.15}}
            className="text-sm sm:text-base leading-relaxed max-w-md mb-6" style={{color:'var(--tb)'}}>
            Gokul Auto Electricals — your trusted source for high quality Amaron batteries and UPS systems.
            Experience unmatched performance and reliability that keeps you moving.
          </motion.p>

          <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.24}}
            className="flex flex-wrap gap-4 mb-7">
            {[{icon:Shield,label:'Upto 4Y Warranty'},{icon:Award,label:'Authorized Dealer'},{icon:Truck,label:'Free Installation'}].map(({icon:I,label})=>(
              <span key={label} className="flex items-center gap-1.5 text-sm font-medium" style={{color:'var(--th)'}}>
                <I size={14} className="text-green-500"/> {label}
              </span>
            ))}
          </motion.div>

          <motion.div initial={{opacity:0,y:14}} animate={{opacity:1,y:0}} transition={{delay:.3}}
            className="flex flex-wrap gap-3">
            <a href="tel:9842296867"
              className="flex items-center gap-2 grad-bg text-white font-bold px-6 py-3 rounded-full glow hover:scale-105 active:scale-95 transition-all text-sm shadow-lg shadow-green-500/25">
              <Phone size={15}/> Enquire Now
            </a>
            <a href="https://wa.me/919842296867" target="_blank" rel="noreferrer"
              className="flex items-center gap-2 border-2 border-green-500/40 hover:border-green-500 font-bold px-6 py-3 rounded-full transition-all text-sm"
              style={{color:'var(--tm)'}}>
              WhatsApp Us <ArrowRight size={14}/>
            </a>
          </motion.div>
        </div>

        {/* Right – Banner Image */}
        <motion.div initial={{opacity:0,scale:.85}} animate={{opacity:1,scale:1}} transition={{duration:.9,delay:.15}}
          className="relative h-[300px] sm:h-[420px] lg:h-[500px] w-full">
          {/* Glow backdrop */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-64 h-64 rounded-full blur-3xl animate-pulse" style={{background:'rgba(34,197,94,.12)'}}/>
          </div>

          {/* Banner image */}
          <motion.img
            src="https://res.cloudinary.com/dmtafuh5c/image/upload/v1779101273/Banner_uyuoxe.png"
            alt="Amaron Battery Banner"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10 w-full h-full object-contain drop-shadow-2xl select-none"
            draggable={false}
          />

          {/* Floating badges */}
          <motion.div animate={{y:[0,-8,0]}} transition={{duration:3.5,repeat:Infinity}}
            className="absolute top-6 right-2 sm:right-6 z-20 backdrop-blur rounded-xl p-3 text-xs shadow-xl border sc">
            <p className="text-green-500 font-bold">⚡ AMARON PRO</p>
            <p className="mt-0.5" style={{color:'var(--tb)'}}>Nothing Stops You</p>
          </motion.div>
          <motion.div animate={{y:[0,8,0]}} transition={{duration:4,repeat:Infinity,delay:1.2}}
            className="absolute bottom-16 left-2 sm:left-6 z-20 backdrop-blur rounded-xl p-3 text-xs shadow-xl border sc">
            <p className="text-green-500 font-bold">✓ FREE INSTALL</p>
            <p className="mt-0.5" style={{color:'var(--tb)'}}>Across Coimbatore</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Stats bar */}
      <motion.div initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{delay:.55}}
        className="relative z-10 border-t border-token s2">
        <div className="wrap py-5 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {STATS.map(({val,sub})=>(
            <div key={sub} className="text-center">
              <p className="font-display font-black text-3xl grad-text">{val}</p>
              <p className="text-xs font-semibold mt-0.5" style={{color:'var(--tb)'}}>{sub}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}