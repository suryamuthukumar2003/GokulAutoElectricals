import React, { createContext, Fragment, useEffect, useRef, useState } from 'react'
import Logo from './Logo';
import Nav from './Nav';
import { Menu, X } from 'lucide-react';
import ResponsiveMenu from './ResponsiveMenu';

export const openContext=createContext();
function Appbar() {
    const[isOpen,setIsOpen]=useState(false);
    const menuRef=useRef();
    const handleToggle=()=>{
        setIsOpen((prev)=>!prev);
    }
    useEffect(()=>{
        let handler=(e)=>{
            if(menuRef.current && !menuRef.current.contains(e.target)){
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown",handler);
        
    })
    useEffect(() => {
    const currentPath = window.location.pathname;
    const sectionId = currentPath.substring(1); // Remove the leading "/"
    if (sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);
  return (
    <>
    <openContext.Provider value={{
        isOpen,
        setIsOpen
    }}>
        <nav className='bg-white sticky top-0 z-40'>
            <div className='container flex justify-between items-center py-4'>
                <Logo/>
                <Nav/>
                <div className='md:hidden'>
                    <button className='hover:text-black rounded-full p-2 duration-200' onClick={handleToggle}>
                        {!isOpen && <Menu /> }
                    </button>
                </div>
            </div>
        </nav>
        <ResponsiveMenu open={isOpen} refer={menuRef}/>
    </openContext.Provider>
    </>
  )
}

export default Appbar;