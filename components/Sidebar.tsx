'use client'
import React from 'react'
import { NAVBAR } from "@/data/data";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Home, Menu } from 'lucide-react';

export default function Sidebar() {
    return (
        <>
            <div className='px-4 bg-white rounded-[4px] flex justify-between items-center min-h-[50px] shadow-lg text-[#776B5D]'>
                <Home />
                <Menu />
            </div>
            <div className="min-w-[350px] max-h-[calc(100vh-64px)] overflow-y-auto py-8 px-6 shadow-lg bg-white hidden lg:flex flex-col items-center rounded-[20px]">
                <div className="w-[160px] h-[160px] max-w-[160px] max-h-[160px] 2xl:h-[200px] 2xl:max-w-[200px] 2xl:max-h-[200px] 2xl:w-[200px]">
                    <img
                        src="https://images.unsplash.com/photo-1704187508554-5f38dbbb3495?q=80&w=1968&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                        className=" rounded-full w-full h-full object-cover object-center"
                    />
                </div>
                <div className="mt-6 text-center">
                    <h2 className="text-2xl font-semibold text-[#776B5D]">
                        Tajuddin Molla
                    </h2>
                    <p className="text-sm mt-2 text-[#776B5D]">Software Engineer</p>
                </div>
                <div className="flex justify-center items-center gap-4 mt-6">
                    <div className="p-2 rounded-full bg-[#f4f5f6]">
                        <FaFacebookF className=" text-[#776B5D]" />
                    </div>
                    <div className="p-2 rounded-full bg-[#f4f5f6]">
                        <FaLinkedinIn className=" text-[#776B5D]" />
                    </div>
                    <div className="p-2 rounded-full bg-[#f4f5f6]">
                        <FaTwitter className=" text-[#776B5D]" />
                    </div>
                    <div className="p-2 rounded-full bg-[#f4f5f6]">
                        <FaGithub className=" text-[#776B5D]" />
                    </div>
                </div>
                <div className="mt-6 w-full bg-[#f4f5f6] rounded-[20px] p-7">
                    <div className="flex flex-col items-center justify-center divide-y w-full">
                        {NAVBAR.map((item: any) => (
                            <Link
                                key={item.id}
                                href={item.slug}
                                className="py-2 w-full text-[#776B5D]"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="mt-8 w-full">
                    <button className="w-full py-2 px-4 text-white rounded-full bg-[#776B5D]">
                        Download Cv
                    </button>
                </div>
            </div>
        </>
    )
}
