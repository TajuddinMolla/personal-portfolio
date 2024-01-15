'use client'
import React, { useState } from 'react'
import { NAVBAR } from "@/data/data";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Home, Menu } from 'lucide-react';

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import SideNavbar from './SideNavbar';

export default function Sidebar() {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)
    return (
        <>
            <div className='lg:hidden px-4 bg-white rounded-[4px] flex justify-between items-center min-h-[50px] shadow-lg text-[#776B5D]'>
                <Home />
                <Menu onClick={() => setIsMobileNavOpen(!isMobileNavOpen)} />
            </div>
            <Sheet open={isMobileNavOpen} onOpenChange={() => setIsMobileNavOpen(false)}>
                <SheetContent className='w-full'>
                    <div className=" max-h-[calc(100vh-64px)] overflow-y-auto py-8  bg-white flex flex-col items-center rounded-[20px]">
                        <SideNavbar />
                    </div>
                </SheetContent>
            </Sheet>
            <div className="min-w-[350px] max-h-[calc(100vh-64px)] overflow-y-auto py-8 px-6 shadow-lg bg-white hidden lg:flex flex-col items-center rounded-[20px]">
                <SideNavbar />
            </div>
        </>
    )
}
