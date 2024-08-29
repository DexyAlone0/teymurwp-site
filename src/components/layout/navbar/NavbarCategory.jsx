import {useState} from "react";
import GripIcon from "@/components/core/icons/GripIcon.jsx";
import NavbarCategoryNavigationMenu from "@/components/layout/navbar/NavbarCategoryNavigationMenu.jsx";
import NavbarCategoryModal from "@/components/layout/navbar/modal/NavbarCategoryModal.jsx";

export default function NavbarCategory() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleToggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div
            className={"flex flex-col space-x-4 mx-auto bg-gray-200 container w-full my-4 p-8 rounded-lg"}>
            <div
                className={"flex space-x-4 bg-white rounded-lg items-center p-4"}
                onClick={handleToggleModal}
            >
                <GripIcon/>
                <NavbarCategoryNavigationMenu/>
            </div>

            {isModalOpen && <NavbarCategoryModal/>}
        </div>
    );
}