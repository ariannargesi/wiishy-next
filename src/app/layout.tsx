'use client'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from "react";
import './style.css';
import { SessionProvider } from 'next-auth/react';
import { GeistMono } from 'geist/font/mono';
import { Roboto } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})
// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// };

export default function RootLayout({ children, }: { children: React.ReactNode }) {

  return (
    <html lang='en'>
      <body className={roboto.className} style={{maxWidth: 700, margin: '0 auto'}}>
        <React.StrictMode>
          <SessionProvider>{children}</SessionProvider>
        </React.StrictMode>
      </body>
    </html>
  )
}



