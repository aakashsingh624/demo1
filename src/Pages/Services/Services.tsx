import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { serviceHeaders } from "../../ConfigsData/servicePages";
import styles from "./Services.module.css";
import LandingStyles from "../../Pages/Landing/Landing.module.css";
import ServiceCard from "./Components/ServiceCard/ServiceCard";
import Experts from "../Landing/Components/Experts/Experts";
import FAQ from "../../Components/FAQ/FAQ";
export default function Services() {
    const location = useLocation();
    const navigate = useNavigate();
    const service = location.pathname.split("/")[2];
    const [headerName, setHeaderName] = React.useState("");
    const [imgLeft, setImgLeft] = React.useState("");
    const [imgRight, setImgRight] = React.useState("");
    const [serviceCards, setServiceCards] = React.useState([]);
    const [question, setQuestion] = React.useState("");
    const [answer, setAnswer] = React.useState("");
    const [endLine, setEndLine] = React.useState("");
    React.useEffect(() => {
        console.log(serviceHeaders);
        //@ts-ignore
        setHeaderName(serviceHeaders[service]["header"]);
        //@ts-ignore
        setImgLeft(serviceHeaders[service]["leftImg"]);
        //@ts-ignore
        setImgRight(serviceHeaders[service]["rightImg"]);
        //@ts-ignore
        setServiceCards(serviceHeaders[service]["serviceCards"]);
        //@ts-ignore
        setQuestion(serviceHeaders[service]["question"]);
        //@ts-ignore
        setAnswer(serviceHeaders[service]["answer"]);
        //@ts-ignore
        setEndLine(serviceHeaders[service]["endLine"]);
    }, [location]);
    return (
        <div className="pb-4">
            <div className={styles["container"]}>
                <div className="bg-bluePrimary py-4 px-8 rounded-lg">
                    <div className=" grid grid-cols-6 items-center">
                        <div className="col-span-1">
                            <img
                                src={imgLeft}
                                className={`${styles["imgWidth"]} w-auto h-full`}
                            />
                        </div>
                        <div className="flex flex-col items-center col-span-4">
                            <div
                                className={`${LandingStyles["section-header"]} text-white ${styles["service-header"]}`}
                            >
                                {headerName}
                            </div>

                            <div>
                                <button
                                    className="bg-button-blue text-white text-base px-8 py-2 flex items-center font-semibold"
                                    onClick={() => {
                                        //@ts-ignore
                                        document
                                            .getElementById("how-to-order")
                                            .scrollIntoView({
                                                block: "start",
                                                behavior: "smooth",
                                            });
                                    }}
                                >
                                    How to Order{" "}
                                    <i className="bx bx-right-arrow-alt text-xl pl-2"></i>
                                </button>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <img
                                src={imgRight}
                                className={`${styles["imgWidth"]} w-auto h-full float-right`}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles["container"]}>
                <section>
                    <div
                        className={`${LandingStyles["section-header"]} text-bluePrimary`}
                    >
                        Our Services
                    </div>
                    <div className="flex items-stretch justify-center w-full pb-8">
                        {serviceCards &&
                            Array.isArray(serviceCards) &&
                            serviceCards.length >= 1 &&
                            serviceCards.map((el, index) => (
                                <div
                                    className={styles["card-max-width"]}
                                    onClick={() =>
                                        document
                                            .getElementById("services-experts")
                                            ?.scrollIntoView({
                                                block: "start",
                                                behavior: "smooth",
                                            })
                                    }
                                >
                                    <ServiceCard details={el} index={index} />
                                </div>
                            ))}
                    </div>
                </section>
                <section className="relative">
                    <img
                        src="/img/bgs/g3.png"
                        style={{ width: "30em", height: "20em" }}
                        className="absolute top-20 -left-72 -z-10"
                    />
                    <img
                        src="/img/bgs/g4.png"
                        style={{ width: "22em", height: "20em" }}
                        className="absolute -bottom-20 -right-36 -z-10"
                    />
                    <div className={`${styles["vertical-line"]} bg-gold`}></div>
                    <div
                        className={`${LandingStyles["section-header"]} text-bluePrimary ${styles["question"]}`}
                    >
                        {/* Why is Trademark Registration Important for{" "}
                        <span className="text-gold">Your </span> Brand? */}
                        {question}
                    </div>
                    <div className="w-full relative py-16">
                        <div className="absolute top-8 left-0">
                            <i className="bx bxs-quote-left text-bluePrimary text-9xl"></i>
                        </div>
                        <div className="text-lg font-medium text-bluePrimary text-center w-4/6 m-auto">
                            {answer}
                            {/* Trademarks are an important tool in the marketing of
                            any goods and services. A trademark can be any word,
                            phrase, design or combination of these things that
                            identifies your goods or services and distinguishes
                            you from other firms in the marketplace. They help
                            companies to protect their individual rights by
                            preventing anyone else from using their names,
                            brands or trademarks for their own benefit.
                            <br />
                            <br />
                            Your company’s reputation, once built, can be a
                            difficult thing to protect and hold true through
                            market changes. When you think of goodwill, it often
                            comes to mind with brands that have been around for
                            years or decades. Our trademark services are
                            designed to help you create a brand that stays true
                            to what your business is selling, who you are and
                            where you fit.
                            <br />
                            <br />
                            At MTLegalTeam, we help you register your trademarks
                            and perform trademark searches during the process.
                            Our professional service will make sure that your
                            trademarks are protected! */}
                        </div>
                        <div className="absolute bottom-16 right-0">
                            <i className="bx bxs-quote-right text-bluePrimary text-9xl"></i>
                        </div>
                    </div>
                </section>
                <section className="relative" id="how-to-order">
                    <img
                        src="/img/bgs/g6.png"
                        style={{ width: "30em", height: "60em" }}
                        className="absolute top-20 -left-52 -z-10"
                    />
                    <img
                        src="/img/bgs/g2.png"
                        style={{ width: "22em", height: "30em" }}
                        className="absolute -bottom-20 -right-36 -z-10"
                    />
                    <div className={`${styles["vertical-line"]} bg-gold`}></div>
                    <div
                        className={`${LandingStyles["section-header"]} text-bluePrimary`}
                    >
                        How to Order
                    </div>
                    <div className="w-2/6 m-auto py-8 mb-8">
                        <img
                            src="/img/HowToOrder.png"
                            className="w-full h-auto"
                        />
                    </div>
                    {/* <p className={styles["animated-text"]}>It's that easy</p> */}
                    <div className={styles["abstract-background"]}>
                        <h1 className={styles["text-overlay"]}>
                            It's that easy!
                        </h1>
                    </div>
                </section>
            </div>
            <section id="services-experts">
                {service === "legal_agreements" ? (
                    <div>
                        <div className="py-8">
                            <div className="text-center text-xl font-semibold text-black">
                                Connect with us and put our expertise to work
                                for you.
                            </div>
                            <div className="w-fit m-auto my-2">
                                <button
                                    className="border border-gold rounded-md text-bluePrimary bg-white hover:bg-gold hover:text-white px-8 py-2 font-semibold "
                                    onClick={() => navigate("/contact")}
                                >
                                    Contact us
                                </button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <Experts />
                )}
            </section>
            <section>
                <div className="w-2/3 mx-auto mt-0 mb-20">
                    <div className="bg-blue-bg text-bluePrimary text-base font-semibold border-l-bluePrimary border-l-8  rounded-xl">
                        <div className="px-12 py-6">
                            {endLine}
                            {/* When choosing a lawyer, its important to do your
                            research and find someone who can help you navigate
                            the legal system and protect your rights. Our goal
                            is to connect you online with one of our experienced
                            attorneys who will be able to address your needs. */}
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <FAQ />
            </section>
        </div>
    );
}
