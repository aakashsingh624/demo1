import { servicesData } from "../../../../ConfigsData/services";
import { Link } from "react-router-dom";
import styles from "./Services.module.css";
import LandingStyles from "../../Landing.module.css";
export default function Services() {
    return (
        <div className="our-services-section pt-16">
            <div className={`our-services ${styles["container"]}`}>
                <div className={`${styles["vertical-line"]} bg-gold`}></div>
                <div className="text-center text-black text-xl tracking-widest font-normal">
                    <h4>TOP SERVICES</h4>
                </div>
                <div
                    className={`${LandingStyles["section-header"]} text-black`}
                >
                    What We Do
                </div>
                <div className="service-category grid grid-cols-3 align-top  mx-auto my-12">
                    <div className="service-category-column">
                        {servicesData.map((el, index) => (
                            <>
                                {[0, 1].includes(index) && (
                                    <div className="w-72 mx-auto bg-white">
                                        <Link className="/card" to={el.link}>
                                            <div
                                                className={
                                                    styles[
                                                        "sub-service-category"
                                                    ]
                                                }
                                            >
                                                <div
                                                    className={
                                                        styles[
                                                            "sub-services-icon"
                                                        ]
                                                    }
                                                >
                                                    {el.icon}
                                                </div>
                                                <div
                                                    className={
                                                        styles[
                                                            "sub-services-content"
                                                        ]
                                                    }
                                                >
                                                    <h2 className="mt-4 text-xl font-semibold">
                                                        {el.header}
                                                    </h2>
                                                    <p
                                                        className="text-base font-normal
                                                     tracking-wide leading-6"
                                                    >
                                                        {el.text}
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                )}
                            </>
                        ))}
                    </div>

                    <div className="service-category-column connecting-line h-full m-auto">
                        <img
                            src="/svg/connectingLines.svg"
                            alt="line"
                            className="mt-16"
                        />
                    </div>

                    <div className="service-category-column">
                        {servicesData.map((el, index) => (
                            <>
                                {[2, 3].includes(index) && (
                                    <div
                                        className={`w-72 mx-auto ${styles["link"]}`}
                                    >
                                        <Link className={``} to={el.link}>
                                            <div
                                                className={
                                                    styles[
                                                        "sub-service-category"
                                                    ]
                                                }
                                            >
                                                <div
                                                    className={
                                                        styles[
                                                            "sub-services-icon"
                                                        ]
                                                    }
                                                >
                                                    {el.icon}
                                                </div>
                                                <div
                                                    className={
                                                        styles[
                                                            "sub-services-content"
                                                        ]
                                                    }
                                                >
                                                    <h2 className="mt-4 text-xl font-semibold">
                                                        {el.header}
                                                    </h2>
                                                    <p
                                                        className="text-base font-normal
                                                     tracking-wide leading-6"
                                                    >
                                                        {el.text}
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                )}
                            </>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
