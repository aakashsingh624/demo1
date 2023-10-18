import React from "react";

export default function Card2(props: {
    header: string;
    unit: string;
    value: number;
    icon: string;
    prevMonthValue?: number;
}) {
    return (
        <div className="rounded-xl bg-blue-chart shadow-lg px-6 py-4 m-4">
            <div className="text-white w-full">
                <div className="text-xl font-semibold">{props.header}</div>
                <div className="grid grid-cols-6 items-end">
                    <div className="text-5xl tracking-tight font-light col-span-6">
                        <span className="text-4xl">{props.unit}&nbsp;</span>
                        {props.value}
                    </div>
                    {props.prevMonthValue && (
                        <div className="col-span-6 flex w-full items-center">
                            <div className="text-sm font-medium">
                                vs Prev. Month&nbsp;
                            </div>
                            <div className="flex items-center text-xl font-bold">
                                {Math.round(
                                    ((props.value - props.prevMonthValue) *
                                        1000) /
                                        props.prevMonthValue
                                ) / 10}
                                %&nbsp;
                                <i
                                    className={`bx  text-xl ${
                                        props.value - props.prevMonthValue > 0
                                            ? "text-green-500 bxs-up-arrow"
                                            : "text-red-500 bxs-down-arrow"
                                    } `}
                                ></i>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
