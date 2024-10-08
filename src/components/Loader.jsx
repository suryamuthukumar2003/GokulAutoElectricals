import React from 'react'
import Loading from '../assets/svg/Loading';

function Loader() {
  return (
    <div className='h-screen overflow-hidden flex justify-center items-center bg-slate-50'>
        <Loading/>
    </div>
  )
}

export default Loader;