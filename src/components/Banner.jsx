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
                <p className='text-slate-600 lg:text-md'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime consectetur placeat tempore distinctio possimus? Non, earum laudantium dolorum neque aliquid maxime odit rerum obcaecati qui, facilis tempore repellat consequuntur dolor? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, aut?</p>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Banner;