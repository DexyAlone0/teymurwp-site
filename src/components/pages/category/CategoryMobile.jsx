import React, { useState } from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { categoriesImageMockData, navbarCategoryMockData } from "@/testData/index.js";
import { getHoverColorClass } from "@/lib/utils"; 

export default function CategoryMobile() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    setSelectedSubCategory(null);
  };

  const handleSelectSubCategory = (subCategory) => {
    setSelectedSubCategory(subCategory);
  };

  const handleBackToCategories = () => {
    setSelectedCategory(null);
    setSelectedSubCategory(null);
  };

  const handleBackToSubCategories = () => {
    setSelectedSubCategory(null);
  };

  return (
    <Sheet>
      <SheetTrigger>
        <div className="flex space-x-2 items-center">
          <span className="text-slate-500">Tüm kategoriler</span>
          <FaAngleRight className="text-sm text-gray-400" />
        </div>
      </SheetTrigger>
      <SheetContent className="w-full h-full overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Kategoriler</SheetTitle>
        </SheetHeader>

        {/* Ana Kategoriler */}
        {!selectedCategory && (
          <div className="p-4 ">
            <ul className="space-y-2">
              {categoriesImageMockData.map((category, index) => (
                <li
                  key={category.id}
                  className={`p-4 rounded-lg cursor-pointer flex items-center justify-between transition duration-200 ease-in-out transform hover:scale-105 ${getHoverColorClass(index)}`}  
                  onClick={() => handleSelectCategory(category)}
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={category.imageUrl}
                      alt={category.title}
                      className="w-10 h-10 object-cover transition duration-200 ease-in-out transform hover:scale-110"
                    />
                    <span>{category.title}</span>
                  </div>
                  <FaAngleRight />
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Alt Kategoriler */}
        {selectedCategory && !selectedSubCategory && (
          <div className="p-4">
            <button onClick={handleBackToCategories} className="text-blue-500 mb-4">
              Geri
            </button>
            <h2 className="text-xl font-bold mb-4">Alt Kategoriler</h2>
            <ul className="space-y-2">
              {navbarCategoryMockData[selectedCategory.title]?.subCategories.map((subCategory, index) => (
                <li
                  key={subCategory.id}
                  className={`p-4 rounded-lg cursor-pointer flex items-center justify-between transition duration-200 ease-in-out transform hover:scale-105 ${getHoverColorClass(index)}`}
                  onClick={() => handleSelectSubCategory(subCategory)}
                >
                  <div className="flex items-center space-x-4">
                    <span>{subCategory.title}</span>
                  </div>
                  <FaAngleRight />
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Linkler */}
        {selectedSubCategory && (
          <div className="p-4">
            <button onClick={handleBackToSubCategories} className="text-blue-500 mb-4">
              Geri
            </button>
            <h2 className="text-xl font-bold mb-4">Linkler</h2>
            <ul className="space-y-2">
              {selectedSubCategory.categories.map((link, index) => (
                <li key={link.id} className={`p-4 rounded-lg transition duration-200 ease-in-out transform hover:scale-105 ${getHoverColorClass(index)}`}>
                  <a href={link.url} className="text-blue-500">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}