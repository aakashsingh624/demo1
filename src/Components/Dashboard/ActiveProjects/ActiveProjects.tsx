import React, { useState } from "react";
import { ProjectType } from "../../../Enums/projectType";
import { Select } from "antd";
import { projects } from "../../../ConfigsData/dashboard";

export default function ActiveProjects() {
    const [filter, setFilter] = useState(ProjectType.Undelivered);
    const handleChange = (value: number) => {
        setFilter(value);
    };

    const badgeColor = {
        1: "bg-red-500",
        2: "bg-yellow-500",
        3: "bg-green-500",
        4: "bg-gray-500",
    };

    const findTotal = () => {
        let total = 0;
        projects.map((el) => (total += el.price));
        return total;
    };
    return (
        <div className="">
            <div className="p-4 flex items-center justify-between border border-dashboard-border bg-white rounded-lg mb-6 shadow-md">
                <div className="text-xl font-bold text-dashboard-blue">
                    Active Orders{" "}
                    <span className="text-gray-500">
                        - {projects.length} (${findTotal()})
                    </span>
                </div>
                <div>
                    {/* <span className="text-xl font-medium">Filter :&nbsp;</span> */}
                    <Select
                        placeholder="Country"
                        defaultValue={filter}
                        style={{ width: 120 }}
                        onChange={handleChange}
                        options={[
                            {
                                value: ProjectType.Undelivered,
                                label: "Undelivered",
                            },
                            {
                                value: ProjectType.Delivered,
                                label: "Delivered",
                            },
                            {
                                value: ProjectType.Completed,
                                label: "Completed",
                            },
                            {
                                value: ProjectType.Cancelled,
                                label: "Cancelled",
                            },
                        ]}
                    />
                </div>
            </div>
            <div className="">
                {projects.map(
                    (el) =>
                        el.status === filter && (
                            <div className="border border-dashboard-border bg-white px-4 py-4 my-4 rounded-lg shadow-md">
                                <div className="grid items-center grid-cols-8">
                                    <div className="col-span-3 font-medium text-sm text-bluePrimary">
                                        <div className="flex items-center">
                                            <div className="w-14 mr-4">
                                                <img src="/img/projectTrademark.png" />
                                            </div>
                                            <div className="w-8 mr-4">
                                                <img
                                                    className="rounded-full"
                                                    src="/img/profiles/MaxVerstappen.png"
                                                />
                                            </div>
                                            <div>{el.name}</div>
                                        </div>
                                    </div>
                                    <div className="col-span-1">
                                        <div className="text-xs font-medium text-gray-500">
                                            Price
                                        </div>
                                        <div className="text-sm font-semibold text-black">
                                            {el.price}
                                        </div>
                                    </div>
                                    <div className="col-span-1">
                                        <div className="text-xs font-medium text-gray-500">
                                            Due Date
                                        </div>
                                        <div className="text-sm font-semibold text-black">
                                            {el.dueOn}
                                        </div>
                                    </div>
                                    <div className="col-span-2">
                                        {/* <div className="text-xs font-medium text-gray-500 mr-2">
                                            Status
                                        </div> */}
                                        <div
                                            className={`${
                                                badgeColor[el.status]
                                            } px-2 py-1 font-semibold text-xs rounded-full w-fit text-white`}
                                        >
                                            {ProjectType[el.status]}
                                        </div>
                                    </div>
                                    <div className="col-span-1 text-end text-sm text-gold font-semibold">
                                        View
                                    </div>
                                </div>
                            </div>
                        )
                )}
            </div>
        </div>
    );
}
