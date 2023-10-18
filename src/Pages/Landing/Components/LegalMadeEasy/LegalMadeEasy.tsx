import styles from "./LegalMadeEasy.module.css";
import LandingStyles from "../../Landing.module.css";
import { legalMadeEasyData } from "../../../../ConfigsData/legalMadeEasy";
export default function LegalMadeEasy() {
    return (
        <div className={styles["legal-made-easy-section"]}>
            <div className={`${styles["container"]}`}>
                <div className="legal-made-easy-left m-16">
                    <div className="section-heading">
                        <div
                            className={`${LandingStyles["section-header"]} text-bluePrimary`}
                            style={{
                                textAlign: "left",
                            }}
                        >
                            Legal Documentation <br />
                            Made Easy
                        </div>
                    </div>
                    <div className="mt-8">
                        <img
                            loading="lazy"
                            className="placeholder"
                            alt=""
                            width="1000"
                            height={1000}
                            // sizes="(max-width: 479px) 92vw, (max-width: 767px) 93vw, (max-width: 991px) 43vw, 518px"
                            src="/img/legal-doc.png"
                            // style="opacity: 1; transform: translate3d(0px, 0px, 0px); border-spacing: 50px;border-radius: 20px;"
                        />
                    </div>
                </div>

                <div className="legal-made-easy-right m-16">
                    <div className={styles["legal-made-easy-item-col"]}>
                        {legalMadeEasyData.map((el, index) => (
                            <>
                                {[0, 2].includes(index) && (
                                    <div
                                        className={
                                            styles["legal-made-easy-item"]
                                        }
                                        style={
                                            index === 2
                                                ? { marginTop: "4em" }
                                                : {}
                                        }
                                    >
                                        <div
                                            className={`${styles["legal-made-easy-icon"]} text-3xl`}
                                        >
                                            {/* <!-- <div className="heading-line"></div> --> */}
                                            {el.icon}
                                        </div>
                                        <div className="legal-made-easy-content">
                                            <div className="text-xl font-bold text-black leading-9 tracking-0">
                                                {el.header}
                                            </div>
                                            <span className="text-base font-normal text-black leading-6 tracking-0">
                                                {el.text}
                                            </span>
                                        </div>
                                    </div>
                                )}
                            </>
                        ))}
                    </div>

                    <div className={`${styles["legal-made-easy-item-col"]} `}>
                        {legalMadeEasyData.map((el, index) => (
                            <>
                                {[1, 3].includes(index) && (
                                    <div
                                        className={`${styles["legal-made-easy-item"]}`}
                                        style={
                                            index === 3
                                                ? { marginTop: "4em" }
                                                : {}
                                        }
                                    >
                                        <div
                                            className={`${styles["legal-made-easy-icon"]} text-3xl`}
                                        >
                                            {/* <!-- <div className="heading-line"></div> --> */}
                                            {el.icon}
                                        </div>
                                        <div className="legal-made-easy-content">
                                            <div className="text-xl font-bold text-black leading-9 tracking-0">
                                                {el.header}
                                            </div>
                                            <span className="text-base font-normal text-black leading-6 tracking-0">
                                                {el.text}
                                            </span>
                                        </div>
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
