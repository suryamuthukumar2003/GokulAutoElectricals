import { motion,AnimatePresence } from 'framer-motion';
import { MapPin, Phone,Plus } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react'
import WhatsappIcon from '../assets/whatsapp.png'
function Menu(props){
    
    return(
        <AnimatePresence mode='wait'>
            {props.isOpen && (
                <motion.div
                initial={{opacity:0,y:10}}
                animate={{opacity:1,y:0}}
                exit={{opacity:0,y:10}}
                transition={{duration:0.3}}
                className='fixed z-40 right-3 bottom-40'
                >
                    <div className='p-2 bg-white rounded-full shadow-lg'>
                        <ul className='pt-2 flex flex-col items-center gap-4'>
                            <li className='cursor-pointer' title='call dial'><a href="tel:9842296867"><Phone/></a></li>
                            <li className='cursor-pointer' title='location'><a href="https://www.google.co.in/maps/dir//Gokul+Auto+Electricals,+171-1,+Nanjundapuram+Rd,+Ramanathapuram,+Coimbatore,+Tamil+Nadu+641045/@10.9938909,76.9945945,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3ba859e81eaae225:0xef205b39e80119f!2m2!1d76.9978519!2d10.9926802?entry=ttu" target='_blank'><MapPin />
                            </a></li>
                            <li className='cursor-pointer' title='whatsapp'><a href="https://wa.me/919842296867" target='blank'><img src={WhatsappIcon} alt="afsgbd" className='w-[40px] h-[40px]' /></a></li>
                        </ul>
                    </div>
                </motion.div>
            )
            }
        </AnimatePresence>
    );
}

function FloatingMenu() {
    const[isOpen,setIsOpen]=useState(false);
    const menuRef=useRef();
    useEffect(()=>{
        let handler=(e)=>{
            if(menuRef.current && !menuRef.current.contains(e.target)){
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown",handler);

        return(()=>{
            document.removeEventListener("mousedown",handler);
        })
    })
  return (
    <div ref={menuRef}>
    <Menu isOpen={isOpen}/>
    <div className={`w-[50px] h-[50px] fixed z-20 bottom-24 right-4 hover:!scale-110 duration-300 bg-green-600 p-[2px] flex justify-center items-center shadow-lg rounded-full ${isOpen ? 'rotate-45 duration-500':'duration-500'} cursor-pointer`} onClick={()=>setIsOpen((prev)=>!prev)} title={isOpen ? 'close':'menu'}>
        <Plus color='#fff'/>
    </div>   
    </div>
  )
}

export default FloatingMenu;