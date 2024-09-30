import React from 'react'

function BatteryIcon(props) {
  return (
    <>
     <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    className={`${props.className} group`}
    viewBox="0 0 2048 2048"
    {...props}
  >
    <path fill="#FEFEFE" d="M0 0h2048v2048H0z" className='fill-transparent'/>
    <path
      fill="#131313"
      d="M308 830h1432v793l-5 10-7 6-8 3H328l-10-4-7-8-3-7zM256 592h1536v190H256z"
      style={{fill:props.color}}
      className='group-hover:fill-white'
    />
    <path
      fill="#FEFEFE"
      className='group-hover:fill-green-600/70'
      d="M943 914h203l10 5 6 8 2 7v7l-7 20-21 56-26 69-16 42-1 4 12-1 80-2h28l10 5 6 8 2 5v11l-6 12-29 43-29 44-29 43-29 44-29 43-29 44-29 43-12 18-5 5-4 3-6 2h-9l-8-3-7-6-4-8v-26l7-158v-12l-133-11-10-2-8-6-5-8-1-3v-11l17-50 15-43 20-59 15-43 19-56 15-43 9-26 4-6 7-6z"
      
    />
    <path fill="#131313" d="M1371 406h235v139h-235zM442 406h235v139H442z" style={{fill:props.color}} className='group-hover:fill-white'/>
  </svg>
    </>
  )
}

export default BatteryIcon