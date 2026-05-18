import { motion } from 'framer-motion'
import { Phone, MessageCircle, MapPin, Clock, Mail, ExternalLink, Zap } from 'lucide-react'
import { shopInfo } from '../data/data'

export default function Contact() {
  return (
    <section id="contact" className="py-16 s1 transition-colors duration-300">
      <div className="wrap">
        <motion.div initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="text-center mb-12">
          <p className="inline-flex items-center gap-1.5 text-green-500 text-xs font-bold tracking-[.18em] mb-3">
            <MapPin size={13}/> FIND US
          </p>
          <h2 className="font-display font-black text-3xl sm:text-5xl mb-3" style={{color:'var(--th)'}}>
            Visit Our <span className="grad-text">Shop</span>
          </h2>
          <p className="text-sm max-w-lg mx-auto" style={{color:'var(--tb)'}}>Drop in, call, or WhatsApp us — 6 days a week.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left */}
          <div className="flex flex-col gap-4">
            <motion.div initial={{opacity:0,x:-24}} whileInView={{opacity:1,x:0}} viewport={{once:true}}
              className="sc border border-token rounded-2xl p-6">
              <h3 className="font-display font-bold text-2xl mb-5 flex items-center gap-2" style={{color:'var(--th)'}}>
                <Zap size={17} className="text-green-500 fill-green-500"/> Get in Touch
              </h3>
              <div className="flex flex-col gap-4">
                {[
                  {icon:MapPin, label:'Address', val:shopInfo.address, href:shopInfo.mapsDir, external:true},
                  {icon:Phone,  label:'Phone',   val:`${shopInfo.phone1} / ${shopInfo.phone2}`, href:shopInfo.call},
                  {icon:Mail,   label:'Email',   val:shopInfo.email, href:`mailto:${shopInfo.email}`},
                ].map(c=>{
                  const I = c.icon
                  return (
                    <a key={c.label} href={c.href} target={c.external?'_blank':undefined} rel={c.external?'noreferrer':undefined}
                      className="flex items-start gap-3 group">
                      <div className="w-10 h-10 rounded-xl border border-token flex items-center justify-center shrink-0 group-hover:border-green-500 transition-colors"
                        style={{background:'var(--bg-2)'}}>
                        <I size={16} className="text-green-500"/>
                      </div>
                      <div>
                        <p className="text-xs font-semibold" style={{color:'var(--tm)'}}>{c.label}</p>
                        <p className="text-sm font-medium group-hover:text-green-500 transition-colors" style={{color:'var(--th)'}}>{c.val}</p>
                      </div>
                    </a>
                  )
                })}
              </div>
            </motion.div>

            <motion.div initial={{opacity:0,x:-24}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{delay:.1}}
              className="sc border border-token rounded-2xl p-6">
              <h3 className="font-display font-bold text-2xl mb-4 flex items-center gap-2" style={{color:'var(--th)'}}>
                <Clock size={17} className="text-green-500"/> Business Hours
              </h3>
              {shopInfo.hours.map(h=>(
                <div key={h.day} className="flex items-center justify-between py-2 border-b border-token last:border-0">
                  <span className="text-sm" style={{color:'var(--tb)'}}>{h.day}</span>
                  <span className="text-sm font-bold" style={{color:'var(--th)'}}>{h.time}</span>
                </div>
              ))}
              <div className="mt-4 rounded-xl px-4 py-2.5 border border-token" style={{background:'var(--bg-2)'}}>
                <p className="text-green-500 text-xs font-semibold">⚡ Emergency battery service — call anytime!</p>
              </div>
            </motion.div>

            <motion.a initial={{opacity:0,x:-24}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{delay:.2}}
              href={shopInfo.whatsapp} target="_blank" rel="noreferrer"
              className="flex items-center justify-between rounded-2xl p-5 group transition-all cursor-pointer border border-token hover:border-green-500/50 hover:shadow-lg hover:shadow-green-500/10"
              style={{background:'var(--bg-card)'}}>
              <div>
                <p className="text-green-500 font-bold text-lg font-display">Chat on WhatsApp</p>
                <p className="text-sm" style={{color:'var(--tb)'}}>Quick reply within minutes</p>
              </div>
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <MessageCircle size={22} className="text-white fill-white"/>
              </div>
            </motion.a>
          </div>

          {/* Right – Google Maps iframe */}
          <motion.div initial={{opacity:0,x:24}} whileInView={{opacity:1,x:0}} viewport={{once:true}}
            className="rounded-2xl overflow-hidden border border-token shadow-xl flex flex-col" style={{minHeight:'480px'}}>
            <div className="flex items-center justify-between px-5 py-3 s2 border-b border-token shrink-0">
              <div>
                <p className="text-sm font-bold" style={{color:'var(--th)'}}>Gokul Auto Electricals</p>
                <p className="text-xs" style={{color:'var(--tb)'}}>171-1, Nanjundapuram Rd, Ramanathapuram</p>
              </div>
              <a href={shopInfo.mapsDir} target="_blank" rel="noreferrer"
                className="flex items-center gap-1 text-green-500 text-xs font-bold hover:underline">
                Directions <ExternalLink size={11}/>
              </a>
            </div>
            <div className="flex-1">
              <iframe title="Location" src={shopInfo.mapsEmbed} width="100%" height="100%"
                className="dark:[filter:invert(90%)_hue-rotate(180deg)_brightness(.82)_contrast(.9)]"
                style={{border:0,display:'block',minHeight:'440px'}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
