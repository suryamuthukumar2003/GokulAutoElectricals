import React from 'react'

function Loading() {
  return (
    <div>
        <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={100}
    height={100}
    viewBox="0 0 128 128"
    className='flex'
  >
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={100}
    height={100}
    className={`self-center`}
    viewBox="-260 -200 2048 2048"
  >
    <path fill="#FEFEFE" d="M0 0h2048v2048H0z" className='fill-transparent'/>
    <path
      className='fill-green-600'
      d="M308 830h1432v793l-5 10-7 6-8 3H328l-10-4-7-8-3-7zM256 592h1536v190H256z"
    />
    <path
      fill="#FEFEFE"
      d="M943 914h203l10 5 6 8 2 7v7l-7 20-21 56-26 69-16 42-1 4 12-1 80-2h28l10 5 6 8 2 5v11l-6 12-29 43-29 44-29 43-29 44-29 43-29 44-29 43-12 18-5 5-4 3-6 2h-9l-8-3-7-6-4-8v-26l7-158v-12l-133-11-10-2-8-6-5-8-1-3v-11l17-50 15-43 20-59 15-43 19-56 15-43 9-26 4-6 7-6z"
      
    />
    <path className='fill-green-600' d="M1371 406h235v139h-235zM442 406h235v139H442z"/>
  </svg>
    <g>
      <path
        className='fill-green-600'
        d="M64 9.75A54.25 54.25 0 0 0 9.75 64H0a64 64 0 0 1 128 0h-9.75A54.25 54.25 0 0 0 64 9.75z"
      />
      <animateTransform
        attributeName="transform"
        dur="1000ms"
        from="0 64 64"
        repeatCount="indefinite"
        to="360 64 64"
        type="rotate"
      />
    </g>
  </svg>
    </div>
  )
}

export default Loading