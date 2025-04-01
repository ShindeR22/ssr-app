// app/layout.tsx

import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Providers from "./providers"
import Navbar from "@/components/navbar"
import Footer from "@/components/ui/footer"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>
          <SidebarProvider>
            <Navbar />
            <AppSidebar />
            <div className="min-h-screen pt-16">
              {children}
            </div>
            <Footer />
          </SidebarProvider>
        </Providers>
      </body>
    </html>
  )
}