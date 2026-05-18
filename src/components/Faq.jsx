import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Zap } from 'lucide-react'
import { faq } from '../data/data'

function FaqItem({ data, index }) {
  const [open, setOpen] = useState(false)
  return (
    <motion.div initial={{opacity:0,y:14}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:index*.05}}
      className="border-b border-token pb-4">
      <button onClick={()=>setOpen(p=>!p)} className="w-full flex items-center justify-between gap-4 py-2 text-left group">
        <p className="font-semibold text-base group-hover:text-green-500 transition-colors" style={{color:'var(--th)'}}>{data.ques}</p>
        <ChevronDown size={18} className={`shrink-0 text-green-500 transition-transform duration-300 ${open?'rotate-180':''}`}/>
      </button>
      <AnimatePresence mode="wait">
        {open && (
          <motion.div initial={{opacity:0,height:0}} animate={{opacity:1,height:'auto'}} exit={{opacity:0,height:0}} transition={{duration:.22}} className="overflow-hidden">
            <div className="pb-2 flex flex-col gap-3">
              <p className="text-sm leading-relaxed" style={{color:'var(--tb)'}}>{data.ans}</p>
              {data.imgDisplay && (
                <div className="flex items-center gap-3 pt-1">
                  <img src="https://res.cloudinary.com/dmtafuh5c/image/upload/v1728196417/photos/gpay_voqd1r.webp" alt="GPay" className="w-10 h-10 object-contain"/>
                  <img src="https://res.cloudinary.com/dmtafuh5c/image/upload/v1728196418/photos/phonepe_odrthb.png" alt="PhonePe" className="w-20 object-contain"/>
                  <span className="text-xs" style={{color:'var(--tb)'}}>+ Cash &amp; Card</span>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function Faq() {
  return (
    <section id="faq" className="py-16 s2 transition-colors duration-300">
      <div className="wrap max-w-3xl mx-auto px-5">
        <motion.div initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="text-center mb-12">
          <p className="inline-flex items-center gap-1.5 text-green-500 text-xs font-bold tracking-[.18em] mb-3">
            <Zap size={13} className="fill-green-500"/> FAQs
          </p>
          <h2 className="font-display font-black text-3xl sm:text-5xl mb-3" style={{color:'var(--th)'}}>
            Frequently Asked <span className="grad-text">Questions</span>
          </h2>
          <p className="text-sm max-w-md mx-auto" style={{color:'var(--tb)'}}>Answers to common questions about our services and shop policies.</p>
        </motion.div>
        <div className="flex flex-col gap-2">
          {faq.map((item,i)=><FaqItem key={i} data={item} index={i}/>)}
        </div>
      </div>
    </section>
  )
}
