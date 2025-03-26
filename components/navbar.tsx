import Link from 'next/link';
import React from 'react';
import { Menu, User } from 'lucide-react';

export default function Navbar() {
        return (
                <nav className="relative flex items-center h-16 bg-gray-800 text-white px-4">
                        {/* Burger menu on the left */}
                        <button className="flex-shrink-0" aria-label="Open menu">
                                <Menu size={24} />
                        </button>

                        {/* Centered title */}
                        <div className="absolute left-1/2 transform -translate-x-1/2">
                                <span className="text-xl font-bold">Posts</span>
                        </div>

                        {/* Profile icon on the right */}
                        <div className="ml-auto">
                                <Link href="/profile" aria-label="Profile">
                                        <User size={24} />
                                </Link>
                        </div>
                </nav>
        );
};


