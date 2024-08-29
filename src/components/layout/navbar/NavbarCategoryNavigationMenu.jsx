import { FaChevronDown } from "react-icons/fa6";

export default function NavbarCategoryNavigationMenu() {
    return (
       <div className="flex space-x-4 items-center">
           <h3 className={"text-lg font-bold"}>
               Bütün Kategoriler
           </h3>
           <FaChevronDown className={"text-slate-500 hover:text-red-500 transition transform hover:rotate-180"} />
       </div>
    );
}