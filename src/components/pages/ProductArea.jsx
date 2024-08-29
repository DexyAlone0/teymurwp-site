import ProductCard from "@/components/pages/cards/v2/ProductCard.jsx";

const mockData = [
    {
        id: 1,
        title: "Ürün 1",
        description: "Bu ürün 1'in açıklamasıdır.",
        imageUrl: "https://placehold.co/270x180/png",
        avatarUrl: "https://github.com/shadcn.png",
        price: 15,
        date: "2024-08-27",
        isPro: true,
    },
    {
        id: 2,
        title: "Ürün 2",
        description: "Bu ürün 2'nin açıklamasıdır.",
        imageUrl: "https://placehold.co/270x180/png",
        avatarUrl: "https://github.com/shadcn.png",
        price: 20,
        date: "2024-08-27",
        isPro: true,
    },
    {
        id: 3,
        title: "Ürün 3",
        description: "Bu ürün 3'ün açıklamasıdır.",
        imageUrl: "https://placehold.co/270x180/png",
        avatarUrl: "https://github.com/shadcn.png",
        price: 25,
        date: "2024-08-27",
        isPro: false,
    },
    {
        id: 4,
        title: "Ürün 4",
        description: "Bu ürün 4'ün açıklamasıdır.",
        imageUrl: "https://placehold.co/270x180/png",
        avatarUrl: "https://github.com/shadcn.png",
        price: 30,
        date: "2024-08-27",
        isPro: false,
    },
    {
        id: 5,
        title: "Ürün 5",
        description: "Bu ürün 5'in açıklamasıdır.",
        imageUrl: "https://placehold.co/270x180/png",
        avatarUrl: "https://github.com/shadcn.png",
        price: 35,
        date: "2024-08-27",
        isPro: true,
    },
    {
        id: 6,
        title: "Ürün 6",
        description: "Bu ürün 6'nın açıklamasıdır.",
        imageUrl: "https://placehold.co/270x180/png",
        avatarUrl: "https://github.com/shadcn.png",
        price: 40,
        date: "2024-08-27",
        isPro: true,
    },
    {
        id: 7,
        title: "Ürün 7",
        description: "Bu ürün 7'nin açıklamasıdır.",
        imageUrl: "https://placehold.co/270x180/png",
        avatarUrl: "https://github.com/shadcn.png",
        price: 45,
        date: "2024-08-27",
        isPro: true,
    },
    {
        id: 8,
        title: "Ürün 8",
        description: "Bu ürün 8'in açıklamasıdır.",
        imageUrl: "https://placehold.co/270x180/png",
        avatarUrl: "https://github.com/shadcn.png",
        price: 50,
        date: "2024-08-27",
        isPro: false,
    }
];

export default function ProductArea() {
    return (
        <>
            <div className="flex items-center p-8 justify-between">
                <h4 className={"text-lg text-slate-500 font-medium"}>VIP ILANLAR</h4>
                <span className="text-lg text-blue-400 underline hover:no-underline">Bütün VIP Ilanlar</span>
            </div>

            <div className={"grid grid-cols-1 md:grid-cols-4 gap-4 w-full p-4"}>
                {
                    mockData.map(p => (
                        <div key={p.id}>
                            <ProductCard product={p}/>
                        </div>
                    ))
                }
            </div>
        </>
    )
}