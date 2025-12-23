'use client'

import React from 'react'

interface HamburgerMenuProps {
  isOpen: boolean
}

/**
 * Animated hamburger menu icon with SVG path animation
 * 
 * Features:
 * - Smooth SVG path morphing
 * - Elegant curved animation
 * - Accessible and keyboard-friendly
 */
export const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ isOpen }) => {
  return (
    <svg 
      width="32" 
      height="32" 
      viewBox="0 0 100 100"
      className="cursor-pointer"
    >
      <path
        className={`transition-all duration-600 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isOpen 
            ? '[stroke-dasharray:90_207] [stroke-dashoffset:-134]' 
            : '[stroke-dasharray:60_207] [stroke-dashoffset:0]'
        }`}
        d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
        fill="none"
        stroke="white"
        strokeWidth="6"
      />
      <path
        className={`transition-all duration-600 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isOpen 
            ? '[stroke-dasharray:1_60] [stroke-dashoffset:-30]' 
            : '[stroke-dasharray:60_60] [stroke-dashoffset:0]'
        }`}
        d="M 20,50 H 80"
        fill="none"
        stroke="white"
        strokeWidth="6"
      />
      <path
        className={`transition-all duration-600 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isOpen 
            ? '[stroke-dasharray:90_207] [stroke-dashoffset:-134]' 
            : '[stroke-dasharray:60_207] [stroke-dashoffset:0]'
        }`}
        d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
        fill="none"
        stroke="white"
        strokeWidth="6"
      />
    </svg>
  )
}
