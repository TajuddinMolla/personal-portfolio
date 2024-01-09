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
    <main className="flex gap-8 min-h-screen py-8 2xl:py-24 px-8 bg-gradient-to-r from-white to-[#DCF2F1]">
      <div className="min-w-[350px] max-h-[calc(100vh-64px)] overflow-y-auto pb-8 px-6 shadow-lg bg-white  flex flex-col items-center rounded-[20px]">
        {/* <div className="w-[160px] h-[160px] max-w-[160px] max-h-[160px] 2xl:h-[200px] 2xl:max-w-[200px] 2xl:max-h-[200px] 2xl:w-[200px] rounded-full overflow-hidden -mt-20">
          <img
            src="https://images.unsplash.com/photo-1704187508554-5f38dbbb3495?q=80&w=1968&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-full h-full object-cover object-center"
          />
        </div> */}
        <div className="mt-6 text-center">
          <h2 className="text-2xl font-semibold">Tajuddin Molla</h2>
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
        <div className="mt-6 w-full bg-[#DCF2F1] rounded-[20px] p-7">
          <div className="flex flex-col items-center justify-center divide-y w-full">
            {NAVBAR.map((item: any) => (
              <Link key={item.id} href={item.slug} className="py-2 w-full">
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-8 w-full">
          <button className="w-full py-2 px-4 text-white rounded-full bg-[#7FC7D9]">
            Download Cv
          </button>
        </div>
      </div>
      <div className="w-full shadow-lg bg-white rounded-[20px] p-10 max-h-[calc(100vh-64px)] overflow-y-auto">
        <div>
          <h2 className="text-3xl font-semibold mb-4">About Me</h2>
          <p className="text-slate-700">I'm web designer, and I'm very passionate and dedicated to my work. With 20 years experience as a professional web developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration.</p>
        </div>
        <div className="mt-10">
          <h2 className="text-3xl font-semibold mb-4">What I Do</h2>
          <div className="grid grid-cols-2 gap-8">
            {
              [1, 2, 3, 4].map((item: any) => (
                <div className="bg-[#DCF2F1] rounded-[0.75rem] p-6 flex gap-4" key={item}>
                  <div>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.5 33.75C7.86458 33.75 8.15104 33.6458 8.35938 33.4375C8.61979 33.1771 8.75 32.8646 8.75 32.5C8.75 32.1354 8.61979 31.849 8.35938 31.6406C8.15104 31.3802 7.86458 31.25 7.5 31.25C7.13542 31.25 6.82292 31.3802 6.5625 31.6406C6.35417 31.849 6.25 32.1354 6.25 32.5C6.25 32.8646 6.35417 33.1771 6.5625 33.4375C6.82292 33.6458 7.13542 33.75 7.5 33.75ZM37.5 25H25.625L33.9844 16.5625C34.5052 16.0938 34.7656 15.5208 34.7656 14.8438C34.7656 14.1146 34.5052 13.5156 33.9844 13.0469L26.9531 6.01562C26.4844 5.49479 25.8854 5.23438 25.1562 5.23438C24.4792 5.23438 23.9062 5.49479 23.4375 6.01562L15 14.375V2.5C15 1.82292 14.7396 1.25 14.2188 0.78125C13.75 0.260417 13.1771 0 12.5 0H2.5C1.82292 0 1.22396 0.260417 0.703125 0.78125C0.234375 1.25 0 1.82292 0 2.5V32.5C0 34.5833 0.729167 36.3542 2.1875 37.8125C3.64583 39.2708 5.41667 40 7.5 40H37.5C38.1771 40 38.75 39.7396 39.2188 39.2188C39.7396 38.75 40 38.1771 40 37.5V27.5C40 26.8229 39.7396 26.25 39.2188 25.7812C38.75 25.2604 38.1771 25 37.5 25ZM12.5 32.5C12.5 33.8542 12.0052 35.026 11.0156 36.0156C10.026 37.0052 8.85417 37.5 7.5 37.5C6.14583 37.5 4.97396 37.0052 3.98438 36.0156C2.99479 35.026 2.5 33.8542 2.5 32.5V22.5H12.5V32.5ZM12.5 20H2.5V12.5H12.5V20ZM12.5 10H2.5V2.5H12.5V10ZM15 17.8906L25.1562 7.73438L32.2656 14.8438L15 32.1094V17.8906ZM37.5 37.5H13.125L23.125 27.5H37.5V37.5Z" fill="#7FC7D9" />
                    </svg>

                  </div>
                  <div>

                    <div>
                      <h3 className="text-xl font-medium">Ui/Ux Design</h3>
                    </div>
                    <div>
                      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.</p>
                    </div>
                  </div>
                </div>
              ))
            }

          </div>
        </div>
      </div>
    </main>
  );
}
