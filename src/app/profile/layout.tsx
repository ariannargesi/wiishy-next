"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
import "@/app/globals.css";
import Header from "@/app/components/header/header";
import Navbar from "@/app/components/navbar/navbar";
import { useSession } from "next-auth/react";
import { LoginProvider } from "@/app/context/loginContext";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// };
//
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session, status } = useSession();
  return (
    <>
      <LoginProvider>
       
          {children}
        
      </LoginProvider>
    </>
  );
}
