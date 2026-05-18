import { motion } from 'framer-motion'
import { ArrowRight, ShieldCheck } from 'lucide-react'

export default function UpsBanner() {
  return (
    <section className="relative overflow-hidden my-4 mx-0">
      <div className="grad-bg relative">
        <div className="absolute inset-0 opacity-10"
          style={{backgroundImage:'linear-gradient(rgba(0,0,0,.2) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,.2) 1px,transparent 1px)',backgroundSize:'38px 38px'}}/>
        <div className="relative wrap py-12 grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
          <motion.div initial={{opacity:0,x:-24}} whileInView={{opacity:1,x:0}} viewport={{once:true}} className="flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl xl:text-4xl font-display font-black text-white leading-snug">
              Never Let a Power Cut<br/>Slow You Down
            </h2>
            <p className="text-green-100 text-sm leading-relaxed">
              Reliable Amaron UPS and inverter solutions — seamless backup keeping your home and office running smoothly through any power outage.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Expert Installation','Annual Maintenance','36M Warranty'].map(f=>(
                <span key={f} className="flex items-center gap-1.5 text-white text-xs font-semibold">
                  <ShieldCheck size={13} className="text-green-200"/> {f}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="tel:9842296867" className="flex items-center gap-2 bg-white text-green-700 font-bold px-5 py-2.5 rounded-full text-sm hover:scale-105 transition-all shadow-lg">
                Call for Quote <ArrowRight size={14}/>
              </a>
              <a href="https://wa.me/919842296867" target="_blank" rel="noreferrer"
                className="flex items-center gap-2 border-2 border-white/50 hover:border-white text-white font-bold px-5 py-2.5 rounded-full text-sm transition-all">
                WhatsApp
              </a>
            </div>
          </motion.div>

          <motion.div initial={{opacity:0,x:24}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{delay:.1}}
            className="flex justify-center relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-44 h-44 bg-white/10 rounded-full blur-3xl"/>
            </div>
            <motion.img
              src="https://res.cloudinary.com/dmtafuh5c/image/upload/v1728196375/photos/AmaronBattery_yrsea8.png"
              alt="Amaron Battery"
              animate={{y:[0,-10,0]}} transition={{duration:4,repeat:Infinity,ease:'easeInOut'}}
              className="relative z-10 object-contain drop-shadow-2xl max-h-56 sm:max-h-64 w-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
