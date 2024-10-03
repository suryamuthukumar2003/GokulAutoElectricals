import React from 'react'

function Banner() {
  return (
    <section className='p-3' id='about'>
        <div className='container w-full lg:w-11/12 grid grid-cols-1 md:grid-cols-2'>
            {/* Banner image */}
            <div className='place-content-center p-3 hidden md:block'>

            <img src="../About.png" className='w-4/5 h-full object-cover' alt="" />
            </div>
        <div className='place-content-center'>
            <div>
                <h1 className='text-4xl font-semibold uppercase leading-relaxed'>About</h1>
                <p className='text-slate-600 text-md'>For over 20 years, Gokul Auto Electricals has been a trusted provider of high-quality automotive electrical components and services. Specializing in alternators, self motors, and more, we pride ourselves on delivering reliable, cost-effective solutions that keep vehicles and homes running smoothly. With a skilled technician and a commitment to customer satisfaction, we ensure precision and performance in every service.</p>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Banner;