'use client'

import React from 'react'
import { motion } from 'framer-motion'

export const Header: React.FC = () => {
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-40 px-6 py-4 backdrop-blur-sm bg-background/80"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-xl font-bold">Portfolio</div>
        <ul className="flex gap-6">
          <li>
            <a href="#home" className="hover:opacity-70 transition-opacity">
              Home
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:opacity-70 transition-opacity">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:opacity-70 transition-opacity">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </motion.header>
  )
}
