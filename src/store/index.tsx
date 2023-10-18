import React, { createContext, useContext, useState } from "react";

const AppContext = createContext({
    userName: "",
    setUserName: (name: string) => {},
    userSecret: "",
    setUserSecret: (secret: string) => {},
    loggedInUserId: "",
    setLoggedInUserId: (userId: string) => {},
});

export function ContextProvider(props: { children: React.ReactNode }) {
    const [userName, setUserName] = useState<string>("");
    const [userSecret, setUserSecret] = useState<string>("");
    const [loggedInUserId, setLoggedInUserId] = useState<string>("");

    return (
        <AppContext.Provider
            value={{
                userName,
                setUserName,
                userSecret,
                setUserSecret,
                loggedInUserId,
                setLoggedInUserId,
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}
