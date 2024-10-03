import { Phone } from 'lucide-react';
import React from 'react'
function Hero() {
  return (
    <section id='home'>
        <div className='container grid grid-cols-1 md:grid-cols-2 min-h-[600px] gap-5 lg:gap-0'>
            {/* Brand info */}
            <div className='flex flex-col justify-center py-3 md:py-0 w-full'>
                <div className='text-center md:text-left space-y-6 lg:max-w-[450px] flex flex-col'>
                    <h1 className='text-3xl lg:text-4xl font-bold leading-relaxed xl:leading-loose'>Power Your Journey
                      <br />
                    with <span className='text-green-600'> Amaron Batteries</span></h1>
                    <p className='text-gray-400 '>Welcome to Gokul Auto Electricals, Your trusted source for high quality Amaron batteries. Experience unmatched performance and reliability that keeps you moving.</p>
                    <div className='self-center md:self-start'>
                  <button className='bg-green-600 text-white font-semibold py-3 px-4 rounded-full shadow-[0px_10px_14px_-7px_#22c55e] hover:!scale-110 duration-300 flex justify-center items-center gap-2' onClick={()=>{
                    window.location.href="tel:+919842296867";
                  }}>
                    <span>
                      <Phone/>
                    </span>
                    Enquiry Now</button>
                </div>
                </div>
            </div>
            {/* Hero Image */}
            <div className='place-self-center md:place-content-start'>
              <img src="../Banner.png" alt="" className='object-cover'/>
            </div>
        </div>
    </section>
  )
}

export default Hero;