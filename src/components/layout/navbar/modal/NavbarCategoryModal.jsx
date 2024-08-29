import React, { useState } from "react";
import {
  categoriesImageMockData,
  navbarCategoryMockData,
} from "@/testData/index.js";
import ModalList from "@/components/layout/navbar/modal/ModalList.jsx";
import ModalBodyDesktop from "@/components/layout/navbar/modal/ModalBodyDesktop.jsx";

export default function NavbarCategoryModal() {
  const [activeCategory, setActiveCategory] = useState(
    categoriesImageMockData[0]?.title || null
  );
  const [lastActiveCategory, setLastActiveCategory] = useState(
    categoriesImageMockData[0]?.title || null
  );

  const handleMouseEnter = (categoryTitle) => {
    setActiveCategory(categoryTitle);
    setLastActiveCategory(categoryTitle);
  };

  const handleMouseLeave = () => {
    setActiveCategory(null);
  };

  return (
    <div className="flex w-full h-full absolute inset-0 z-50 rounded-lg bg-gray-200">
      <div className="flex shadow-lg bg-white rounded-lg w-full max-w-6xl mx-auto my-8">
        <ul className="flex flex-col min-w-[250px] rounded-tl-lg rounded-bl-lg border-r py-4 overflow-y-auto bg-white">
          {categoriesImageMockData.map((c, index) => (
            <ModalList
              key={c.id}
              category={c}
              navbarCategoryMockData={navbarCategoryMockData}
              index={index}
              setActiveCategory={handleMouseEnter}
              onLeave={handleMouseLeave}
              activeCategory={activeCategory}
            />
          ))}
        </ul>
        <div className="flex-grow p-4 overflow-y-auto">
          <ModalBodyDesktop
            navbarCategoryMockData={navbarCategoryMockData}
            activeCategory={activeCategory || lastActiveCategory}
          />
        </div>
      </div>
    </div>
  );
}