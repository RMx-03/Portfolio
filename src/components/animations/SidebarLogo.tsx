'use client'

import React from 'react'
import Image from 'next/image'

/**
 * Sidebar logo component using static image
 * Displays the portfolio logo in the sidebar navigation
 */
const SidebarLogo: React.FC = () => {
    return (
        <div className="w-16 h-16 relative hover:scale-110 transition-transform duration-300">
            <Image
                src="/SidebarLogo.png"
                alt="Portfolio Logo"
                fill
                className="object-contain"
                priority
            />
        </div>
    )
}

export default SidebarLogo
