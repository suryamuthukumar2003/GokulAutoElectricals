import React from 'react'
import { scrollToSection } from './Nav';

function Footer() {
  return (
    <footer className='bg-slate-600 text-white'>
      <div className='container pt-8 flex flex-col space-y-5'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
          <div className=''>
            <p className='text-2xl mb-3'>Quick Links</p>
            <ul className='flex flex-col space-y-3 indent-2 text-sm'>
              <li className='cursor-pointer' onClick={() => scrollToSection('home')}>Home</li>
              <li className='cursor-pointer' onClick={() => scrollToSection('service')}>Service</li>
              <li className='cursor-pointer' onClick={() => scrollToSection('about')}>About</li>
              <li className='cursor-pointer' onClick={() => scrollToSection('faq')}>FAQ</li>
            </ul>
          </div>
          <div className=''>
            <p className='text-2xl mb-3'>Contact Us</p>
            <ul className='flex flex-col space-y-3 ml-2 text-sm'>
              <li className='flex space-x-1 items-start'><span className='w-11/12 lg:w-11/12'>171-1, Nanjundapuram Rd, Ramanathapuram, Coimbatore-641045</span></li>
              <li className='flex space-x-1'><span>+91 9842296867</span></li>
              <li className='flex space-x-1'><span>+91 6385596867</span></li>
              <li className='flex space-x-1'><span>abc@gmail.com</span></li>
            </ul>
          </div>
          <div className=''>
            <p className='text-2xl mb-3'>Opening</p>
            <ul className='flex flex-col space-y-3 indent-2 text-sm'>
              <li>
                <p className='text-lg'>Monday - Saturday</p>
                <p>9:00AM - 8:00PM</p>
              </li>
              <li>
                <p className='text-lg'>Sunday</p>
                <p>9:00AM - 1:00PM</p>
              </li>
            </ul>
          </div>
          <div>
            <p className='text-2xl mb-3'>Payment Available</p>
            <ul className='flex flex-col space-y-3 indent-2'>
              <li>Cash</li>
              <li>Credit Card</li>
              <li>Online Payments</li>
            </ul>
          </div>
        </div>
        <div className='flex flex-col space-y-5 pb-8 text-sm pt-2'>
          <hr />
          <div className='self-center md:self-start'><span className='text-lg'>©</span> Gokul Auto Electricals, All Right Reserved.</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
