// components/app-sidebar.jsx
"use client"
import { useSidebar } from "@/components/ui/sidebar"
import Link from "next/link"

export function AppSidebar() {
    const { isOpen, close } = useSidebar()

    if (!isOpen) return null

    return (
        <aside className="fixed inset-0 top-16 z-50 w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 shadow-lg transform transition-transform duration-200 ease-in-out">
            <div className="flex flex-col h-full p-4">
                <div className="space-y-4">
                    <Link
                        href="/"
                        className="flex items-center text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-md"
                        onClick={close}
                    >
                        Home
                    </Link>
                    <Link
                        href="/posts"
                        className="flex items-center text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-md"
                        onClick={close}
                    >
                        Posts
                    </Link>
                    <Link
                        href="/users"
                        className="flex items-center text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-md"
                        onClick={close}
                    >
                        Users
                    </Link>
                    <Link
                        href="/contact"
                        className="flex items-center text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-md"
                        onClick={close}
                    >
                        Contact
                    </Link>
                </div>
            </div>
            <div className="absolute inset-0 bg-black/30 -z-10 md:hidden" onClick={close}></div>
        </aside>
    )
}