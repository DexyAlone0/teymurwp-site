import NavbarCategory from "@/components/layout/navbar/NavbarCategory.jsx";
import NavbarSearch from "./NavbarSearch";
import UpperNav from "./UpperNav";

export default function Navbar() {
  return (
    <>
      <UpperNav />
      <div className="hidden md:flex mx-auto bg-gray-200 container w-full my-4 rounded-lg space-x-4">
        <div className="flex-shrink-0">
          <NavbarCategory />
        </div>
        <div className="flex-grow">
          <NavbarSearch />
        </div>
      </div>
    </>
  );
}
