import { FiSearch } from "react-icons/fi";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function NavbarSearch() {
  return (
    <div className="flex items-center justify-center p-4 space-x-2">
      <Input placeholder="Ara..." />
      <Button>Ara</Button>
    </div>
  );
}
