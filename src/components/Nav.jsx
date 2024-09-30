
// import React from 'react'

// function Nav() {
//     const scrollToSection = (id) => {
//         const section = document.getElementById(id);
//         if (section) {
//           // Scroll to the section smoothly
//           section.scrollIntoView({ behavior: 'smooth' });
//           // Use the History API to update the URL without reloading or using hash
//           window.history.pushState(null, null, `/${id}`);
//         }
//       };
//   return (
//     <div className='hidden md:block'>
//         <ul className='flex items-center gap-6 text-green-500'>
//             <li>
//                 <a href="#home" className='inline-block py-1 px-3 hover:text-green-500 hover:shadow-[0_3px_0_-1px_#22C55E] font-semibold cursor-pointer'>Home</a>
//             </li>
//             <li>
//                 <a href="#service" className='inline-block py-1 px-3 hover:text-green-500 hover:shadow-[0_3px_0_-1px_#22C55E] font-semibold cursor-pointer'>Service</a>
//             </li>
//             <li>
//                 <a href="#about" className='inline-block py-1 px-3 hover:text-green-500 hover:shadow-[0_3px_0_-1px_#22C55E] font-semibold cursor-pointer'>About</a>
//             </li>
//             <li>
//                 <a href="#faq" className='inline-block py-1 px-3 hover:text-green-500 hover:shadow-[0_3px_0_-1px_#22C55E] font-semibold cursor-pointer'>FAQ</a>
//             </li>
            
//         </ul>
//     </div>
//   )
// }

// export default Nav


import React from 'react'

export const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      // Scroll to the section smoothly
      section.scrollIntoView({ behavior: 'smooth' });
      // Use the History API to update the URL without reloading or using hash
      window.history.pushState(null, null, `/${id}`);
    }
  };
function Nav() {
    
  return (
    <div className='hidden md:block'>
        <ul className='flex items-center gap-6 text-green-500'>
            <li className='inline-block py-1 px-3 hover:text-green-500 hover:shadow-[0_3px_0_-1px_#22C55E] font-semibold cursor-pointer' onClick={() => scrollToSection('home')}>
               Home
            </li>
            <li className='inline-block py-1 px-3 hover:text-green-500 hover:shadow-[0_3px_0_-1px_#22C55E] font-semibold cursor-pointer' onClick={() => scrollToSection('service')}>
                Service
            </li>
            <li className='inline-block py-1 px-3 hover:text-green-500 hover:shadow-[0_3px_0_-1px_#22C55E] font-semibold cursor-pointer' onClick={() => scrollToSection('about')}>
                About
            </li>
            <li className='inline-block py-1 px-3 hover:text-green-500 hover:shadow-[0_3px_0_-1px_#22C55E] font-semibold cursor-pointer' onClick={() => scrollToSection('faq')}>
                FAQ
            </li>
            
        </ul>
    </div>
  )
}

export default Nav;