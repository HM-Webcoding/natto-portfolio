import React from 'react'

const PrevArrow = ({onClick}) => {
  return (
    <div className='prevArrow' onClick={onClick}>
      <svg
      xmlns="http://www.w3.org/2000/svg"
      width="6"
      height="12"
      fill="none"
      viewBox="0 0 6 12"
    >
      <path
        stroke="#EEEBF2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M4.875 11s-3.75-3.682-3.75-5 3.75-5 3.75-5"
      ></path>
    </svg>
    </div>
  )
}

export default PrevArrow
