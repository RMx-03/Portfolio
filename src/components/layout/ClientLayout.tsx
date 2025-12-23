'use client'

import React, { useState, useEffect, ReactNode } from 'react'
import { AnimatePresence } from 'framer-motion'
import LoadingScreen from './LoadingScreen'
import { Sidebar } from './Sidebar'

interface ClientLayoutProps {
  children: ReactNode
}

const ClientLayout: React.FC<ClientLayoutProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false)
    }, 5000)

    const contentTimer = setTimeout(() => {
      setShowContent(true)
    }, 5500)

    return () => {
      clearTimeout(loadingTimer)
      clearTimeout(contentTimer)
    }
  }, [])

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen />}
      </AnimatePresence>
      {showContent && (
        <>
          <Sidebar />
          <div className="pl-20">
            {children}
          </div>
        </>
      )}
    </>
  )
}

export default ClientLayout
