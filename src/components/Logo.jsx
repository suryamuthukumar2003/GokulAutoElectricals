import React from 'react'
import { scrollToSection } from './Nav'

function Logo() {
  return (
    <div className='text-xl lg:text-2xl flex items-center gap-2 font-bold uppercase cursor-pointer' onClick={() => scrollToSection('home')}>
        <p className='text-green-600'>Gokul</p>
        <p className='text-slate-500'>Auto Electricals</p>
    </div>
  )
}

export default Logo