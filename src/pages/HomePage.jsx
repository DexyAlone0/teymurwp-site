import HomeCard from "@/components/pages/cards/HomeCard.jsx";
import ProductArea from "@/components/pages/ProductArea.jsx";
import {categoriesImageMockData} from "@/testData/index.js";

export default function HomePage() {
    return (
        <div className={"container"}>
            <div className={"grid grid-cols-1 md:grid-cols-8 w-full gap-4 p-4"}>
                {
                    categoriesImageMockData.map(c => (
                        <div key={c.id}>
                            <HomeCard title={c.title} imageUrl={c.imageUrl} />
                        </div>
                    ))
                }
            </div>

            <ProductArea />
        </div>
    )
}