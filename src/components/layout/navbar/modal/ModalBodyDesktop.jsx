import React, { useState } from "react";

export default function ModalBodyDesktop({ navbarCategoryMockData, activeCategory }) {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (subCategoryId) => {
    setExpanded((prev) => ({
      ...prev,
      [subCategoryId]: !prev[subCategoryId],
    }));
  };

  if (!activeCategory || !navbarCategoryMockData[activeCategory]) {
    return <div className="p-4">Bir kategori seçin</div>; // Hover edilmeyen durum için
  }

  const activeCategoryData = navbarCategoryMockData[activeCategory];

  return (
    <div className="hidden md:flex w-full h-full flex-col p-8 overflow-y-auto">
      <h3 className="text-emerald-400 font-bold text-xl">
        {activeCategory} |{" "}
        <span className="text-gray-400">{activeCategoryData.count}</span>
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 py-8 gap-4">
        {activeCategoryData.subCategories.map((subCategory) => {
          const isExpanded = expanded[subCategory.id];
          const itemsToShow = isExpanded
            ? subCategory.categories
            : subCategory.categories.slice(0, 5);

          return (
            <ul key={subCategory.id}>
              <li className="font-bold">{subCategory.title}</li>
              {itemsToShow.map((category) => (
                <li key={category.id} className="text-sm">
                  <a
                    href={category.url}
                    className="hover:text-emerald-600 transition duration-150 ease-in-out"
                  >
                    {category.name}
                  </a>
                </li>
              ))}
              {subCategory.categories.length > 5 && (
                <li>
                  <button
                    className="text-emerald-500"
                    onClick={() => toggleExpand(subCategory.id)}
                  >
                    {isExpanded ? "Daha az" : "Daha fazla"}
                  </button>
                </li>
              )}
            </ul>
          );
        })}
      </div>
    </div>
  );
}