import React, { useEffect, useState } from "react";
import { useAppContext } from "../../../store";
import { getAllChatsForUser } from "../APIs/getAllChatsForUser";
import styles from "./Inbox.module.css";
import { useNavigate } from "react-router-dom";
export default function Inbox() {
    const context = useAppContext();
    const navigate = useNavigate();
    const userId = context.loggedInUserId;
    const [loading, setLoading] = useState(true);
    const [messages, setMessages] = useState<
        { name: string; avatar: string | null; online: boolean; lastText: "" }[]
    >([]);
    async function getChats() {
        await getAllChatsForUser(
            process.env.REACT_APP_PROJECTID || "",
            context.userName || "",
            context.userSecret || ""
        ).then((res) => {
            const temp: any = [];
            //@ts-ignore
            res.data.map((el) =>
                temp.push({
                    name: el.people[0].person.first_name
                        ? el.people[0].person.first_name +
                          el.people[0].person.last_name
                        : el.people[0].person.username,
                    avatar: null,
                    online: el.people[0].person.is_online,
                    lastText: el.last_message.text,
                })
            );
            setMessages(temp);
            setLoading(false);
        });
    }
    const randomHexGenerator = () => {
        return (
            "#" +
            ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0")
        );
    };
    const navigateToChats = () => {
        navigate("/chat/" + userId);
    };
    useEffect(() => {
        getChats();
    }, []);
    return (
        <div className={styles["height"] + " bg-white"}>
            <div className="">
                <div className="w-full flex items-center justify-between border-b px-4 py-4">
                    <div className="text-base font-medium text-bluePrimary ">
                        Inbox
                    </div>
                    <a
                        className="text-xs cursor-pointer"
                        onClick={navigateToChats}
                    >
                        View chats
                    </a>
                </div>
                {loading ? (
                    <div className="w-full h-32 m-auto py-24 text-center text-sm">
                        Loading chats...
                    </div>
                ) : (
                    <>
                        {messages.length > 0 ? (
                            <div className="p-4 border-b">
                                {messages.map((el) => (
                                    <div className="flex items-center">
                                        <div>
                                            <div
                                                style={{
                                                    background:
                                                        randomHexGenerator(),
                                                }}
                                                className="relative h-10 w-10 rounded-full flex items-center justify-center text-white font-semibold text-sm"
                                            >
                                                {el.name[0] +
                                                    (el.name.split(" ").length >
                                                    1
                                                        ? el.name.split(
                                                              " "
                                                          )[1][0]
                                                        : el.name.length > 1
                                                        ? el.name[1]
                                                        : "")}
                                                <div
                                                    className={`absolute w-3 h-3 rounded-full border ${
                                                        el.online
                                                            ? "bg-green-500"
                                                            : "bg-gray-400"
                                                    } right-0 bottom-0`}
                                                ></div>
                                            </div>
                                        </div>

                                        <div className="ml-4 flex h-full items-center">
                                            <div>
                                                <div className="font-semibold text-sm">
                                                    {el.name}
                                                </div>
                                                <div
                                                    className={
                                                        styles["innerText"] +
                                                        " font-normal text-xs italic text-ellipsis"
                                                    }
                                                    dangerouslySetInnerHTML={{
                                                        __html: el.lastText,
                                                    }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div>No ongoing conversations.</div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}
