import { useEffect, useState } from "react";
import { getAllChatsForUser } from "../APIs/getAllChatsForUser";
import { getAllMessagesForChat } from "../APIs/getAllMessagesForChat";

import { useAppContext } from "../../../store";

export default function ViewAllCharts() {
    const context = useAppContext();
    const [chats, setChats] = useState("");
    async function fetchAllChats() {
        let currChat = "";
        await getAllChatsForUser(
            process.env.REACT_APP_PROJECTID || "",
            context.userName || "",
            context.userSecret || ""
        ).then(async (res: any) => {
            return await res.data.map(async (el: any) => {
                await getAllMessagesForChat(
                    process.env.REACT_APP_PROJECTID || "",
                    context.userName || "",
                    context.userSecret || "",
                    el.id
                ).then((r: any) => {
                    const admin = el.admin.username;
                    currChat +=
                        "<h1 class='text-xl font-bold'>Chat with " +
                        el.people.find(
                            (e: any) => e.person.username !== context.userName
                        ).person.username +
                        "</h1>";
                    r.data.map((e: any) => {
                        currChat +=
                            "<h3 class='text-base font-semibold'>" +
                            e.sender_username +
                            "</h3>" +
                            e.text +
                            "<br/>";
                    });
                    setChats(currChat);
                });
            });
        });
        // if (currChat) setChats(currChat);
    }
    useEffect(() => {
        if (context.userName) fetchAllChats();
    }, [context.userName]);
    return (
        <div>
            <h1 className="text-3xl font-normal">
                {" "}
                Showing chats of {context.userName}
            </h1>
            <div dangerouslySetInnerHTML={{ __html: chats }}></div>
        </div>
    );
}
