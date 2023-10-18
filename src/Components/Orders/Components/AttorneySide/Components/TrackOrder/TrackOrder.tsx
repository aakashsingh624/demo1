import { trackOrder } from "../../../../../../ConfigsData/orders";

export default function TrackOrder() {
    return (
        <div className="bg-white px-4 rounded-lg border border-dashboard-border shadow-md mt-4 py-8">
            <div className="font-bold text-dashboard-blue pb-4">
                Track Order
            </div>
            <div>
                {trackOrder.map((el) => (
                    <div
                        className={`flex items-center py-2 text-base text-dashboard-blue ${
                            el.status === "Completed"
                                ? "font-semibold"
                                : "font-normal"
                        }`}
                    >
                        <div className="flex items-center w-full justify-start">
                            {el.status === "Completed" ? (
                                <div className="bx bxs-check-circle mr-2"></div>
                            ) : (
                                <div className="bx bx-radio-circle mr-2"></div>
                            )}
                            <div>{el.stage}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
