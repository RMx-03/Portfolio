'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SidebarLogo from '../animations/SidebarLogo'
import { HamburgerMenu } from '@/components/ui/HamburgerMenu'

interface NavItem {
  label: string
  href: string
}

const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

/**
 * Left sidebar navigation component
 * 
 * Features:
 * - Sticky positioning across all sections
 * - Animated hamburger menu toggle
 * - Smooth slide-in navigation menu
 * - Minimal grey border design
 */
export const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <>
      <motion.aside
        className="fixed left-0 top-0 h-screen w-20 bg-background border-r border-gray-200 dark:border-gray-800 z-50 flex flex-col items-center"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <button
          onClick={toggleMenu}
          className="mt-8 focus:outline-none rounded-lg p-1"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <HamburgerMenu isOpen={isOpen} />
        </button>

        <div className="flex-1 flex items-center justify-center">
          <SidebarLogo />
        </div>

        <div className="mb-8 text-white text-xs font-light tracking-wide">
          © 2025
        </div>
      </motion.aside>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
            />

            <motion.nav
              className="fixed left-20 top-0 h-screen w-64 bg-background border-r border-gray-200 dark:border-gray-800 z-30 flex flex-col py-12 px-6"
              initial={{ x: -264 }}
              animate={{ x: 0 }}
              exit={{ x: -264 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <ul className="space-y-6">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <a
                      href={item.href}
                      onClick={toggleMenu}
                      className="block text-lg font-medium text-foreground hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
