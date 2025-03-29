import Link from 'next/link';
import React from 'react';
import { Menu, Moon, Sun, User } from 'lucide-react';
import { useTheme } from 'next-themes';
// import { DropdownMenu } from '@radix-ui/react-dropdown-menu';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';
import { Button } from './ui/button';

export default function Navbar() {
        const { setTheme } = useTheme()

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
                        <div className='bg-gray-800'>
                                <DropdownMenu  >
                                        <DropdownMenuTrigger asChild>
                                                <Button variant="outline" size="icon" className='bg-gray-800'>
                                                        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                                        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                                        <span className="sr-only">Toggle theme</span>
                                                </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                                <DropdownMenuItem onClick={() => setTheme("light")}>
                                                        Light
                                                </DropdownMenuItem>
                                                <DropdownMenuItem onClick={() => setTheme("dark")}>
                                                        Dark
                                                </DropdownMenuItem>
                                                <DropdownMenuItem onClick={() => setTheme("system")}>
                                                        System
                                                </DropdownMenuItem>
                                        </DropdownMenuContent>
                                </DropdownMenu>
                        </div>
                </nav>
        );
};


