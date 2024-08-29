import {FaHeart} from "react-icons/fa6";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar.jsx";
import {IoMdMail} from "react-icons/io";
import {Badge} from "@/components/ui/badge.jsx";
import ProductBadge from "@/components/pages/cards/v2/ProductBadge.jsx";

export default function ProductCard({product}) {
    const {title, price, imageUrl, avatarUrl, isPro} = product;
    const fallbackText = title.slice(0, 2).toUpperCase();
    return (
        <div className={"flex flex-col justify-center rounded-lg bg-white"}>
            <div className="relative">
                <img src={imageUrl} alt={title} className={"rounded-t-lg w-full"}/>
                <div className={""}>
                </div>
            </div>


            <div className={"flex flex-col justify-center space-y-1 p-4"}>
                <span className={"text-xl font-semibold"}>{price} AZN</span>
                <span>{title}</span>
            </div>
            <div className={"flex p-2 items-center justify-between space-x-2"}>
                <div className={"flex space-x-2 items-center"}>
                    <Avatar className={"w-fit h-7"}>
                        {/*TODO: change here with avatarUrl*/}
                        <AvatarImage src={avatarUrl}/>
                        <AvatarFallback>{fallbackText}</AvatarFallback>
                    </Avatar>
                    {isPro && <ProductBadge title={"PRO"} />}
                </div>
                <div className={"flex items-center space-x-2"}>
                    <IoMdMail
                        className={"text-xl font-semibold text-slate-500 transition duration-150 ease-in-out hover:text-green-500"}/>
                    <FaHeart
                        className={"text-xl font-semibold text-slate-500 transition duration-150 ease-in-out hover:text-red-500"}/>

                </div>
            </div>
        </div>
    )
}