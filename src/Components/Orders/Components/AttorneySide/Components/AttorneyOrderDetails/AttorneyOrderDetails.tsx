import { orderDetails } from "../../../../../../ConfigsData/orders";
import styles from "./AttorneyOrderDetails.module.css";

export default function AttorneyOrderDetails() {
    return (
        <div className="bg-white px-4 rounded-lg border border-dashboard-border shadow-md">
            <div className="font-bold text-dashboard-blue py-8">
                Order Details
            </div>
            <div className="w-full flex items-center pb-4">
                <img
                    src="/img/projectTrademark.png"
                    className={`w-12 mr-2 ${styles["img"]}`}
                />

                <div className="text-sm font-semibold text-dashboard-blue">
                    Provide Trademark Registration
                </div>
            </div>
            <div className="py-2 border-b">
                {orderDetails.map((el) => (
                    <div className="flex items-center justify-between text-sm py-2">
                        <div className="font-medium mr-4 text-dashboard-blue ">
                            {el.name}
                        </div>
                        <div className="font-bold text-dashboard-blue ">{`${el.prefix}${el.value}${el.postfix}`}</div>
                    </div>
                ))}
            </div>
            <button className="bg-orange-400 text-sm font-semibold text-white px-4 py-2 rounded-lg mb-8 mt-4 w-full">
                Deliver Now
            </button>
        </div>
    );
}
