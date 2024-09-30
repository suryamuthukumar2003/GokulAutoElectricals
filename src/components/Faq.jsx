import React from 'react'
import { faq } from '../data/data';
import FaqQues from './FaqQues';
function Faq() {
  return (
    <div className='container mb-24 w-full lg:w-4/5' id='faq'>
        <h5 className='text-4xl font-semibold text-center leading-[100px]'>FAQs</h5>
        <p className='text-center text-md text-slate-600 mb-10'>Find answers to frequently asked questions about our services and shop policies.</p>
        <ul className='flex flex-col space-y-5'>
            {faq?.map((data,index)=>{
                return(
                    <FaqQues key={index} data={data}/>
                )
            })}
        </ul>
    </div>
  )
}

export default Faq;