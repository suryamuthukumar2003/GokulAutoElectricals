import { ChevronDown } from 'lucide-react';
import React, { useState } from 'react'
import { motion,AnimatePresence } from 'framer-motion';
function FaqQues({data}) {
    const[open,setOpen]=useState(false);
  return (
    <div className='flex flex-col space-y-2'>
        <div className='flex justify-between cursor-pointer' onClick={()=>setOpen((prev)=>!prev)}>
            <p className='font-medium text-lg'>{data.ques}</p>
            <ChevronDown className={`duration-300 ${open && 'rotate-180'}`} />
        </div>
        <AnimatePresence mode='wait'>

        {open && (
          <motion.div
            initial={{opacity:0,y:-10}}
            animate={{opacity:1,y:0}}
            exit={{opacity:0,y:-10}}
            transition={{duration:0.2}}
          >

            <div className='flex flex-col justify-center -space-y-3 space-x-2'>
              <p className='w-[99%] text-slate-700'>{data.ans}</p>
              {data.imgDisplay && (
                <div className='self-start flex justify-center items-center'>
                <img src={"https://res.cloudinary.com/dmtafuh5c/image/upload/v1728196417/photos/gpay_voqd1r.webp"} alt="" className='w-[50px] h-[50px]'/>
                <img src={"https://res.cloudinary.com/dmtafuh5c/image/upload/v1728196418/photos/phonepe_odrthb.png"} alt="" className='w-[100px]'/>
                </div>
              )}
            </div>
          </motion.div>
          )}
        </AnimatePresence>
        <hr />
    </div>
  )
}

export default FaqQues;