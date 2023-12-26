import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const montserrat = Montserrat({
  subsets: ['latin'], 
  variable: '--font-mont' 
})

export const metadata: Metadata = {
  title: 'Esra Sevinc | Software Engineer',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} font-mont bg-light w-full min-h-screen`} >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
