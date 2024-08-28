import { FaHeart } from "react-icons/fa6";

export default function ProductCard({ product }) {
    const { title, price, imageUrl, date } = product;
    return (
        <div className={"flex flex-col justify-center rounded-lg bg-white"}>
            <div className="relative">
                <img src={imageUrl} alt={title} className={"rounded-t-lg w-full"} />
                <div className={"absolute top-2 right-2"}>
                    <FaHeart className={"text-slate-500 hover:text-red-500"} />
                </div>
            </div>

            <div className={"flex flex-col justify-center space-y-1 p-4"}>
                <span className={"text-xl font-semibold"}>{price} AZN</span>
                <span>{title}</span>
                <span className={"text-sm text-slate-400"}>{date}</span>
            </div>
        </div>
    );
}
