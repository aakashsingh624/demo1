import React from "react";
import styles from "./Hero.module.css";
export default function Hero() {
    return (
        <div className={`${styles["main-hero-section"]} text-landing-hero`}>
            <div className={`${styles["container"]} h-full mx-auto`}>
                <div className="h-full flex items-center">
                    <div>
                        <h1 className={styles["hero-heading"]}>
                            Transparent.
                            <br />
                            Flexible. Affordable.
                        </h1>
                        <div className="font-medium leading-10 tracking-normal text-lg">
                            MTLegal Team is an exclusive network of Online
                            Experts
                            <br />
                            providing simplest and affordable solutions to your
                            Legal problems.
                        </div>
                        <button
                            onClick={() => {
                                //@ts-ignore
                                document
                                    .getElementById("services")
                                    .scrollIntoView({
                                        block: "start",
                                        behavior: "smooth",
                                    });
                            }}
                        >
                            Explore Our Top Services
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
