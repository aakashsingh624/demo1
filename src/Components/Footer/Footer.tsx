import React from "react";
import styles from "./Footer.module.css";
import { footerIconsData, footerLinksData } from "../../ConfigsData/footer";
import { useLocation } from "react-router-dom";
export default function Footer() {
    const [expanded, setExpanded] = React.useState(true);
    const location = useLocation();
    React.useEffect(() => {
        if (location.pathname !== "/") {
            setExpanded(false);
        } else {
            setExpanded(true);
        }
    }, [location]);
    return (
        <div className="bg-footer-bg text-footer footer">
            <div className={styles["container"]}>
                <footer>
                    <div className={`${styles["content"]}`}>
                        <div className="top py-8 border-b border-footer flex items-center justify-between w-full`}">
                            <div className="text-3xl font-medium">
                                MTLegal Team
                            </div>

                            <div className="media-icons flex">
                                {footerIconsData.map((el) => (
                                    <a
                                        href={el.link}
                                        className={`h-10 w-10 rounded-full text-lg flex justify-center items-center ml-4`}
                                        style={{
                                            background: el.bg,
                                        }}
                                    >
                                        <i className={el.className}></i>
                                    </a>
                                ))}
                            </div>

                            {/* <div className="bottonborder"></div> */}
                        </div>

                        {expanded && (
                            <div className="link-boxes py-8 grid grid-cols-5">
                                {footerLinksData.map((el) => (
                                    <ul className="box">
                                        <li className="text-lg text-footer mb-2 font-medium">
                                            {el.name}
                                        </li>
                                        {el.links.map((link) => (
                                            <li className="text-sm text-footer font-normal ">
                                                <a
                                                    className="opacity-80"
                                                    href={link.link}
                                                >
                                                    {link.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                ))}

                                <ul className="box input-box">
                                    <li className="text-lg text-footer mb-2 font-medium">
                                        Subscribe
                                    </li>
                                    <li className="mb-2">
                                        <input
                                            className="bg-transparent border-2 border-white rounded-lg px-4 py-2 w-full font-semibold"
                                            type="text"
                                            placeholder="Enter your email"
                                        />
                                    </li>

                                    <li>
                                        <button className="bg-transparent border-2 border-white rounded-lg px-4 py-2 w-full bg-white text-bluePrimary font-semibold">
                                            Subscribe
                                        </button>
                                        {/* <input type="button" value="Subscribe" /> */}
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>

                    <div className={styles["bottom-details"]}>
                        <div className="bottom_text flex items-center justify-between text-sm pt-2">
                            <div className="copyright_text">
                                Copyright © 2022 <a href="#">MTLegal Team. </a>
                                All rights reserved
                            </div>
                            <div className="policy_terms">
                                <a href="#" className="mr-4">
                                    Privacy policy{" "}
                                </a>
                                <a href="#">Terms & condition</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}
