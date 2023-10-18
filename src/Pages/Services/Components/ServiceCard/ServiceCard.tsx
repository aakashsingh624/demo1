import styles from "./ServiceCard.module.css";

// export default function ServiceCard(props: {
//     details: {
//         header: string;
//         description: string;
//         services: string[];
//         fee: number;
//         imgUrl: string;
//     };
//     index: number;
// }) {
//     return (
//         <div className="mx-4 my-8 h-full">
//             {props.index % 2 == 0 && <></>}
//             {props.index % 2 === 1 && (
//                 <div
//                     className={`border rounded-xl h-full shadow-md relative bg-white ${styles["card"]} w-full`}
//                 >
//                     <div className="text-xl font-bold text-bluePrimary text-center py-4">
//                         {props.details.header}
//                     </div>
//                     <div className="h-36 w-36 bg-bluePrimary rounded-full flex items-center justify-center p-2 m-auto">
//                         <img src={props.details.imgUrl}></img>
//                     </div>
//                     <div className="text-black font-normal text-sm  px-8 py-4 ">
//                         <div className="text-center italic">
//                             {props.details.description}
//                         </div>
//                         <div className="text-bluePrimary font-bold py-4 text-center">
//                             Our services include :
//                         </div>
//                         <ul className="ml-8 font-medium ">
//                             {props.details.services &&
//                                 props.details.services.map((el) => (
//                                     <li>{el}</li>
//                                 ))}
//                         </ul>
//                     </div>
//                     <div className="w-full flex items-center justify-center text-base font-semibold">
//                         <div>Our service fee is as low as</div>
//                         <div className="ml-4 my-4 h-14 w-14 font-bold bg-gold text-white rounded-full flex items-center justify-center">
//                             ${props.details.fee}
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }
export default function ServiceCard(props: {
    details: {
        header: string;
        description: string;
        services: string[];
        fee: number;
        imgUrl: string;
    };
    index: number;
}) {
    return (
        <div className="mx-4 my-8 h-full">
            <div
                className={`border rounded-xl shadow-md relative bg-white ${styles["card"]} w-full `}
            >
                <div className={`${styles["background"]} rounded-t-xl px-4`}>
                    <div className="h-16 w-16 py-4 text-white mr-4">
                        <img
                            src={props.details.imgUrl}
                            className="w-auto h-full"
                        ></img>
                    </div>
                    <div className="text-white text-sm font-bold">
                        {props.details.header}
                    </div>
                </div>
                <div className="text-center bg-white p-4 rounded-b-xl">
                    <div className="text-sm uppercase font-semibold">
                        Starts at
                    </div>
                    <div className="text-gold flex w-full items-center justify-center">
                        <div className="text-3xl font-semibold font-sans">
                            $
                        </div>
                        &nbsp;
                        <div className="text-6xl font-semibold font-sans">
                            {props.details.fee}
                        </div>
                    </div>
                    <div className="text-sm font-medium py-4">
                        {props.details.description}
                    </div>
                    <div className="text-base">
                        <div className="text-bluePrimary font-bold py-4 text-center">
                            Our services include :
                        </div>
                        <div
                            className={`px-6 font-medium text-left text-base w-full overflow-hidden my-4 ${styles["card-height"]}`}
                        >
                            {props.details.services &&
                                props.details.services.map((el) => (
                                    <div className="py flex items-start">
                                        <div
                                            className={`bx bx-check text-green-700 text-2xl mr-2 ${styles["margin-top-check"]} `}
                                        ></div>
                                        <div className="text-base">{el}</div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
                <div className="w-full flex justify-center absolute -bottom-6">
                    <button className="bg-button-blue text-white text-base font-semibold px-8 py-2 rounded-l-full rounded-r-full">
                        GET STARTED
                    </button>
                </div>
            </div>
        </div>
    );
}
