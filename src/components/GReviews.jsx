import React from 'react'
import { ElfsightWidget } from 'react-elfsight-widget';

function GReviews() {
  return (
    <div className='container pt-14'>
      <div className='relative overflow-hidden'>
        <ElfsightWidget widgetId={import.meta.env.VITE_APP_WIDGET_ID} className='overflow-hidden'/>
        <div className='w-full h-[50px] absolute left-0 bottom-0 bg-white z-10'></div>
      </div>
    </div>
  )
}

export default GReviews;