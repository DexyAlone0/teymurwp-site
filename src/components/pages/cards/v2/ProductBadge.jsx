import {Badge} from "@/components/ui/badge.jsx";

export default function ProductBadge({title}) {
    return (
        //0.625 ~ 11/2 px
        <Badge className="text-[0.625rem] bg-blue-400 hover:bg-blue-400 rounded-3xl px-1 py-0.5">{title}</Badge>
    )
}