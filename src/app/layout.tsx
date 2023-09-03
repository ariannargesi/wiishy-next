import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from "react";
import './globals.css';

// import Header from '@/app/components/header'
// import Navbar from '@/app/components/navbar';



const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// };

export default function RootLayout({ children, }: { children: React.ReactNode }) {


  return (
    <html>
      <body className={inter.className}>
        <React.StrictMode>
          {children}
        </React.StrictMode>
      </body>
    </html>
  )
}
