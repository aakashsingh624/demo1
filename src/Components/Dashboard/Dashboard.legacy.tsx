import { useState } from "react";
import Card1 from "../Cards/Card1/Card1";
import Card2 from "../Cards/Card2/Card2";
import ModalCustom from "../Modal/Modal";
import styles from "./Dashboard.module.css";
import Tables from "../Tables/Tables";
import { convertDateString } from "../../Services/DateService";
import { ChartType } from "../../Enums/chartType";
import CartesianChart from "../Chart/CartesianChart";

export default function Dashboard() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalHeader, setModalHeader] = useState("");
    const showModal = (modalHeader: string) => {
        setIsModalOpen(true);
        setModalHeader(modalHeader);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const cards = [
        {
            header: "Projects Running",
            value: 2,
            icon: "/svg/runningProject.svg",
        },
        {
            header: "Projects Completed",
            value: 3,
            icon: "/svg/completedProject.svg",
        },
        {
            header: "Projects Completed on Time",
            value: 2,
            percentageBased: 3,
            icon: "/svg/projectsDeliveredOnTime.svg",
        },
        {
            header: "Projects not started",
            value: 4,
            icon: "/svg/projectsNotStarted.svg",
        },
    ];
    const cards2 = [
        {
            header: "Current Month Earning",
            unit: "$",
            value: 420,
            icon: "/svg/runningProject.svg",
            prevMonthValue: 475,
        },
        {
            header: "Total Earning",
            unit: "$",
            value: 520,
            icon: "/svg/completedProject.svg",
        },
    ];
    const tableHeader1 = [
        {
            title: "Sl",
            dataIndex: "sl",
            key: "sl",
        },
        {
            title: "Project Name",
            dataIndex: "project",
            key: "project",
        },
        {
            title: "Expected Completion",
            dataIndex: "completedOn",
            key: "completedOn",
            render: (date: string) => convertDateString(date),
        },
    ];
    const tableHeader2 = [
        {
            title: "Sl",
            dataIndex: "sl",
            key: "sl",
        },
        {
            title: "Project Name",
            dataIndex: "project",
            key: "project",
        },
        {
            title: "Completed on",
            dataIndex: "completedOn",
            key: "completedOn",
            render: (date: string) => convertDateString(date),
        },
    ];
    const data2 = [
        {
            key: 1,
            sl: 1,
            project: "Project 1",
            completedOn: "2023-02-21T22:47:30.115Z",
        },
        {
            key: 2,
            sl: 2,
            project: "Project 2",
            completedOn: "2023-04-14T22:47:30.115Z",
        },
        {
            key: 3,
            sl: 3,
            project: "Project 3",
            completedOn: "2023-04-22T22:47:30.115Z",
        },
    ];
    const data1 = [
        {
            key: 1,
            sl: 1,
            project: "Project 1",
            completedOn: "2023-05-21T22:47:30.115Z",
        },
        {
            key: 2,
            sl: 2,
            project: "Project 2",
            completedOn: "2023-06-14T22:47:30.115Z",
        },
    ];

    const ratesData = {
        data: [96, 78, 106, 129, 144, 176, 135],
        xCategories: [
            "Patent Registration",
            "Business Registration",
            "Trademark Registration",
            "Legal Agreements",
            "Trademark Search",
            "Global Patent Search",
            "Business Licensing",
        ],
        xLabel: "Projects",
        yLabel: "Rates ($)",
    };
    const earningData = {
        data: [186, 350, 428, 316, 436, 475, 420],
        xCategories: [
            "Aug 2022",
            "Sep 2022",
            "Oct 2022",
            "Nov 2022",
            "Dec 2022",
            "Jan 2023",
            "Feb 2023",
        ],
        xLabel: "Months",
        yLabel: "Earnings Trend ($)",
    };
    const projectChartData = {
        name: "Projects",
        data: [
            { name: "Completed", y: 3 },
            { name: "Running", y: 2 },
            { name: "Not Started", y: 4 },
        ],
    };
    const renderModalInfo = () => {
        if (modalHeader === "List of Running Projects")
            return (
                <div>
                    <Tables columns={tableHeader1} data={data1} />
                </div>
            );
        else
            return (
                <div>
                    <Tables columns={tableHeader2} data={data2} />
                </div>
            );
    };
    return (
        <div className="bg-dashboard-bg">
            <ModalCustom
                modalHeader={modalHeader}
                isModalOpen={isModalOpen}
                handleCancel={handleCancel}
                handleOk={handleOk}
            >
                {renderModalInfo()}
            </ModalCustom>
            <div className={styles["container"]}>
                <div>
                    {/* <div className="flex items-center">
                    <div className="text-xl font-bold text-bluePrimary mr-4">
                        Projects
                    </div>
                    <div className="w-full h-1 bg-bluePrimary"> </div>
                </div> */}
                    <div className="grid grid-cols-2">
                        <div className="grid grid-cols-2">
                            {cards.map((el, index) => (
                                <div
                                    className={styles["card"]}
                                    // onClick={() =>
                                    //     showModal(
                                    //         index === 0
                                    //             ? "List of Running Projects"
                                    //             : "List of Completed Projects"
                                    //     )
                                    // }
                                >
                                    <Card1
                                        header={el.header}
                                        value={el.value}
                                        percentageBased={
                                            el.percentageBased ?? null
                                        }
                                        icon={el.icon}
                                        showModal={() =>
                                            showModal(
                                                index === 0
                                                    ? "List of Running Projects"
                                                    : "List of Completed Projects"
                                            )
                                        }
                                        bg={
                                            index === 0
                                                ? "bg-yellow-500"
                                                : "bg-green-500"
                                        }
                                    />
                                </div>
                            ))}
                        </div>
                        <div>
                            <CartesianChart
                                type={ChartType.pie}
                                data={projectChartData}
                                title="Project Statistics"
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-4">
                    <div className="flex items-center">
                        <div className="text-xl font-bold text-bluePrimary mr-4">
                            Project Rates
                        </div>
                        <div className="grow h-1 bg-bluePrimary"></div>
                    </div>
                    <div className="grid grid-cols-2">
                        <div className="p-4 col-span-2">
                            <CartesianChart
                                data={ratesData}
                                type={ChartType.column}
                                title=""
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-4">
                    <div className="flex items-center">
                        <div className="text-xl font-bold text-bluePrimary mr-4">
                            Earning Details
                        </div>
                        <div className="grow h-1 bg-bluePrimary"></div>
                    </div>
                    <div className="w-full">
                        {/* <div className="w-full flex items-center justify-between px-12">
                        {cards2.map((el) => (
                            <div className="">
                                <span className="text-sm font-medium text-gold flex items-center">
                                    {el.header} :&nbsp;
                                    <span className="font-bold">
                                        {el.unit}
                                        {el.value}
                                    </span>
                                    &nbsp;
                                    {el.prevMonthValue && (
                                        <span className="text-bluePrimary flex items-center">
                                            (
                                            {Math.abs(
                                                Math.round(
                                                    ((el.value -
                                                        el.prevMonthValue) *
                                                        1000) /
                                                        el.prevMonthValue
                                                ) / 10
                                            )}
                                            %&nbsp;
                                            <i
                                                className={`bx  text-xl ${
                                                    el.value -
                                                        el.prevMonthValue >
                                                    0
                                                        ? "text-green-500 bxs-up-arrow"
                                                        : "text-red-500 bxs-down-arrow"
                                                } `}
                                            ></i>
                                            &nbsp; from previous month)
                                        </span>
                                    )}
                                </span>
                            </div>
                        ))}
                    </div> */}
                        <div className="grid grid-cols-6 items-center">
                            <div className="col-span-2">
                                {cards2.map((el) => (
                                    <div className={styles["card"]}>
                                        <Card2
                                            header={el.header}
                                            unit={el.unit}
                                            value={el.value}
                                            icon={el.icon}
                                            prevMonthValue={el.prevMonthValue}
                                        />
                                    </div>
                                ))}
                            </div>

                            <div className="p-4 col-span-4">
                                <div className="text-bluePrimary text-base font-bold">
                                    Trends
                                </div>
                                <CartesianChart
                                    data={earningData}
                                    type={ChartType.line}
                                    title=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
