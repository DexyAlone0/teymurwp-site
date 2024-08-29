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
    <div className="px-12 pb-4 flex h-[516px] overflow-hidden rounded-b-lg box-border mt-2">
      <div className="flex bg-white rounded-lg w-full box-border m-0 p-0">
        <ul className="flex flex-col min-w-[292px] w-[292px] border-r py-4 overflow-scroll box-border m-0 list-none">
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
        <ModalBodyDesktop
          navbarCategoryMockData={navbarCategoryMockData}
          activeCategory={activeCategory || lastActiveCategory}
        />
      </div>
    </div>
  );
}
