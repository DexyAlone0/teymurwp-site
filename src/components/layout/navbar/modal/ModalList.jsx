import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { getHoverColorClass } from "@/lib/utils";

export default function ModalList({
  category,
  index,
  setActiveCategory,
  onLeave,
  activeCategory,
}) {
  const hoverClass = getHoverColorClass(index);
  const isActive = category.title === activeCategory;

  return (
    <li
      key={category.id}
      className={`p-1 px-4 cursor-pointer m-0 text-base ${
        isActive ? hoverClass : ""
      }`}
      onMouseEnter={() => setActiveCategory(category.title)} // Hover durumu aktif
      onMouseLeave={onLeave} // Hover durumu dışı
    >
      <a
        href="#"
        className="flex items-center justify-between m-0 p-0 border-none text-base no-underline text-blue-900 transition duration-200"
      >
        <div className="min-w-7 min-h-8 w-7 h-8 mr-2">
          <div className="inline-block max-w-full overflow-hidden relative">
            <div className="block max-w-full">
              <img
                alt={category.title}
                aria-hidden="true"
                role="presentation"
                src={category.imageUrl}
                className="block w-full h-8 object-cover"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center w-full">
          <p className="m-0 p-0 text-sm leading-5 text-blue-900">
            {category.title}
          </p>
          <span tabIndex="0" className="relative block cursor-pointer">
            <FaAngleRight />
          </span>
        </div>
      </a>
    </li>
  );
}