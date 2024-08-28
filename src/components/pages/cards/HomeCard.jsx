export default function HomeCard({imageUrl, title}) {
    return (
        <>
            <div
                className={"rounded-2xl bg-white items-center flex justify-center border border-gray-200 hover:border-red-400 p-4"}>
                <img src={imageUrl} alt={title}  className={"h-24"}/>
            </div>
            <span className={"text-sm text-slate-500"}>{title}</span>
        </>
    )
}
