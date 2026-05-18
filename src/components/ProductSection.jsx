import { useState } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, CheckCircle, Star, Zap, Info, Package, Phone } from 'lucide-react'
import { batteries, upsBatteries, brands } from '../data/data'

const TABS = ['Batteries', 'UPS & Inverter']

function BrandBadge({ brand, primary }) {
  return (
    <span
      className={`inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full ${
        primary
          ? 'bg-green-500 text-white'
          : 'border border-token text-green-600 dark:text-green-400'
      }`}
      style={!primary ? { background: 'var(--bg-2)' } : {}}
    >
      {primary && <Star size={8} fill="white" className="text-white" />}
      {brand}
    </span>
  )
}

function BatteryPlaceholder({ isUps }) {
  return (
    <svg viewBox="0 0 120 70" className="w-32 drop-shadow-xl">
      <rect x="5" y="12" width="102" height="46" rx="5"
        fill="rgba(0,0,0,.45)" stroke="rgba(34,197,94,.4)" strokeWidth="1.5" />
      <rect x="107" y="24" width="9" height="22" rx="3" fill="rgba(34,197,94,.6)" />
      {isUps ? (
        <>
          <rect x="25" y="18" width="70" height="34" rx="3"
            fill="rgba(34,197,94,.08)" stroke="rgba(34,197,94,.2)" strokeWidth=".7" />
          <text x="60" y="41" textAnchor="middle" fill="#4ade80"
            fontSize="10" fontWeight="800" fontFamily="Exo 2,sans-serif">UPS</text>
        </>
      ) : (
        [14, 30, 46, 62, 78].map((x, i) => (
          <rect key={i} x={x} y="16" width="14" height="38" rx="2"
            fill="rgba(34,197,94,.08)" stroke="rgba(34,197,94,.2)" strokeWidth=".7" />
        ))
      )}
      <circle cx="22" cy="7" r="4" fill="rgba(34,197,94,.8)" />
      <circle cx="36" cy="7" r="4" fill="rgba(148,163,184,.5)" />
      {!isUps && (
        <text x="60" y="41" textAnchor="middle" fill="#4ade80"
          fontSize="8" fontWeight="700" fontFamily="Exo 2,sans-serif">AMARON</text>
      )}
    </svg>
  )
}

function ProductCard({ item, isUps, index }) {
  const disc = Math.round((1 - item.price / item.mrp) * 100)
  const msg = `Hi Gokul Auto, I want to enquire about ${item.name} (${item.sub}). Please share price & availability.`

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className="group border border-token rounded-2xl overflow-hidden transition-all duration-300 hover:border-green-500/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-500/10"
      style={{ background: 'var(--bg-card)' }}
    >
      {/* Image area */}
      <div
        className="relative h-44 flex items-center justify-center overflow-hidden"
        style={{ background: 'linear-gradient(135deg,#0d2b14,#051a09)' }}
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'linear-gradient(rgba(34,197,94,.4) 1px,transparent 1px),linear-gradient(90deg,rgba(34,197,94,.4) 1px,transparent 1px)',
            backgroundSize: '18px 18px',
          }}
        />

        {item.image ? (
          <img
            src={item.image}
            alt={item.name}
            className="relative z-10 h-36 w-auto object-contain drop-shadow-2xl
                       group-hover:scale-105 transition-transform duration-300 ease-out"
          />
        ) : (
          <div className="relative z-10 flex flex-col items-center gap-2">
            <BatteryPlaceholder isUps={isUps} />
          </div>
        )}

        {item.tag && (
          <span className="absolute top-3 left-3 z-20 text-[10px] font-bold bg-green-500 text-white px-2.5 py-0.5 rounded-full">
            {item.tag}
          </span>
        )}
        <span className="absolute top-3 right-3 z-20 text-[10px] font-bold bg-black/60 text-green-400 border border-green-500/30 px-2 py-0.5 rounded-full">
          -{disc}%
        </span>
        {!item.primary && (
          <div className="absolute bottom-2 left-2 z-20 flex items-center gap-1 bg-black/50 text-[9px] text-green-300 px-1.5 py-0.5 rounded-full">
            <Info size={8} /> On request
          </div>
        )}
      </div>

      {/* Card body */}
      <div className="p-4">
        <div className="flex items-center gap-2 mb-1">
          <p className="text-green-500 text-[11px] font-bold tracking-wide flex-1">{item.sub}</p>
          <BrandBadge brand={item.brand} primary={item.primary} />
        </div>

        <h3 className="font-display font-bold text-lg leading-tight mb-2" style={{ color: 'var(--th)' }}>
          {item.name}
        </h3>

        <div className="flex items-center gap-3 mb-3 text-xs" style={{ color: 'var(--tb)' }}>
          <span className="flex items-center gap-1">
            <CheckCircle size={10} className="text-green-500" /> {item.cap}
          </span>
          <span className="flex items-center gap-1">
            <CheckCircle size={10} className="text-green-500" /> {item.warranty}
          </span>
        </div>

        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-2xl font-black" style={{ color: 'var(--th)' }}>
            ₹{item.price.toLocaleString('en-IN')}
          </span>
          <span className="line-through text-sm" style={{ color: 'var(--tb)' }}>
            ₹{item.mrp.toLocaleString('en-IN')}
          </span>
        </div>

        <a
          href={`https://wa.me/919842296867?text=${encodeURIComponent(msg)}`}
          target="_blank"
          rel="noreferrer"
          className="w-full flex items-center justify-center gap-2 grad-bg text-white font-bold py-2.5 rounded-xl hover:scale-[1.02] active:scale-95 transition-all text-sm glow-sm"
        >
          <MessageCircle size={14} /> Enquire on WhatsApp
        </a>
      </div>
    </motion.div>
  )
}

