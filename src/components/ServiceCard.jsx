import React from 'react'

function ServiceCard({Icon,service,serviceDesc}) {
  return (
    <div className='w-full min-h-[220px] flex flex-col items-center px-3 py-7 space-y-1 rounded-md group bg-custom group-hover:fill-white shadow shadow-green-600 hover:!scale-105 duration-300'>
      <div className='flex justify-center'>
        {Icon && <Icon width={80} height={80} />}
      </div>
      <div className='flex flex-col space-y-1'>
        <p className='text-md font-medium text-center group-hover:text-white'>{service}</p>
        <p className='text-center text-slate-600 group-hover:text-white  text-xs w-full'>{serviceDesc}</p>
      </div>
    </div>
  )
}

export default ServiceCard;