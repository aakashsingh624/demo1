import { useNavigate } from "react-router-dom";
import { IExpertsData } from "../../ConfigsData/experts";
import { CountryEnum, CountryFlag } from "../../Enums/country";
import { LaywerTypeEnum } from "../../Enums/lawyerType";
import styles from "./ExpertCard.module.css";
import { useAppContext } from "../../store";
export default function ExpertCard(props: { details: IExpertsData }) {
    console.log(props);
    const navigate = useNavigate();
    const context = useAppContext();
    const onContactMe = () => {
        navigate("/chat/" + props.details.userId);
        // navigate("www.google.com");
    };
    const register = () => {
        navigate("/register");
    };
    return (
        <div className={styles["texperts-card"]}>
            <div className={styles["texperts-card1"]}>
                <div>
                    <img
                        src={props.details.imageUrl}
                        width={150}
                        height={150}
                        className="m-auto"
                    />
                </div>

                <div className="name-profession py-4">
                    {/* <p>{props.lawyer1}</p> */}
                    <div className="text-xl font-bold text-center text-black">
                        {props.details && props.details.name
                            ? props.details.name
                            : ""}
                    </div>
                    <div className="text-sm font-normal text-center text-black py-2">
                        {props.details && props.details.type
                            ? LaywerTypeEnum[props.details.type]
                            : ""}
                    </div>
                    <div className="text-gold flex items-center justify-center w-full font-medium">
                        <i className="bx bx-briefcase text-xl mr-2"></i>
                        {props.details && props.details.numberOfProjects
                            ? props.details.numberOfProjects
                            : 0}{" "}
                        completed projects.
                    </div>
                </div>
                <div className="texperts-country-details  flex items-center justify-center">
                    <div className="h-6">
                        <img
                            src={CountryFlag[props.details.country]}
                            width={1}
                            height={1}
                            style={{ height: "100%", width: "auto" }}
                        />
                    </div>

                    <div className="ml-2 text-lg font-semibold text-center leading-5 text-medium">
                        {props.details && props.details.country
                            ? CountryEnum[props.details.country]
                            : ""}
                    </div>
                </div>
            </div>
            <div className="py-6">
                <div className="flex items-center justify-center">
                    <div className="h-6">
                        <img
                            src="/svg/star.svg"
                            width={1}
                            height={1}
                            style={{ height: "100%", width: "auto" }}
                        />
                    </div>
                    <div className="ml-2 text-xl font-semibold text-center leading-5 text-black">{`${props.details.rating} (${props.details.numberOfRatings})`}</div>
                </div>
                <div className="flex items-center justify-center gap-2 px-4 py-2">
                    {props.details.speciality.map((el) => (
                        <div
                            className={`${styles["speciality-card"]} px-4 py-2 text-base font-medium rounded-md max-w`}
                        >
                            {el}
                        </div>
                    ))}
                </div>
                <div className={styles["flip-card"]}>
                    <div className={styles["flip-card-inner"]}>
                        <div className={styles["flip-card-front"]}>
                            <div className="text-xl font-bold text-center text-black py-2 cursor-pointer">{`Starting at $${props.details.startingPrice}`}</div>
                        </div>
                        <div className={styles["flip-card-back"]}>
                            <div className="text-xl font-medium text-bluePrimary py-2 w-full flex items-center justify-center">
                                {context.loggedInUserId !== "" ? (
                                    <div
                                        className=" cursor-pointer"
                                        onClick={onContactMe}
                                    >
                                        Contact me{" "}
                                        <i className="bx bx-right-arrow-alt text-xl"></i>
                                    </div>
                                ) : (
                                    <div
                                        className=" cursor-pointer"
                                        onClick={register}
                                    >
                                        Register
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
