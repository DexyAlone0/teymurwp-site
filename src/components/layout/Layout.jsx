import React from "react";
import Navbar from "@/components/layout/navbar/Navbar.jsx";
import Footer from "@/components/layout/Footer.jsx"; // Footer bileşenini içe aktarın

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer /> {/* Footer'ı buraya ekleyin */}
        </>
    );
}
