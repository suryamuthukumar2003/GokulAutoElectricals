import { Zap, MapPin, Phone, Mail, MessageCircle } from 'lucide-react'
import { shopInfo } from '../data/data'

const go = id => { const el=document.getElementById(id); if(el) el.scrollIntoView({behavior:'smooth'}) }

export default function Footer() {
  return (
    <footer style={{background:'#071a0b',color:'#bbf7d0',borderTop:'1px solid rgba(34,197,94,.15)'}}>
      <div className="wrap pt-12 pb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 grad-bg rounded-xl grid place-items-center glow-sm">
                <Zap size={16} className="text-white fill-white"/>
              </div>
              <div>
                <p className="font-display font-black text-[14px] text-green-400 tracking-wide">GOKUL AUTO</p>
                <p className="text-[10px] text-green-700 font-semibold tracking-[.14em]">ELECTRICALS</p>
              </div>
            </div>
            <p className="text-green-700 text-sm leading-relaxed mb-4">
              Authorized Amaron dealer in Ramanathapuram, Coimbatore. Premium batteries, UPS &amp; auto electrical services since 2000.
            </p>
            <div className="flex gap-2 flex-wrap">
              <a href={shopInfo.call} className="flex items-center gap-1.5 text-green-400 text-xs font-bold px-3 py-1.5 rounded-lg border border-green-800 hover:border-green-500 transition-colors">
                <Phone size={11}/> Call
              </a>
              <a href={shopInfo.whatsapp} target="_blank" rel="noreferrer"
                className="flex items-center gap-1.5 text-green-400 text-xs font-bold px-3 py-1.5 rounded-lg border border-green-800 hover:border-green-500 transition-colors">
                <MessageCircle size={11}/> WhatsApp
              </a>
            </div>
          </div>

          <div>
            <p className="font-display font-bold text-green-300 text-lg mb-4">Quick Links</p>
            <ul className="flex flex-col gap-2">
              {['home','service','products','about','reviews','faq','contact'].map(id=>(
                <li key={id}>
                  <button onClick={()=>go(id)} className="text-sm text-green-700 hover:text-green-400 transition-colors capitalize">{id}</button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-display font-bold text-green-300 text-lg mb-4">Contact</p>
            <ul className="flex flex-col gap-3 text-sm text-green-700">
              <li className="flex items-start gap-2"><MapPin size={13} className="text-green-500 shrink-0 mt-0.5"/>{shopInfo.address}</li>
              <li className="flex items-center gap-2"><Phone size={13} className="text-green-500 shrink-0"/>{shopInfo.phone1}</li>
              <li className="flex items-center gap-2"><Phone size={13} className="text-green-500 shrink-0"/>{shopInfo.phone2}</li>
              <li className="flex items-center gap-2"><Mail size={13} className="text-green-500 shrink-0"/><span className="break-all">{shopInfo.email}</span></li>
            </ul>
          </div>

          <div>
            <p className="font-display font-bold text-green-300 text-lg mb-4">Hours &amp; Payment</p>
            <ul className="flex flex-col gap-2.5 text-sm text-green-700 mb-5">
              {shopInfo.hours.map(h=>(
                <li key={h.day}><p className="text-green-400 font-medium">{h.day}</p><p>{h.time}</p></li>
              ))}
            </ul>
            <p className="font-semibold text-green-400 text-sm mb-2">Payment</p>
            {['Cash','Credit/Debit Card','GPay / PhonePe / UPI'].map(p=>(
              <p key={p} className="text-green-700 text-xs flex items-center gap-1.5 mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0"/> {p}
              </p>
            ))}
          </div>
        </div>

        <div className="border-t border-green-900/60 pt-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-green-800">
          <span>© {new Date().getFullYear()} Gokul Auto Electricals. All rights reserved.</span>
          <span>Ramanathapuram, Coimbatore – 641 045</span>
        </div>
      </div>
    </footer>
  )
}
