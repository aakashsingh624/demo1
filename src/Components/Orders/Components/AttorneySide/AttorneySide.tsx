import TextArea from "antd/es/input/TextArea";
import {
    OrderEvents,
    OrderEventsText,
    OrderImages,
} from "../../../../Enums/orderEvents";
import styles from "./AttorneySide.module.css";
import AttorneyOrderDetails from "./Components/AttorneyOrderDetails/AttorneyOrderDetails";
import TrackOrder from "./Components/TrackOrder/TrackOrder";

export default function AttorneySide() {
    const orderEvents = [
        {
            id: 1,
            event: OrderEvents.placed,
            attorney: "Attorney 1",
            client: "Client 1",
            date: "21 Jun 2023",
            time: "10:36 PM",
        },
        {
            id: 2,
            event: OrderEvents.submittedRequirements,
            attorney: "Attorney 1",
            client: "Client 1",
            date: "22 Jun 2023",
            time: "12:10 PM",
        },
        {
            id: 3,
            event: OrderEvents.started,
            attorney: "Attorney 1",
            client: "Client 1",
            date: "22 Jun 2023",
            time: "4:30 PM",
        },
        {
            id: 4,
            event: OrderEvents.dateUpdated,
            attorney: "Attorney 1",
            client: "Client 1",
            date: "23 Jun 2023",
            time: "10:00 PM",
        },
        {
            id: 5,
            event: OrderEvents.delivered,
            attorney: "Attorney 1",
            client: "Client 1",
            date: "25 Jun 2023",
            time: "10:00 PM",
        },
    ];
    const returnEventName = (event: {
        id: number;
        event: OrderEvents;
        attorney: string;
        client: string;
        date: string;
        time: string;
    }) => {
        switch (event.event) {
            case OrderEvents.placed:
                return event.client + OrderEventsText.placed;

            case OrderEvents.submittedRequirements:
                return event.client + OrderEventsText.submittedRequirements;
            case OrderEvents.started:
                return OrderEventsText.started;
            case OrderEvents.dateUpdated:
                return OrderEventsText.dateUpdated;
            case OrderEvents.delivered:
                return event.attorney + OrderEventsText.delivered;
            case OrderEvents.requestedRevision:
                return event.client + OrderEventsText.requestedRevision;
        }
    };
    return (
        <div className="bg-dashboard-bg h-full">
            <div className={`${styles["container"]} `}>
                <div className="grid grid-cols-4">
                    <div className="bg-white mr-2 border border-dashboard-border shadow-md rounded-lg py-4 px-8 col-span-3">
                        {orderEvents.map((el) => (
                            <div className="flex items-center justify-between py-6 border-b">
                                <div className="flex items-center">
                                    <div className="h-10 mr-4">
                                        <img src={OrderImages[el.event]} />
                                    </div>
                                    <div className="font-semibold text-lg text-dashboard-blue">
                                        {returnEventName(el)}
                                    </div>
                                </div>
                                <div className="text-xs text-dashboard-blue">
                                    {el.date}, {el.time}
                                </div>
                            </div>
                        ))}
                        <div className="py-4">
                            <div className="text-sm font-semibold text-dashboard-blue">
                                Have something to share with Client 1?
                            </div>
                            <div>
                                <div className="py-2">Message :</div>
                                <TextArea className="py-2 text-xl bg-form-field-bg"></TextArea>
                            </div>
                            <button className="bg-orange-400 text-white font-semibold text-sm px-4 py-2 rounded-lg mt-4">
                                Send
                            </button>
                        </div>
                    </div>
                    <div className="ml-2">
                        <div>
                            <AttorneyOrderDetails />
                        </div>
                        <div>
                            <TrackOrder />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
