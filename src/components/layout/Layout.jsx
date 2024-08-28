import React from "react";
import Navbar from "@/components/layout/navbar/Navbar.jsx";

export default function Layout({children}) {
    return (
        <>
            <Navbar/>
            <main>{children}</main>
        </>
    )
}