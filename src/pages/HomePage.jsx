import HomeCard from "@/components/pages/cards/HomeCard.jsx";
import CategoryMobile from "@/components/pages/category/CategoryMobile";
import ProductArea from "@/components/pages/ProductArea.jsx";
import { categoriesImageMockData } from "@/testData/index.js";


export default function HomePage() {
  return (
    <div className={"flex flex-col mx-auto w-full p-2 container"}>
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold">Kategoriler</h3>
        <div className="md:hidden">
         <CategoryMobile />
        </div>
      </div>

      <div className={"grid grid-cols-1 md:grid-cols-8 w-full gap-4 p-4"}>
        {categoriesImageMockData.map((c) => (
          <div key={c.id}>
            <HomeCard title={c.title} imageUrl={c.imageUrl} />
          </div>
        ))}
      </div>

      <ProductArea />
    </div>
  );
}