/* ── CTA Banner: Call (primary) + WhatsApp (secondary) ── */
function CTABanner() {
  const waMsg = `Hi Gokul Auto, I'm looking for a battery not listed on your website. Can you help me find the right one?`

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mt-10 rounded-2xl border border-green-500/30 overflow-hidden"
      style={{ background: 'linear-gradient(135deg,#0d2b14,#071f0b)' }}
    >
      <div className="relative px-6 py-8 sm:px-10 flex flex-col sm:flex-row items-center gap-6">
        {/* Background grid */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(34,197,94,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(34,197,94,.5) 1px,transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />

        {/* Icon */}
        <div className="relative z-10 shrink-0 w-16 h-16 rounded-2xl bg-green-500/20 border border-green-500/30 flex items-center justify-center">
          <Package size={28} className="text-green-400" />
        </div>

        {/* Text */}
        <div className="relative z-10 flex-1 text-center sm:text-left">
          <h3 className="font-display font-black text-xl sm:text-2xl text-white mb-1">
            Don't see what you need?
          </h3>
          <p className="text-green-300/80 text-sm leading-relaxed">
            We stock <span className="text-green-400 font-bold">50+ battery models</span> for bikes,
            cars, trucks, UPS &amp; inverters — not all listed here.
            Tell us your vehicle model and we'll find the right battery instantly.
          </p>
        </div>

        {/* Buttons */}
        <div className="relative z-10 shrink-0 flex flex-col sm:flex-row gap-3">
          {/* Call — primary */}
          <a
            href="tel:9842296867"
            className="inline-flex items-center justify-center gap-2 bg-white hover:bg-green-50 active:scale-95 text-green-800 font-bold px-6 py-3 rounded-xl transition-all text-sm whitespace-nowrap shadow-lg shadow-black/30"
          >
            <Phone size={15} />
            Call Now
          </a>

          {/* WhatsApp — secondary */}
          <a
            href={`https://wa.me/919842296867?text=${encodeURIComponent(waMsg)}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-green-500/20 hover:bg-green-500/30 active:scale-95 text-green-300 border border-green-500/40 font-bold px-6 py-3 rounded-xl transition-all text-sm whitespace-nowrap"
          >
            <MessageCircle size={15} />
            WhatsApp
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default function ProductSection() {
  const [tab, setTab] = useState(0)
  const items = tab === 0 ? batteries : upsBatteries

  return (
    <section id="products" className="py-16 s1 transition-colors duration-300">
      <div className="wrap">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="inline-flex items-center gap-1.5 text-green-500 text-xs font-bold tracking-[.18em] mb-3">
            <Zap size={13} className="fill-green-500" /> AUTHORIZED DEALER
          </p>
          <h2 className="font-display font-black text-3xl sm:text-5xl mb-3" style={{ color: 'var(--th)' }}>
            Our <span className="grad-text">Products</span>
          </h2>
          <p className="text-sm max-w-lg mx-auto mb-4" style={{ color: 'var(--tb)' }}>
            Amaron is our primary brand. We also stock Tata, Exide, Powerzone &amp; others
            based on your preference and budget.
          </p>

          {/* Brand pills */}
          <div className="flex flex-wrap justify-center gap-2">
            {brands.map((b) => (
              <span
                key={b.name}
                className={`flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full border ${
                  b.primary ? 'text-white border-green-500' : 'border-token'
                }`}
                style={{
                  background: b.primary ? b.color : 'var(--bg-2)',
                  color: b.primary ? 'white' : 'var(--tb)',
                }}
              >
                {b.primary && '★ '}
                {b.name}
                {b.primary && <span className="text-[9px] font-normal opacity-80">Primary</span>}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center gap-3 mb-8">
          {TABS.map((t, i) => (
            <button
              key={t}
              onClick={() => setTab(i)}
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${
                tab === i ? 'grad-bg text-white glow-sm' : 'border border-token'
              }`}
              style={tab !== i ? { background: 'var(--bg-2)', color: 'var(--tb)' } : {}}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {items.map((p, i) => (
            <ProductCard key={p.id} item={p} isUps={tab === 1} index={i} />
          ))}
        </div>

        {/* CTA Banner */}
        <CTABanner />
      </div>
    </section>
  )
}