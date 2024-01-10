import React from "react";

export default function ProgressBarWithSkill({ name, percentage }: any) {
  return (
    <div className="mb-4">
      <div className="w-full flex justify-between items-center mb-2">
        <h5>{name}</h5>
        <p>{percentage}%</p>
      </div>
      <div className="h-[4px]  w-full bg-[#F3EEEA]">
        <div
          className="h-full bg-[#776B5D]"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}
