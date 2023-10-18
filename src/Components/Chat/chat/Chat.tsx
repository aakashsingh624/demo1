import { ChatEngine, getOrCreateChat } from "react-chat-engine";
// import ChatFeed from "../chatFeed/ChatFeed";
import { useEffect, useState } from "react";
import SearchUser from "../SearchUser/SearchUser";
import ViewAllCharts from "../ViewAllChats/ViewAllChats";
import { useAppContext } from "../../../store";
import { createUsers } from "../APIs/createUsers";

export default function ChatApp() {
    const context = useAppContext();
    useEffect(() => {
        // console.log(
        // 	"******************Before Setting Context************************"
        // );
        // console.log("UserName : ", context.userName);
        // console.log("UserSecret : ", context.userSecret);
        context.setUserName("TestUser1");
        context.setUserSecret("TestUser1");
        // console.log(
        // 	"******************After Setting Context************************"
        // );
        // console.log("UserName : ", context.userName);
        // console.log("UserSecret : ", context.userSecret);
    }, []);

    async function createNewUsers() {
        const body = {
            username: context.userName,
            first_name: "Test",
            last_name: "User3",
            secret: "123123",
            // custom_json: {},
        };
        await createUsers(body).then((res) => {
            console.log("USER CREATED", res);
        });
    }
    return (
        <div className="p-4">
            {/* <button 
				onClick={() => {
					createNewUsers();
				}}
			>
				Create Users
			</button> */}
            {context.userName && (
                <ChatEngine
                    height="70vh"
                    projectID="ccfbbf32-ac2d-43d7-b691-7eb066e7653c"
                    userName={context.userName}
                    userSecret={context.userSecret}
                    // renderChatFeed={(chatAppProps: any) => (
                    // 	<ChatFeed {...chatAppProps} />
                    // )}
                    renderNewChatForm={(creds: any) => (
                        <SearchUser creds={creds} />
                    )}
                />
            )}
            {/* <ViewAllCharts /> */}
        </div>
    );
    // return <ViewAllCharts />;
}
