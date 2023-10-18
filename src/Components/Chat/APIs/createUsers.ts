import axios from "axios";

export async function createUsers(body: any) {
    const config = {
        headers: {
            "PRIVATE-KEY": process.env.REACT_APP_PRIVATE_KEY,
        },
    };

    return axios.put("https://api.chatengine.io/users/", body, config);
}
