"use client";
import { Inter } from "next/font/google";
import React from "react";
import "@/app/globals.css";
import Header from "@/app/components/generalComponents/header/header";
import { useSession } from "next-auth/react";

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
    
        <div className="pt-[50px] h-full">
          <Header />
          {children}
        </div>
     
    </>
  );
}
