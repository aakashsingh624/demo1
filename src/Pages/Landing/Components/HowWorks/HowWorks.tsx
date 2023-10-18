import styles from "./HowWorks.module.css";
import LandingStyles from "../../Landing.module.css";
import { howWorksData } from "../../../../ConfigsData/howWorks";

export default function HowWorks() {
    return (
        <div className={styles["how-work-section"]}>
            <div className={`how-work ${styles["container"]}`}>
                <div className={`${styles["vertical-line"]} bg-gold`}></div>
                <div className="">
                    <div
                        className={`${LandingStyles["section-header"]} text-bluePrimary`}
                    >
                        How it works
                    </div>

                    <div className="how-work-list w-1/2 m-auto">
                        {/* <!-- work-list-1 --> */}
                        {howWorksData.map((el: any, index: number) => (
                            <div
                                className={
                                    index === 0
                                        ? "flex items-center gap-8 my-12 -ml-24"
                                        : index === 1
                                        ? "flex items-center gap-8 my-12 ml-24 -mr-24"
                                        : "flex items-center gap-8 my-12"
                                }
                            >
                                {index % 2 === 0 && (
                                    <div className="text-4xl bg-bluePrimary text-white w-36 h-36 rounded-2xl flex-shrink-0">
                                        <div className="h-full w-full flex items-center justify-center">
                                            {el.icon}
                                        </div>
                                    </div>
                                )}
                                <div className="work-list-content w-full">
                                    <h3 className="text-bluePrimary text-lg font-bold">
                                        {el.header}
                                    </h3>
                                    <span className="text-black leading-6 font-normal tracking-normal">
                                        {el.text}
                                    </span>
                                </div>
                                {index % 2 === 1 && (
                                    <div className="text-4xl bg-bluePrimary text-white w-36 h-36 rounded-2xl flex-shrink-0">
                                        <div className="h-full w-full flex items-center justify-center">
                                            {el.icon}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
