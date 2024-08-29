import { useState } from "react";
import GripIcon from "@/components/core/icons/GripIcon.jsx";
import NavbarCategoryNavigationMenu from "@/components/layout/navbar/NavbarCategoryNavigationMenu.jsx";
import NavbarCategoryModal from "@/components/layout/navbar/modal/NavbarCategoryModal.jsx";

export default function NavbarCategory() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleToggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <div
        className={`flex p-2 flex-col`} // Genişliği artırdık
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleToggleModal}
      >
        <div
          className={`flex space-x-2 bg-white rounded-lg items-center p-2 cursor-pointer transition ${
            isHovered ? "border-emerald-500 border" : ""
          }`}
         >
          <GripIcon />
          <NavbarCategoryNavigationMenu isModalOpen={isModalOpen} />
        </div>
      </div>
      <div className="w-full  absolute z-10  h-full ">
        {isModalOpen && <NavbarCategoryModal />}
      </div>
    </>
  );
}
