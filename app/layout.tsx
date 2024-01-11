'use client'
import { Inter } from "next/font/google";
import "./globals.css";

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import Sidebar from "@/components/Sidebar";
const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className=" bg-gradient-to-r from-white to-[#F3EEEA] ">
        <main className="container flex gap-8 min-h-screen max-h-screen py-8 2xl:py-24 px-8 mx-auto">
          <Sidebar />
          <div className="w-full shadow-lg bg-white rounded-[20px] p-10 max-h-[calc(100vh-64px)] overflow-y-auto">
            {children}
          </div>
        </main>
        <ProgressBar
          height="2px"
          color="#776B5D"
          options={{ showSpinner: false }}
          shallowRouting
        />
      </body>
    </html>
  );
}
