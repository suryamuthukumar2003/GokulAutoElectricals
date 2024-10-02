import React, { useContext, useState } from 'react'
import {motion,AnimatePresence} from 'framer-motion';
import { X } from 'lucide-react';
import { openContext } from './Appbar';
import Logo from './Logo';
import { scrollToSection } from './Nav';

function ResponsiveMenu(props) {
    const{setIsOpen}=useContext(openContext);
  return (
    <AnimatePresence mode='wait'>
        {
            (props.open) && (
                <div className='fixed top-0 left-0 w-full h-screen overflow-hidden z-50 md:hidden bg-slate-700/70'>
                <motion.div
                initial={{opacity:0,x:-100}}
                animate={{opacity:1,x:0}}
                exit={{opacity:0,x:-100}}
                transition={{duration:0.3}}
                className=''>
                    <div className='text-xl font-semibold uppercase bg-slate-100 text-slate-700 py-4 h-screen w-full shadow-lg' ref={props.refer}>
                        <div className='w-full px-4 pt-3 pb-5 text-xl flex items-center justify-between'>
                            <Logo />
                            <button onClick={()=>setIsOpen(false)} className=''><X /></button>
                        </div>
                        <hr className='border border-y-2 mb-5'/>
                        <ul className='flex flex-col gap-10 w-full pl-7 '>
                            <li onClick={()=>{
                                setIsOpen(false);
                                scrollToSection('home')
                            }}>
                                Home
                            </li>
                            <li onClick={()=>{
                                setIsOpen(false);
                                scrollToSection('service')
                            }}>   
                                Service
                            </li>
                            <li onClick={()=>{
                                setIsOpen(false);
                                scrollToSection('about')
                            }}>
                                About
                            </li>
                            <li onClick={()=>{
                                setIsOpen(false);
                                scrollToSection('faq')
                            }}>
                                FAQ
                            </li>
                        </ul>
                    </div>
                </motion.div>

                </div>

            )
        }
    </AnimatePresence>
  )
}

export default ResponsiveMenu;