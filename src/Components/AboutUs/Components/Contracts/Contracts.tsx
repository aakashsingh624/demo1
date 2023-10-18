import React, { useState } from "react";
import { Carousel } from "antd";
import { Image } from "antd";
import { contracts } from "../../../../ConfigsData/contracts";
export default function Contracts() {
    const [visible, setVisible] = useState(false);
    const [preview, setPreview] = useState<string[]>([]);
    return (
        <div>
            <div className="grid grid-cols-4 items-center py-4">
                <div className="col-span-2">
                    <div className="text-xl font-semibold text-bluePrimary">
                        Your Trusted Team of Professionals
                    </div>
                    <div className="text-4xl font-semibold text-bluePrimary">
                        Highly Motivated Team
                    </div>
                </div>
                <div className="text-lg font-normal leading-8 col-span-2">
                    We love what we do and therefore come up with the best
                    possible solutions to help you. We have experienced the
                    legal problems first hand, and thus we understand our
                    clients better than anyone.
                </div>
            </div>
            <div className="text-2xl text-bluePrimary font-semibold pt-4">
                Some Of The Contracts We Have Worked On
            </div>
            <div className="grid grid-cols-3 mb-16">
                {contracts.map((el) => (
                    <div>
                        <Carousel swipeToSlide draggable>
                            {el.img.map((e) => (
                                <div
                                    onClick={() => {
                                        setVisible(true);
                                        setPreview(el.img);
                                    }}
                                >
                                    <img src={e} />
                                </div>
                            ))}
                        </Carousel>
                        <div className="text-sm font-semibold text-center">
                            {el.name}
                        </div>
                    </div>
                ))}
                <div style={{ display: "none" }}>
                    <Image.PreviewGroup
                        preview={{
                            visible,
                            onVisibleChange: (vis) => setVisible(vis),
                        }}
                    >
                        {preview.map((el) => (
                            <Image src={el} />
                        ))}
                    </Image.PreviewGroup>
                </div>
            </div>
        </div>
    );
}
