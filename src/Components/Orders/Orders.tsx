import React, { useState } from "react";
import SecondaryNavbar from "../SecondaryNavbar/SecondaryNavbar";
import { OrderViewType } from "../../Enums/OrderViewType";
import styles from "./Orders.module.css";
import OrdersNavbar from "../OrdersNavbar/OrdersNavbar";
import { ProjectType } from "../../Enums/projectType";
import { ordersDataDummy } from "../../ConfigsData/dashboard";
import { useNavigate } from "react-router-dom";
export default function Orders() {
    const navigate = useNavigate();
    const [selected, setSelected] = useState(0);

    const [view, setView] = useState(OrderViewType.attorney);
    const orderNavbarMenu = [
        { name: "All", url: "", value: 6 },
        { name: "Undelivered", url: "", value: 1 },
        { name: "Delivered", url: "", value: 0 },
        { name: "Completed", url: "", value: 5 },
        { name: "Cancelled", url: "", value: 0 },
    ];
    const handleChange = (value: number) => {
        setSelected(value);

        if (value === 0) setOrdersData(ordersDataDummy);
        else {
            const tempOrders = ordersDataDummy.filter(
                (el) => el.status === value
            );
            setOrdersData(tempOrders);
        }
        console.log("Change");
    };
    const [ordersData, setOrdersData] = useState<any>(ordersDataDummy);
    const badgeColor: any = {
        1: "bg-red-500",
        2: "bg-yellow-500",
        3: "bg-green-500",
        4: "bg-gray-500",
    };
    return (
        <div className={`bg-dashboard-bg ${styles["height"]}`}>
            <div className={styles["container"]}>
                <div
                    className={`text-4xl text-dashboard-blue ${styles["header"]}`}
                >
                    Manage Orders
                </div>
            </div>
            <OrdersNavbar
                change={handleChange}
                menu={orderNavbarMenu}
                selected={selected}
                key={"secondary-nav"}
            />
            <div className={styles["container2"]}>
                {/* <div className="pb-2 text-dashboard-blue text-xl font-bold uppercase">
                    {orderNavbarMenu[selected].name + " Orders"}
                </div> */}
                <div className="py-2">
                    <div className="grid grid-cols-10 align-middle">
                        <div className="text-dashboard-blue text-xl font-bold uppercase col-span-4">
                            {orderNavbarMenu[selected].name + " Orders"}
                        </div>
                        <div className="col-span-2 text-dashboard-blue text-base font-medium uppercase">
                            Order Date
                        </div>
                        <div className="text-dashboard-blue text-base font-medium uppercase">
                            Due on
                        </div>
                        <div className="text-dashboard-blue text-base font-medium uppercase">
                            Total
                        </div>

                        <div className="text-dashboard-blue text-base font-medium uppercase">
                            Rating
                        </div>
                        <div className="text-dashboard-blue text-base font-medium uppercase">
                            Status
                        </div>
                    </div>
                </div>
                <div className={`${styles["card-container-height"]}`}>
                    {ordersData.map((el: any) => (
                        <div className="grid grid-cols-10 text-xs py-4 items-center bg-white border border-dashboard-border">
                            <div className="col-span-4 font-medium px-4 flex items-center">
                                <div className="w-14 mr-4">
                                    <img src="/img/projectTrademark.png" />
                                </div>
                                <div
                                    className="font-semibold text-dashboard-blue text-base cursor-pointer"
                                    onClick={() => {
                                        navigate("" + el.id);
                                    }}
                                >
                                    {el.name}
                                </div>
                            </div>
                            <div className="col-span-2 font-medium">
                                {el.date}
                            </div>
                            <div>{el.dueOn}</div>

                            <div className="text-dashboard-blue font-semibold">
                                ${el.total}
                            </div>

                            <div>
                                {Array.from(
                                    { length: el.rating },
                                    (_, index) => index + 1
                                ).map((el) => (
                                    <div className="bx bxs-star text-gold"></div>
                                ))}
                            </div>
                            <div>
                                <div
                                    className={`${
                                        badgeColor[el.status]
                                    } px-2 py-1 font-semibold text-xs rounded-full w-fit text-white`}
                                >
                                    {ProjectType[el.status]}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
