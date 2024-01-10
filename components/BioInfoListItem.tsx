import React from "react";

export default function BioInfoListItem({ title, description }: any) {
  return (
    <div className="flex items-center text-sm">
      <p className="font-bold min-w-[100px]">{title}:</p>
      <p>{description}</p>
    </div>
  );
}
