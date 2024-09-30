import React from 'react'
import ServiceCard from './ServiceCard';
import { service } from '../data/data';

function ServiceSection() {
  return (
    <div className='container mb-24 flex flex-col space-y-14' id='service'>
      <div className='flex flex-col space-y-3'>
      <h5 className='text-4xl font-semibold text-center leading-[80px]'>Our Services</h5>
      <p className='text-md text-slate-500 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque odit asperiores mollitia, aperiam</p>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 md:gap-5 xl:gap-10'>
        {service?.map((data,index)=>{
          return(
            <ServiceCard Icon={data.icon} service={data.service} serviceDesc={data.serviceDesc} key={index} />
          )
        })}
      </div>
    </div>
  )
}

export default ServiceSection;