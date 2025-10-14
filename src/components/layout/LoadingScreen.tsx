'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Logo from '@/components/animations/Logo'

const LoadingScreen: React.FC = () => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: '#3d402d' }}
      initial={{ y: 0 }}
      exit={{ y: '-100vh' }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <Logo />
    </motion.div>
  )
}

export default LoadingScreen
