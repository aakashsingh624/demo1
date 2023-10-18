import React from "react";
import styles from "./Accordion.module.css";

export default function Accordion(props: { header: string; body: string }) {
    const [expanded, setExpanded] = React.useState(false);
    React.useEffect(() => {
        window.addEventListener("click", function (e) {
            //@ts-ignore
            if (
                document.getElementById(props.header) &&
                //@ts-ignore
                document.getElementById(props.header).contains(e.target)
            ) {
            } else {
                // setExpanded(false);
            }
        });
    }, []);
    return (
        <div className="relative w-full" id={props.header}>
            <div
                className={
                    expanded
                        ? `border-2 rounded-xl px-6 py-4 cursor-pointer relative bg-bluePrimary text-white z-10 w-full`
                        : `border-2 rounded-xl px-6 py-4 cursor-pointer relative bg-white text-bluePrimary w-full z-0`
                }
                onClick={() => setExpanded(!expanded)}
            >
                <div className="flex items-center justify-between ">
                    <div className="text-base font-semibold">
                        {props.header}
                    </div>
                    <div>
                        {!expanded && (
                            <i className="bx bx-plus text-bluePrimary text-xl"></i>
                        )}
                        {expanded && (
                            <i className="bx bx-minus text-white text-xl"></i>
                        )}
                    </div>
                </div>

                <div
                    className={
                        expanded
                            ? `max-h-96 overflow-hidden ${styles["accordion-height"]} opacity-100`
                            : `max-h-0 overflow-hidden ${styles["accordion-height"]} opacity-0`
                    }
                >
                    <div className="font-normal py-4">{props.body}</div>
                    {/* {!expanded && <div className="h-0">{""}</div>} */}
                </div>
            </div>
        </div>
    );
}
