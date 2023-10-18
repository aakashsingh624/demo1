import { dashboardInfo } from "../../ConfigsData/dashboard";
import styles from "./DashboardInfo.module.css";

export default function DashboardInfo() {
    return (
        <div className="bg-white px-4 rounded-lg border border-dashboard-border shadow-md">
            <div className="border-b w-full flex items-center py-8">
                <img
                    src="/img/profiles/MaxVerstappen.png"
                    className={`w-12 h-12 rounded-full mr-2 ${styles["img"]}`}
                />

                <div>
                    <div className="font-semibold text-dashboard-blue">
                        Max Verstappen
                    </div>
                    <button className="bg-orange-400 rounded-lg px-4 py-1 text-xs text-white font-semibold mt-2">
                        Preview Profile
                    </button>
                </div>
            </div>
            <div className="py-2 border-b">
                {dashboardInfo.map((el) => (
                    <div className="flex items-center justify-between text-sm py-2">
                        <div className="font-bold mr-4 text-dashboard-blue ">
                            {el.name}
                        </div>
                        <div className="font-bold text-dashboard-blue ">{`${el.prefix}${el.value}${el.postfix}`}</div>
                    </div>
                ))}
            </div>
            <div className="pt-2 pb-8">
                <div className="flex items-center justify-between text-sm">
                    <div className="font-bold text-dashboard-blue mr-4">
                        Earning this month
                    </div>
                    <div className="font-bold text-dashboard-blue">$3200</div>
                </div>
            </div>
        </div>
    );
}
