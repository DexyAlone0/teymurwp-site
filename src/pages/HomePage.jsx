import CategoryCard from "@/components/pages/cards/v2/CategoryCard";
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

      <div className="w-full p-4">
        <div className="grid grid-rows-2 md:grid-cols-8 gap-4 md:overflow-x-visible overflow-x-auto w-full md:w-full md:grid-flow-row grid-flow-col">
          {categoriesImageMockData.map((c, index) => (
            <div key={c.id}>
              <CategoryCard
                index={index}
                categoryName={c.title}
                imageUrl={c.imageUrl}
              />
            </div>
          ))}
        </div>
      </div>

      <ProductArea />
    </div>
  );
}
