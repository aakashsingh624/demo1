import styles from "./Card1.module.css";
export default function Card1(props: {
    header: string;
    value: number;
    icon: string;
    showModal: any;
    bg: string;
    percentageBased: number | null;
}) {
    // return (
    //     <div className="rounded-xl bg-blue-bg shadow-lg px-6 py-4 m-4">
    //         <div className="flex items-center justify-between">
    //             <div className="text-bluePrimary w-12 h-12">
    //                 <img src={props.icon} className="w-full h-auto"></img>
    //             </div>
    //             <div className="text-bluePrimary">
    //                 <div className="text-xl font-semibold ">{props.header}</div>
    //                 <div className="text-5xl tracking-tight font-light text-right">
    //                     {props.value}
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // );
    // return (
    //     <div
    //         className={`rounded-xl ${props.bg} text-white shadow-lg px-6 py-4 m-4`}
    //     >
    //         <div className="flex items-center">
    //             <div className="w-8 h-8 mr-4">
    //                 <img src={props.icon} className="w-full h-auto"></img>
    //             </div>
    //             <div className="text-xl font-semibold">{props.header}</div>
    //         </div>
    //         <div className="">
    //             <div className="text-6xl tracking-tight font-medium text-right py-4">
    //                 {props.value}
    //             </div>
    //         </div>
    //         <div className="text-sm font-medium italic w-full flex items-center justify-end">
    //             <div
    //                 className="cursor-pointer text-bluePrimary hover:text-white"
    //                 onClick={() => props.showModal()}
    //             >
    //                 View Projects
    //             </div>
    //         </div>
    //     </div>
    // );

    return (
        <div className={styles["cardBg"]}>
            <div className=" px-4 py-8 pb-0">
                <div className="flex items-center justify-between">
                    {/* <div className="w-8 h-8 mr-4">
                        <img src={props.icon} className="w-full h-auto"></img>
                    </div> */}
                    <div className="text-sm font-semibold text-white text-end">
                        {props.header}
                    </div>
                </div>
                <div className="flex justify-start">
                    <div className="text-4xl font-semibold text-white">
                        {props.value}
                        {props.percentageBased !== null && (
                            <span className="text-base font-medium">
                                &nbsp;(
                                {Math.round(
                                    (props.value * 10000) /
                                        props.percentageBased
                                ) / 100}
                                %)
                            </span>
                        )}
                    </div>
                </div>
            </div>
            <div className="w-full">
                <img src="/svg/dashboardCard.svg" className="h-16 w-auto" />
            </div>
        </div>
    );
}
