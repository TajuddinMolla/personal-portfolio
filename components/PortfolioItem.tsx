import React from "react";

export default function PortfolioItem({ item, setIsModalOpen, setActiveItem }: any) {
  return (
    <div className="bg-[#F3EEEA] cursor-pointer rounded-[0.75rem] overflow-hidden p-3 flex flex-col gap-2 mb-4" onClick={() => { setIsModalOpen(true); setActiveItem(item) }}>
      <div className="mb-2">
        <img
          src={item?.img}
          alt=""
          className="object-cover object-center w-full min-h-[250px] h-[250px] max-h-[250px] rounded-t-[0.75rem]"
        />
      </div>
      <div>
        <p className="text-sm">{item?.category?.name}</p>
        <p className="text-lg font-medium">{item?.name}</p>
      </div>
    </div>
  );
}
