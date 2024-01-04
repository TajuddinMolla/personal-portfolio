import { NAVBAR } from "@/data/data";
import { Facebook } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <main className="flex gap-8 min-h-screen py-8 2xl:py-24 px-8">
      <div className="min-w-[350px] pb-8 px-6 shadow-[rgb(209,217,230)_5px_5px_15px,rgb(255,255,255)_-5px_-5px_15px] bg-white mt-20 flex flex-col items-center rounded-[20px]">
        <div className="w-[160px] h-[160px] max-w-[160px] max-h-[160px] 2xl:h-[200px] 2xl:max-w-[200px] 2xl:max-h-[200px] 2xl:w-[200px] rounded-full overflow-hidden -mt-20">
          <img
            src="https://images.unsplash.com/photo-1704187508554-5f38dbbb3495?q=80&w=1968&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="mt-6 text-center">
          <h2 className="text-2xl font-bold">Tajuddin Molla</h2>
          <p className="text-sm mt-2">Software Engineer</p>
        </div>
        <div className="flex justify-center items-center gap-4 mt-6">
          <div className="p-2 rounded-full bg-[#f4f5f6]">
            <FaFacebookF className=" text-blue-500" />
          </div>
          <div className="p-2 rounded-full bg-[#f4f5f6]">
            <FaLinkedinIn className=" text-blue-700" />
          </div>
          <div className="p-2 rounded-full bg-[#f4f5f6]">
            <FaTwitter className=" text-blue-500" />
          </div>
          <div className="p-2 rounded-full bg-[#f4f5f6]">
            <FaGithub className=" text-black" />
          </div>
        </div>
        <div className="mt-6 w-full bg-[#F3F6F6] rounded-[20px] p-7">
          <div className="flex flex-col items-center justify-center divide-y w-full">
            {NAVBAR.map((item: any) => (
              <Link key={item.id} href={item.slug} className="py-2 w-full">
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-8 w-full">
          <button className="w-full py-2 px-4 rounded-full bg-slate-400">
            Download Cv
          </button>
        </div>
      </div>
      <div className="w-full shadow-[rgb(209,217,230)_5px_5px_15px,rgb(255,255,255)_-5px_-5px_15px] bg-white rounded-[20px] p-10">
        <div>
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-slate-700">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. <br></br> It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
        </div>
      </div>
    </main>
  );
}
