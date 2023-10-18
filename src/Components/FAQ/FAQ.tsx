import styles from "./FAQ.module.css";
import LandingStyles from "../../Pages/Landing/Landing.module.css";
import { faqData } from "../../ConfigsData/faq";
import React from "react";
import Accordion from "../Accordion/Accordion";
export default function FAQ() {
    const [faq, setFaq] = React.useState<
        {
            question: string;
            answer: string;
        }[]
    >(faqData);
    return (
        <div className={`${styles["container"]}`}>
            {/* <div className={`${styles["vertical-line"]} bg-gold`}></div> */}
            <div
                className={`${LandingStyles["section-header"]} text-bluePrimary`}
            >
                Frequently Asked Questions
            </div>
            <div className="px-4 py-8 w-4/5 mx-auto">
                <div className="grid grid-cols-1">
                    {faq &&
                        faq.length > 0 &&
                        faq.map((el) => (
                            <div className="mx-4 my-2" key={el.question}>
                                <Accordion
                                    header={el.question}
                                    body={el.answer}
                                />
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}
