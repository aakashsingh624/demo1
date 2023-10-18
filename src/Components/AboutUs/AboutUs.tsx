import styles from "./AboutUs.module.css";
import LandingStyles from "../../Pages/Landing/Landing.module.css";
import { coreValues, testimonials } from "../../ConfigsData/aboutUs";
import TestimonialCard from "./Components/TestimonialCard/TestimonialCard";
import { Slide } from "react-slideshow-image";
import CoreValuesCard from "./Components/CoreValuesCard/CoreValuesCard";
import Contracts from "./Components/Contracts/Contracts";
// export default function AboutUs() {
//     return (
//         <div>
//             <section id="about" className={styles["about-main"]}>
//                 <div className={styles["container"]}>
//                     <div className="grid grid-cols-2 items-center text-white h-full">
//                         <div className="">
//                             <div className="text-xl tracking-wide capitalize font-medium">
//                                 Why start a new business?
//                             </div>
//                             <div className="text-4xl font-bold my-4">
//                                 If you're dreaming of starting a new business
//                                 but not sure where to begin, the online legal
//                                 team at MTLegal Team is here to help.
//                             </div>
//                             <div>
//                                 Many people have a simple dream of starting a
//                                 business. Most never make it because they don't
//                                 know where to begin or what legal form is best
//                                 for them and their business. Many times, even
//                                 when you do have the best plan for your
//                                 business, it can get derailed due to a lack of
//                                 understanding in how the legal system works and
//                                 what options are available to the entrepreneur.
//                             </div>
//                         </div>
//                         <div className={styles["img-main"]}>
//                             {/* <img src="/img/aboutUs.jpg" /> */}
//                         </div>
//                     </div>
//                 </div>
//             </section>
//             <section>
//                 <div className={styles["container"]}>
//                     <div className="grid grid-cols-2 items-center">
//                         <div>
//                             <img src="/img/aboutUs2.png" />
//                         </div>
//                         <div className="text-4xl font-bold my-32 ml-8 text-bluePrimary text-right">
//                             MTLegal Team was created by attorneys with
//                             experience in business law, intellectual property
//                             law and business startup experience to provide our
//                             clients with legal services that will help them
//                             start a new business with ease while avoiding any
//                             potential pitfalls.
//                         </div>
//                     </div>
//                 </div>
//             </section>
//             <section>
//                 <div className="bg-gold py-12">
//                     <div className={styles["container"]}>
//                         <div
//                             className={`${LandingStyles["section-header"]} text-bluePrimary `}
//                         >
//                             Our Core Values
//                         </div>
//                         <div className="w-1/2 mx-auto pt-4">
//                             {coreValues.map((el, index) => (
//                                 <div className="flex items-center justify-between pb-4">
//                                     {index % 2 >= 0 && (
//                                         <div
//                                             className={` ${styles["clip-number"]} border-4 border-double border-bluePrimary h-12 w-24 flex items-center justify-center bg-bluePrimary text-white font-semibold`}
//                                         >
//                                             {index + 1}
//                                         </div>
//                                     )}
//                                     <div
//                                         className="text-xl font-semibold text-blueP
//                                     "
//                                     >
//                                         {el}
//                                     </div>
//                                     {/* {index % 2 === 1 && (
//                                         <div className="border-4 border-double border-bluePrimary rounded-full h-12 w-12 flex items-center justify-center ml-4 bg-bluePrimary text-white">
//                                             {index + 1}
//                                         </div>
//                                     )} */}
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </section>
//             <section>
//                 <div className="py-12">
//                     <div className={styles["container"]}>
//                         <div className="grid grid-cols-4 items-center">
//                             <div>
//                                 <div
//                                     className={`${LandingStyles["section-header"]} text-bluePrimary `}
//                                 >
//                                     Testimonials
//                                 </div>
//                             </div>
//                             <div className="col-span-3 px-8">
//                                 <div>
//                                     <div className="border-b pb-4">
//                                         <div className="text-2xl text-bluePrimary font-semibold tracking-wide">
//                                             Our Clients Love What We do
//                                         </div>
//                                         <div className="text-base tracking-tight">
//                                             We have a large clientele spaning
//                                             across several countries and major
//                                             cites in the world.
//                                         </div>
//                                     </div>
//                                     <div className="flex items-center justify-between pt-4">
//                                         <div className="flex items-center bg-bluePrimary text-white rounded-md px-8 py-4">
//                                             <div className="bx bx-comment-detail text-xl pr-4"></div>
//                                             <div>Read all our views here</div>
//                                             <div className="bx bx-right-arrow-alt text-xl pl-4"></div>
//                                         </div>
//                                         <div className="bg-bluePrimary rounded-md px-8 py-4">
//                                             <div className="flex items-center justify-between text-xl pb-2 text-gold">
//                                                 <i className="bx bxs-star"></i>
//                                                 <i className="bx bxs-star"></i>
//                                                 <i className="bx bxs-star"></i>
//                                                 <i className="bx bxs-star"></i>
//                                                 <i className="bx bxs-star"></i>
//                                             </div>
//                                             <div className="text-white txet-sm">
//                                                 5 Star Rated
//                                             </div>
//                                         </div>
//                                         <div className="bg-bluePrimary rounded-md px-8 py-4">
//                                             <div className="text-gold text-xl font-semibold">
//                                                 Over 250
//                                             </div>
//                                             <div className="text-white text-sm">
//                                                 Projects Completed
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 {/* <div>
//                                     {testimonials.map((el) => (
//                                         <TestimonialCard
//                                             imageUrl={el.imageUrl}
//                                             name={el.name}
//                                             comments={el.comments}
//                                         />
//                                     ))}
//                                 </div> */}
//                                 <div className="py-4">
//                                     <div className="text-lg text-bluePrimary font-semibold pb">
//                                         Top client reviews
//                                     </div>
//                                     <Slide>
//                                         {testimonials.map((el, index) => (
//                                             <div key={index}>
//                                                 <TestimonialCard
//                                                     imageUrl={el.imageUrl}
//                                                     name={el.name}
//                                                     comments={el.comments}
//                                                 />
//                                             </div>
//                                         ))}
//                                     </Slide>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// }

