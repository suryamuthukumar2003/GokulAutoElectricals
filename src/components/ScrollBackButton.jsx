import { ArrowUp } from 'lucide-react';
import React, { useEffect, useState } from 'react'

function ScrollBackButton() {
    const[scrollBtn,setScrollBtn]=useState(false);
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY>400){
                setScrollBtn(true);
            }
            else{
                setScrollBtn(false);
            }
        })
    },[scrollBtn])
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
  return (
    <div>
    {scrollBtn && (
        <div className='w-[50px] h-[50px] bg-green-600 fixed z-20 bottom-6 right-4 p-[2px] hover:!scale-110 duration-300 flex justify-center items-center rounded-full cursor-pointer' onClick={goToTop} title='scroll back'>
            <ArrowUp color='#fff' />
        </div>
    )}
    </div>
  )
}

export default ScrollBackButton;