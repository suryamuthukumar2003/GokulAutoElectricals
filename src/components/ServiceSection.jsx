import { motion } from 'framer-motion'
import { Battery, Zap, Wrench, MonitorSpeaker, Car, Settings, Cable, ShieldCheck } from 'lucide-react'
import { services } from '../data/data'

const ICON_MAP = { Battery, Zap, Wrench, MonitorSpeaker, Car, Settings, Cable, ShieldCheck }

function ServiceCard({ iconName, service, serviceDesc, index }) {
  const Icon = ICON_MAP[iconName] || Zap
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07, duration: 0.5 }}
      className="service-card group relative flex flex-col items-center px-4 py-7 gap-3 rounded-2xl cursor-default overflow-hidden transition-all duration-300 border border-token"
      style={{ background: 'var(--bg-card)' }}
    >
      {/* Hover green background */}
      <div className="absolute inset-0 grad-bg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Icon container */}
      <div className="service-icon-box relative z-10 w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 border border-token">
        <Icon size={28} className="service-icon text-green-500 transition-colors duration-300" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-1.5 text-center">
        <p
          className="text-base font-bold group-hover:text-white transition-colors duration-300"
          style={{ color: 'var(--th)' }}
        >
          {service}
        </p>
        <p
          className="text-xs leading-relaxed group-hover:text-green-100 transition-colors duration-300 max-w-[200px]"
          style={{ color: 'var(--tb)' }}
        >
          {serviceDesc}
        </p>
      </div>
    </motion.div>
  )
}

export default function ServiceSection() {
  return (
    <>
      <style>{`
        .service-icon-box {
          background: var(--bg-2);
        }
        .service-card:hover .service-icon-box {
          background: rgba(255, 255, 255, 0.22);
          border-color: rgba(255, 255, 255, 0.3);
        }
        .service-card:hover .service-icon {
          color: #ffffff !important;
        }
      `}</style>

      <section id="service" className="py-16 s2 transition-colors duration-300">
        <div className="wrap">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="inline-flex items-center gap-1.5 text-green-500 text-xs font-bold tracking-[.18em] mb-3">
              <Zap size={13} className="fill-green-500" /> WHAT WE OFFER
            </p>
            <h2
              className="font-display font-black text-3xl sm:text-5xl mb-3"
              style={{ color: 'var(--th)' }}
            >
              Our <span className="grad-text">Services</span>
            </h2>
            <p className="text-sm max-w-xl mx-auto" style={{ color: 'var(--tb)' }}>
              One-stop solution for automotive electrical services, Amaron battery sales &amp; UPS systems.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {services.map((s, i) => (
              <ServiceCard key={i} {...s} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}