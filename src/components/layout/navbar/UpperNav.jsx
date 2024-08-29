import React from 'react'
import { FiMenu } from "react-icons/fi";
import { FaHeart } from "react-icons/fa6";
import { LuDot } from "react-icons/lu";
import { Button } from "@/components/ui/button.jsx";

export default function UpperNav() {
  return (
    <div className={"flex mx-auto w-full bg-white shadow "}>
        <div
          className={
            "flex mx-auto container w-full  items-center justify-between p-4"
          }
        >
          <div className={"flex items-center space-x-4"}>
            <span className={"text-emerald-500 font-extrabold text-2xl"}>
              Navbar
            </span>
            <FiMenu className={"text-2xl text-black"} />
            <span
              className={"font-bold md:inline lg:text-lg hidden text-slate-500"}
            >
              Biznes üçün
            </span>
          </div>

          <div className={"flex items-center space-x-4"}>
            <FaHeart
              className={"hidden md:inline text-slate-500 hover:text-red-500"}
            />
            <div className={"hidden md:flex items-center space-x-1"}>
              <span className={" text-slate-500 hover:underline"}>Giriş</span>
              <LuDot className={"text-2xl text-slate-500"} />
              <span className={" text-slate-500 hover:underline"}>
                Qeydiyyat
              </span>
            </div>
            <Button
              variant={"destructive"}
              className={"rounded-full bg-rose-600"}
            >
              İlan yerleştir
            </Button>
          </div>
        </div>
      </div>
  )
}
