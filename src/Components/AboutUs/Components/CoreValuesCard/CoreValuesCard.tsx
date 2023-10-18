import React from "react";

export default function CoreValuesCard(props: { value: string }) {
    return (
        <div className="relative m-4 shadow-md border rounded-lg shadow-gold border-gold bg-white">
            <div>
                <i className="bx bxs-message-check absolute -top-3 -left-3 text-xl"></i>
            </div>
            <div className="text-lg font-normal px-8 py-4 h-full">
                {props.value}
            </div>
        </div>
    );
}
