import React from 'react'

const NextArrow = ({onClick}) => {
  return (
    <div className='nextArrow' onClick={onClick}>
      <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="20"
      fill="none"
      viewBox="0 0 14 20"
    >
      <g filter="url(#filter0_d_863_9)">
        <path
          stroke="#EEEBF2"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M5.125 1s3.75 3.682 3.75 5-3.75 5-3.75 5"
        ></path>
      </g>
      <defs>
        <filter
          id="filter0_d_863_9"
          width="13.25"
          height="19.5"
          x="0.375"
          y="0.25"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="4"></feOffset>
          <feGaussianBlur stdDeviation="2"></feGaussianBlur>
          <feComposite in2="hardAlpha" operator="out"></feComposite>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_863_9"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_863_9"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </svg>
    </div>
  )
}

export default NextArrow
