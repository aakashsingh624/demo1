import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useLocation } from "react-router-dom";

export default function Layout(props: any) {
    const location = useLocation();
    const [showPadding, setShowPadding] = useState(false);
    useEffect(() => {
        if (location.pathname !== "/") {
            setShowPadding(true);
        } else {
            setShowPadding(false);
        }
    }, [location]);

    return (
        <div>
            <Navbar />
            {showPadding && <div style={{ height: "5rem" }}></div>}
            <div style={{ minHeight: "71.3vh" }}>{props.children}</div>

            <Footer />
        </div>
    );
}
