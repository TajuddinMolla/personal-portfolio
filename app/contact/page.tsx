import React from 'react'

export default function Contact() {
    return (
        <section className="text-[#776B5D] body-font relative">
            <div className='mb-8'>
                <h2 className="text-3xl mb-2 font-semibold  text-[#776B5D] text-center">Contact Us</h2>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-center">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p>
            </div>
            <div>

                <div className="w-full mx-auto">
                    <div className="flex flex-wrap -m-2">
                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label htmlFor="name" className="leading-7 text-sm text-[#776B5D]">Name</label>
                                <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300  focus:bg-white focus:ring-1 focus:ring-[#776B5D] text-base outline-none text-[#776B5D] py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>
                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label htmlFor="email" className="leading-7 text-sm text-[#776B5D]">Email</label>
                                <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300  focus:bg-white focus:ring-1 focus:ring-[#776B5D] text-base outline-none text-[#776B5D] py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <div className="relative">
                                <label htmlFor="message" className="leading-7 text-sm text-[#776B5D]">Message</label>
                                <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300  focus:bg-white focus:ring-1 focus:ring-[#776B5D] h-32 text-base outline-none text-[#776B5D] py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <button className="flex mx-auto text-white bg-[#776B5D] border-0 py-2 px-8 focus:outline-none hover:bg-[#776B5D] rounded-full text-lg">Send</button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
