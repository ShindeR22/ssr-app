// components/navbar.jsx
"use client"
import React from 'react'
import Link from 'next/link'
import { User } from 'lucide-react'
import Themebutton from './themebutton'
import { SidebarTrigger } from '@/components/ui/sidebar'

export default function Navbar() {
    return (
        <nav className="fixed top-0 z-50 w-full flex items-center h-16 bg-gray-800 text-white px-4">
            {/* Burger menu on the left */}
            <SidebarTrigger />

            {/* Centered title */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
                <span className="text-xl font-bold">Posts</span>
            </div>

            {/* Profile icon on the right */}
            <div className="ml-auto flex items-center gap-4">
                <Link href="/profile" aria-label="Profile">
                    <User size={24} />
                </Link>
                <Themebutton />
            </div>
        </nav>
    )
}