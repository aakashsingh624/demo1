import React from "react";
import Layout from "../../Components/Layout/Layout";
import Hero from "./Components/Hero/Hero";
import HowWorks from "./Components/HowWorks/HowWorks";
import Services from "./Components/Services/Services";
import LegalMadeEasy from "./Components/LegalMadeEasy/LegalMadeEasy";
import Experts from "./Components/Experts/Experts";

export default function Landing() {
    return (
        <div>
            <section id="hero">
                <Hero />
            </section>

            <section id="howWorks" className="relative">
                <img
                    src="/img/bgs/g1.png"
                    style={{ width: "30em" }}
                    className="absolute top-0"
                />
                <HowWorks />
            </section>
            <section id="services" className="relative">
                <img
                    src="/img/bgs/g2.png"
                    style={{ width: "30em" }}
                    className="absolute top-0 right-0 -z-10"
                />
                <Services />
            </section>
            <section className="relative">
                <img
                    src="/img/bgs/g3.png"
                    style={{ width: "50em", height: "45em" }}
                    className="absolute top-0 left-0 -z-10"
                />
                <LegalMadeEasy />
            </section>
            <section className="relative">
                <img
                    src="/img/bgs/g6.png"
                    style={{ width: "55em", height: "25em" }}
                    className="absolute top-10 left-0 -z-10"
                />
                <img
                    src="/img/bgs/g5.png"
                    style={{ width: "55em", height: "35em" }}
                    className="absolute bottom-0 right-0 -z-10"
                />
                <Experts />
            </section>
        </div>
    );
}
