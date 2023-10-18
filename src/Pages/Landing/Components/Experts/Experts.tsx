import styles from "./Experts.module.css";
import LandingStyles from "../../Landing.module.css";
import ExpertCard from "../../../../Components/ExpertCard/ExpertCard";
import React from "react";
import { expertsData } from "../../../../ConfigsData/experts";
import { Select } from "antd";
import { useNavigate } from "react-router-dom";
export default function Experts() {
    const [filteredExperts, setFilteredExperts] = React.useState([
        expertsData[0],
        expertsData[1],
        expertsData[2],
    ]);
    const handleChange = (value: number) => {
        console.log("Value selected", value);
    };
    const navigate = useNavigate();
    return (
        <div className={`${styles["container"]}`}>
            <div className={`${styles["vertical-line"]} bg-gold`}></div>
            <div
                className={`${LandingStyles["section-header"]} text-bluePrimary`}
            >
                Our Top Experts
            </div>
            <div className="texperts-filters">
                <div
                    className="texperts-country-filter"
                    style={{
                        textAlign: "center",
                        paddingTop: "20px",

                        margin: "auto",
                    }}
                >
                    <span className="text-md font-medium">Country :&nbsp;</span>
                    <Select
                        placeholder="Country"
                        defaultValue={1}
                        style={{ width: 240 }}
                        onChange={handleChange}
                        options={[
                            { value: 1, label: "United States" },
                            { value: 2, label: "Canada" },
                            { value: 3, label: "England" },
                        ]}
                    />
                </div>
            </div>

            <div className={styles["texperts-cards"]}>
                {filteredExperts.map((el) => (
                    <ExpertCard details={el} />
                ))}
            </div>
            <div className="py-8">
                <div className="text-center text-xl font-semibold text-black">
                    Connect with one of our attorneys and put our expertise to
                    work for you.
                </div>
                <div className="w-fit m-auto my-2">
                    <button
                        className="border border-gold rounded-md text-bluePrimary bg-white hover:bg-gold hover:text-white px-8 py-2 font-semibold "
                        onClick={() => navigate("/register")}
                    >
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
}
