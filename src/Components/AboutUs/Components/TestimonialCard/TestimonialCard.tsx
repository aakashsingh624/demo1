import React from "react";

export default function TestimonialCard(props: {
    imageUrl: string;
    name: string;
    comments: string;
}) {
    return (
        <div className="w-full relative shadow-md border p-4 rounded-2xl bg-white">
            <div className="w-6 h-6 absolute -left-3 -top-3">
                <img src="/img/quote.png"></img>
            </div>
            <div className="px-4 py-2 w-full">
                <div className="grid grid-cols-12 items-center">
                    <div className="col-span-9">
                        <div className="text-sm font-medium italic tracking-tight text-gold py-4">
                            {props.comments}
                        </div>
                        <div className="text-lg font-semibold text-bluePrimary">
                            - {props.name}
                        </div>
                    </div>
                    <div className="col-span-3 pl-8">
                        <img src={props.imageUrl}></img>
                    </div>
                </div>
            </div>
        </div>
    );
}
