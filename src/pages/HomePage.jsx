import HomeCard from "@/components/pages/cards/HomeCard.jsx";
import ProductArea from "@/components/pages/ProductArea.jsx";

const mockData = [
    {id: 1, imageUrl: "src/assets/araba.png", title: "Toplu taşıma"},
    {id: 2, imageUrl: "src/assets/bilgisayar.png", title: "Elektronik"},
    {id: 3, imageUrl: "src/assets/tekerlek.png", title: "Yedek parça ve aksesuarlar"},
    {id: 4, imageUrl: "src/assets/koltuk.png", title: "Ev ve bahçe için"},
    {id: 5, imageUrl: "src/assets/ev.png", title: "Gayrimenkul"},
    {id: 6, imageUrl: "src/assets/makine.png", title: "Hizmetler ve iş"},
    {id: 7, imageUrl: "src/assets/kıyafet.png", title: "Kişisel eşyalar"},
    {id: 8, imageUrl: "src/assets/kamp.png", title: "Hobiler ve boş zaman"},
    {id: 9, imageUrl: "src/assets/cocuk.png", title: "Çocuk dünyası"},
    {id: 10, imageUrl: "src/assets/hayvan.png", title: "Hayvanlar"},
    {id: 11, imageUrl: "src/assets/canta.png", title: "İş ilanları"},
    {id: 12, imageUrl: "src/assets/bisiklet.png", title: "Bisikletler"},
    {id: 13, imageUrl: "src/assets/categories.png", title: "Rehber"},
    {id: 14, imageUrl: "src/assets/magazalar.png", title: "Mağazalar"},
]

export default function HomePage() {
    return (
        <div className={"container"}>
            <div className={"grid grid-cols-1 md:grid-cols-8 w-full gap-4 p-4"}>
                {
                    mockData.map(c => (
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