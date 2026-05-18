import { motion } from 'framer-motion'
import { Star, Quote, ThumbsUp, ExternalLink, Zap } from 'lucide-react'
import { reviews, shopInfo } from '../data/data'

function Stars({ n }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({length:5}).map((_,i)=>(
        <Star key={i} size={13} className={i<n ? 'text-yellow-400 fill-yellow-400' : 'text-slate-600'}/>
      ))}
    </div>
  )
}

export default function Reviews() {
  const avg = (reviews.reduce((a,r)=>a+r.rating,0)/reviews.length).toFixed(1)
  return (
    <section id="reviews" className="py-16 s1 transition-colors duration-300">
      <div className="wrap">
        <motion.div initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="text-center mb-12">
          <p className="inline-flex items-center gap-1.5 text-green-500 text-xs font-bold tracking-[.18em] mb-3">
            <Star size={13} className="fill-green-500"/> CUSTOMER REVIEWS
          </p>
          <h2 className="font-display font-black text-3xl sm:text-5xl mb-4" style={{color:'var(--th)'}}>
            What Customers <span className="grad-text">Say</span>
          </h2>
          {/* Rating summary */}
          <div className="inline-flex items-center gap-5 sc border border-token rounded-2xl px-6 py-4">
            <div className="text-center">
              <p className="font-display font-black text-5xl grad-text">{avg}</p>
              <div className="flex justify-center gap-0.5 mt-1">
                {Array.from({length:5}).map((_,i)=><Star key={i} size={14} className="text-yellow-400 fill-yellow-400"/>)}
              </div>
              <p className="text-xs mt-1" style={{color:'var(--tb)'}}>Google Reviews</p>
            </div>
            <div className="w-px h-14 border-l border-token"/>
            <div className="flex flex-col gap-1.5">
              {[['5★','80%'],['4★','14%'],['3★','6%']].map(([star,pct])=>(
                <div key={star} className="flex items-center gap-2 text-xs" style={{color:'var(--tb)'}}>
                  <span className="w-5">{star}</span>
                  <div className="w-20 h-1.5 rounded-full overflow-hidden" style={{background:'var(--bg-3)'}}>
                    <div className="h-full bg-yellow-400 rounded-full" style={{width:pct}}/>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {reviews.map((r,i)=>(
            <motion.div key={i}
              initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.07}}
              className="sc border border-token rounded-2xl p-5 relative transition-all duration-300 hover:-translate-y-1 hover:border-green-500/40 hover:shadow-lg hover:shadow-green-500/10">
              <Quote size={20} className="absolute top-4 right-4 text-green-500/15"/>
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-full grad-bg flex items-center justify-center text-white font-display font-bold shrink-0">
                  {r.name[0]}
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-sm" style={{color:'var(--th)'}}>{r.name}</span>
                    <span className="text-[10px] text-green-500 font-semibold flex items-center gap-0.5">
                      <ThumbsUp size={9}/> Verified
                    </span>
                  </div>
                  <p className="text-xs" style={{color:'var(--tb)'}}>{r.vehicle} · {r.loc}</p>
                </div>
              </div>
              <Stars n={r.rating}/>
              <p className="text-sm mt-3 leading-relaxed" style={{color:'var(--th)'}}>{r.text}</p>
              <p className="text-xs mt-3" style={{color:'var(--tm)'}}>{r.date}</p>
            </motion.div>
          ))}
        </div>

        {/* Google Maps embed for reviews */}
        <motion.div initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
          className="rounded-2xl overflow-hidden border border-token shadow-xl mb-8">
          <div className="flex items-center justify-between px-5 py-3 s2 border-b border-token">
            <div>
              <p className="text-sm font-bold" style={{color:'var(--th)'}}>Gokul Auto Electricals on Google Maps</p>
              <p className="text-xs" style={{color:'var(--tb)'}}>Live ratings &amp; directions — Ramanathapuram, Coimbatore</p>
            </div>
            <a href={shopInfo.mapsDir} target="_blank" rel="noreferrer"
              className="flex items-center gap-1 text-green-500 text-xs font-bold hover:underline">
              Open <ExternalLink size={11}/>
            </a>
          </div>
          <div className="relative" style={{height:'360px'}}>
            <iframe title="Gokul Auto Electricals" src={shopInfo.mapsEmbed}
              width="100%" height="100%"
              className="dark:[filter:invert(90%)_hue-rotate(180deg)_brightness(.82)_contrast(.9)]"
              style={{border:0,display:'block'}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>
          </div>
        </motion.div>

        <div className="text-center">
          <a href="https://g.page/r/CZ8RgJ6zBfIOEBM/review"
            target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 sc border border-token hover:border-green-500/50 font-semibold px-6 py-3 rounded-xl transition-all text-sm"
            style={{color:'var(--th)'}}>
            <Star size={14} className="text-yellow-400 fill-yellow-400"/>
            Leave Us a Google Review <ExternalLink size={12}/>
          </a>
        </div>
      </div>
    </section>
  )
}