export default function AboutUs() {
    return (
        <div>
            <section>
                <div className={`${styles["container"]}`}>
                    <div className="grid items-center grid-cols-2">
                        <div className={styles["image"]}>
                            <img
                                src="/svg/aboutUs.svg"
                                className="w-auto h-full"
                            ></img>
                        </div>
                        <div className=" h-full px-12 py-8 relative ">
                            <div
                                className={` ${styles["splash"]} absolute top-0 -right-36`}
                            >
                                <img
                                    src="/img/splash1.png"
                                    className="w-full h-auto"
                                ></img>
                            </div>
                            <div className="text-xl font-semibold text-black">
                                Why start a new business? If you're dreaming of
                                starting a new business but not sure where to
                                begin, the online legal team at MTLegal Team is
                                here to help.
                            </div>
                            <div className="text-xl font-normal text-black py-4">
                                Many people have a simple dream of starting a
                                business. Most never make it because they don't
                                know where to begin or what legal form is best
                                for them and their business. Many times, even
                                when you do have the best plan for your
                                business, it can get derailed due to a lack of
                                understanding in how the legal system works and
                                what options are available to the entrepreneur.
                                <br />
                                <br />
                                This is why MTLegal Team was created by
                                attorneys with experience in business law,
                                intellectual property law and business startup
                                experience to provide our clients with legal
                                services that will help them start a new
                                business with ease while avoiding any potential
                                pitfalls.
                            </div>
                            {/* <div
                            className={`${LandingStyles["section-header"]} py-4 ${styles["left"]}`}
                        >
                            Our Core Values
                        </div>
                        <div className="px-6">
                            <ul>
                                {coreValues.map((el) => (
                                    <li className="text-xl font-normal text-black">
                                        {el}
                                    </li>
                                ))}
                            </ul>
                        </div> */}
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className={`${styles["container"]} relative`}>
                    <div
                        className={` ${styles["splash2"]} absolute top-0 -left-36`}
                    >
                        <img
                            src="/img/splash3.png"
                            className="w-full h-full"
                        ></img>
                    </div>
                    <div className={`${styles["vertical-line"]} bg-gold`}></div>
                    <div
                        className={`${LandingStyles["section-header"]} text-bluePrimary`}
                    >
                        Our Core Values
                    </div>
                    <div className="w-2/3 grid grid-cols-2 m-auto py-8">
                        {/* <ul>
                            {coreValues.map((el) => (
                                <li className="text-xl font-normal text-black">
                                    {el}
                                </li>
                            ))}
                        </ul> */}
                        {coreValues.map((el, index) => (
                            <>
                                {index % 2 === 1 && <div></div>}
                                <CoreValuesCard value={el} />
                                {index % 2 === 0 && <div></div>}
                            </>
                        ))}
                    </div>
                </div>
            </section>
            <section className="relative">
                <div className={`${styles["vertical-line"]} bg-gold`}></div>
                <div
                    className={`${LandingStyles["section-header"]} text-bluePrimary`}
                >
                    Testimonials
                </div>
                <div
                    className={`absolute w-1/3 h-5/6 right-0 bg-blue-bg -z-10 ${styles["rounded"]}`}
                ></div>
                <div className={`${styles["container"]}`}>
                    <div className="grid grid-cols-8 items-center py-16">
                        <div className="pr-24 col-span-3">
                            <div
                                className={`text-4xl text-bluePrimary font-semibold ${styles["customHeader"]}`}
                            >
                                Our Clients Love What We do
                            </div>
                            <div className="text-lg font-normal py-4 leading-8">
                                We have a large clientele spaning across several
                                countries and major cites in the world.
                            </div>
                            <div className="pt-4">
                                <div
                                    className="flex items-center bg-button-blue text-white rounded-md px-8 py-4 cursor-pointer"
                                    onClick={() => {
                                        window.open(
                                            "https://www.fiverr.com/mtlegalteam",
                                            "_blank"
                                        );
                                    }}
                                >
                                    <div className="bx bx-comment-detail text-xl pr-4 font-semibold"></div>
                                    <div>Read all our reviews here</div>
                                    <div className="bx bx-right-arrow-alt text-xl pl-4"></div>
                                </div>
                                <div className="bg-bluePrimary rounded-md px-8 py-4 my-16">
                                    <div className="flex items-center justify-between text-xl pb-2 text-gold w-2/3 m-auto">
                                        <i className="bx bxs-star"></i>
                                        <i className="bx bxs-star"></i>
                                        <i className="bx bxs-star"></i>
                                        <i className="bx bxs-star"></i>
                                        <i className="bx bxs-star"></i>
                                    </div>
                                    <div className="text-white text-sm text-center font-semibold">
                                        5 Star Rated
                                    </div>
                                </div>
                                <div className="bg-bluePrimary rounded-md px-8 py-4 ">
                                    <div className="text-gold text-xl text-center font-semibold">
                                        Over 250
                                    </div>
                                    <div className="text-white text-sm text-center font-semibold">
                                        Projects Completed
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-span-5 pl-16">
                            {testimonials.map((el, index) => (
                                <div key={index} className="my-8">
                                    <TestimonialCard
                                        imageUrl={el.imageUrl}
                                        name={el.name}
                                        comments={el.comments}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section className="relative">
                <div className={`${styles["vertical-line"]} bg-gold`}></div>
                <div
                    className={`${LandingStyles["section-header"]} text-bluePrimary`}
                >
                    Contracts
                </div>
                <div className={styles["container"]}>
                    <Contracts />
                </div>
                <div
                    className={` ${styles["splash3"]} absolute top-12 left-0 -z-10`}
                >
                    <img src="/img/bgs/g6.png" className="w-full h-full"></img>
                </div>
            </section>
        </div>
    );
}
