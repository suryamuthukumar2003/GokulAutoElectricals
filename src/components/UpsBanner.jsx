import React from 'react'

function UpsBanner() {
  return (
    <section className='bg-green-500 my-5 p-6 h-fit flex items-center justify-center'>
        <div className='container grid grid-cols-1 sm:grid-cols-2 gap-10'>
            <div className='place-content-center flex flex-col space-y-4'>
                <h1 className='text-4xl xl:text-5xl font-semibold text-white'>Lorem, ipsum</h1>
                <h2 className='text-4xl xl:text-5xl text-white'>Lorem ipsum dolor sit</h2>
                <p className='text-md xl:text-lg text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit, optio vel explicabo voluptas maxime necessitatibus, perspiciatis alias numquam repudiandae libero fugiat, nam nesciunt?</p>
            </div>
            <div className='flex justify-center'>
            <img src="../AmaronBattery.png" alt=""  className='object-contain lg:object-cover drop-shadow-2xl'/>
            </div>
        </div>
    </section>
  )
}

export default UpsBanner;