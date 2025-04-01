// components/ui/sidebar.tsx
"use client"
import { createContext, useContext, useState } from "react"

// Create a context to manage sidebar state
const SidebarContext = createContext({
  isOpen: false,
  toggle: () => { },
  close: () => { },
  open: () => { }
})

// Provider component to wrap around the application
export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(prev => !prev)
  const close = () => setIsOpen(false)
  const open = () => setIsOpen(true)

  return (
    <SidebarContext.Provider value={{ isOpen, toggle, close, open }}>
      {children}
    </SidebarContext.Provider>
  )
}

// Hook to access sidebar state
export function useSidebar() {
  return useContext(SidebarContext)
}

// Button component to trigger sidebar
export function SidebarTrigger() {
  const { toggle } = useSidebar()

  return (
    <button
      onClick={toggle}
      className="p-2 rounded-md hover:bg-gray-700"
      aria-label="Toggle sidebar"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
    </button>
  )
}