import { useEffect, useState } from "react";
import { getOrCreateChat } from "react-chat-engine";
import { fetchUsers } from "../APIs/fetchUsers";
import { Select } from "antd";
import { createChats } from "../APIs/createChats";
import { useAppContext } from "../../../store";
export default function SearchUser(props: any) {
    const context = useAppContext();
    const [username, setUsername] = useState("");
    const [fetchedUsers, setFetchedUsers] = useState<any>(null);
    function createDirectChat(creds: any) {
        // getOrCreateChat(
        // 	creds,
        // 	{ is_direct_chat: true, usernames: [username] },
        // 	() => setUsername("")
        // );
        createNewChats();
    }

    async function createNewChats() {
        const target = fetchedUsers.find((el: any) => el.userName === username);
        const body = {
            usernames: [username],
            title: target.name,
            is_direct_chat: true,
        };
        await createChats(
            process.env.REACT_APP_PROJECTID || "",
            context.userName || "",
            context.userSecret || "",
            body
        ).then((res) => {
            setUsername("");
            console.log("CONSOLING", res);
        });
    }
    async function fetchUsersInitial() {
        const users: any = [];
        await fetchUsers().then((res) => {
            res.data.map((el: any) =>
                users.push({
                    userName: el.username,
                    name: el.first_name
                        ? el.first_name + " " + el.last_name
                        : el.username,
                })
            );
            setFetchedUsers(users);
        });
    }

    useEffect(() => {
        fetchUsersInitial();
    }, []);
    return (
        <div>
            <div className="w-full text-center text-2xl font-semibold">
                My Chats
            </div>
            <div className="grid grid-cols-4 my-4 mx-4 items-center">
                <Select
                    className="col-span-3 text-2xl mr-4"
                    showSearch
                    value={username}
                    placeholder="Search User"
                    defaultActiveFirstOption={false}
                    showArrow={false}
                    filterOption={false}
                    // onSearch={handleSearch}
                    onChange={(value) => {
                        setUsername(value);
                    }}
                    notFoundContent={null}
                    options={(fetchedUsers || []).map((d: any) => ({
                        value: d.userName,
                        label: d.name,
                    }))}
                />
                <button
                    className="w-full bg-blue-500 text-white text-sm px-2 py rounded-md leading-8"
                    onClick={() => {
                        createDirectChat(props.creds);
                    }}
                >
                    Create
                </button>
            </div>
        </div>
    );
}
