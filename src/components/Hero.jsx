import { Phone } from 'lucide-react';
import React from 'react'
function Hero() {
  return (
    <section id='home'>
        <div className='container grid grid-cols-1 md:grid-cols-2 min-h-[600px] gap-5 lg:gap-0'>
            {/* Brand info */}
            <div className='flex flex-col justify-center py-3 md:py-0'>
                <div className='text-center md:text-left space-y-6 lg:max-w-[450px] flex flex-col'>
                    <h1 className='text-5xl font-bold leading-relaxed xl:leading-loose'>Lorem
                      <br />
                    lorem <span className='text-green-600'> ipsum.</span></h1>
                    <p className='text-2xl tracking-wide '>Lorem ipsum dolor sit amet.</p>
                    <p className='text-gray-400 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, ad provident optio nam numquam fugiat.</p>
                    <div className='self-center md:self-start'>
                  <button className='bg-green-600 text-white font-semibold py-3 px-4 rounded-full shadow-[0px_10px_14px_-7px_#22c55e] hover:!scale-110 duration-300 flex justify-center items-center gap-2' onClick={()=>{
                    window.location.href="tel:+917530046867";
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