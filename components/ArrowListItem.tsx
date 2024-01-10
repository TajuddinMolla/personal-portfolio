import { MoveRight } from "lucide-react";
import React from "react";

export default function ArrowListItem({ title }: any) {
  return (
    <div className="mb-4">
      <div className="w-full flex gap-x-4 items-center mb-2">
        <MoveRight className="w-4 h-4" />
        <p>{title}</p>
      </div>
    </div>
  );
}
