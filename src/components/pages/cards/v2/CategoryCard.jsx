import { getColorClass } from "@/lib/utils";
import React from "react";

export default function CategoryCard({ categoryName, imageUrl, index }) {
  const bgColor = getColorClass(index);
  return (
    <div className={`flex flex-col justify-between p-2 w-32 md:w-full rounded-lg ${bgColor} h-full`}>
      <span>{categoryName}</span>
      <div className="flex w-full items-end justify-end">
        <img src={imageUrl} alt={categoryName} className="w-10 h-10" />
      </div>
    </div>
  );
}