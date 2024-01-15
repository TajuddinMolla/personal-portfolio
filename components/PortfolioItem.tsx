import React from "react";

export default function PortfolioItem({ img, title, category, setIsModalOpen }: any) {
  return (
    <div className="bg-[#F3EEEA] cursor-pointer rounded-[0.75rem] overflow-hidden p-3 flex flex-col gap-2 mb-4" onClick={() => setIsModalOpen(true)}>
      <div className="mb-2">
        <img
          src={img}
          alt=""
          className="object-cover object-center w-full h-full rounded-t-[0.75rem]"
        />
      </div>
      <div>
        <p className="text-sm">{category}</p>
        <p className="text-lg font-medium">{title}</p>
      </div>
    </div>
  );
}
