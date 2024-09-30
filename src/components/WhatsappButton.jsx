import React from 'react'
import WhatsappIcon from '../assets/whatsapp.png'
function WhatsappButton() {
  return (
    <div className='w-[50px] fixed z-20 bottom-24 md:bottom-20 right-4 hover:!scale-110 duration-300 '>
        <a href="https://wa.me/919842296867" target='blank'><img src={WhatsappIcon} alt="afsgbd" /></a>
    </div>
  )
}

export default WhatsappButton