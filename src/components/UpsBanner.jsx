import React from 'react'

function UpsBanner() {
  return (
    <section className='bg-green-500 my-5 p-6 h-fit flex items-center justify-center'>
        <div className='container grid grid-cols-1 sm:grid-cols-2 gap-10'>
            <div className='place-content-center flex flex-col space-y-4'>
                <h1 className='text-3xl xl:text-4xl font-semibold text-white'>Never Let a Power Cut Slow You Down</h1>
                {/* <h2 className='text-2xl xl:text-3xl text-white'>Reliable UPS and Inverter Solutions!</h2> */}
                <p className='text-md text-white'>We offer reliable UPS and inverter solutions to ensure you never face downtime during power outages. Our high-quality batteries provide seamless backup, keeping your home and office running smoothly. Trust us for expert installation and maintenance.</p>
            </div>
            <div className='flex justify-center'>
            <img src="https://res.cloudinary.com/dmtafuh5c/image/upload/v1728196375/photos/AmaronBattery_yrsea8.png" alt=""  className='object-contain lg:object-cover drop-shadow-2xl'/>
            </div>
        </div>
    </section>
  )
}

export default UpsBanner;