'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface HeroSectionProps {
  title: string
  subtitle?: string
}

export const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle }) => {
  return (
    <section className="flex items-center justify-center min-h-screen px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          className="text-5xl font-bold mb-6 md:text-7xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  )
}
