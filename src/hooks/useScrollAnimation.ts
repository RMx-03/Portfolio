'use client'

import { useState, useEffect } from 'react'

interface ScrollAnimationReturn {
  scrollY: number
  scrollProgress: number
  isScrollingDown: boolean
}

export const useScrollAnimation = (): ScrollAnimationReturn => {
  const [scrollY, setScrollY] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isScrollingDown, setIsScrollingDown] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = windowHeight > 0 ? currentScrollY / windowHeight : 0

      setScrollY(currentScrollY)
      setScrollProgress(progress)
      setIsScrollingDown(currentScrollY > lastScrollY)
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return { scrollY, scrollProgress, isScrollingDown }
}
