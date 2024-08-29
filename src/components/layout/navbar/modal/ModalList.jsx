import React from "react";
import { FaAngleRight } from "react-icons/fa6";

export default function ModalList({ category, index, setActiveCategory, onLeave, activeCategory }) {
  const isActive = category.title === activeCategory;

  return (
    <li
      key={category.id}
      className={`p-2 px-4 cursor-pointer m-0 text-base transition ${
        isActive ? "bg-emerald-50" : "bg-white hover:bg-gray-100"
      }`}
      onMouseEnter={() => setActiveCategory(category.title)}
      onMouseLeave={onLeave}
    >
      <a href="#" className="flex items-center justify-between text-gray-900">
        <div className="flex items-center">
          <img
            src={category.imageUrl}
            alt={category.title}
            className="w-6 h-6 mr-2"
          />
          <p className="text-sm font-semibold">{category.title}</p>
        </div>
        <FaAngleRight className="text-gray-400" />
      </a>
    </li>
  );
}