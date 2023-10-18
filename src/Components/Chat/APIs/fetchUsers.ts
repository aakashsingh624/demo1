import axios from "axios";

export async function fetchUsers() {
	const config = {
		headers: {
			"PRIVATE-KEY": process.env.REACT_APP_PRIVATE_KEY,
		},
	};

	return axios.get("https://api.chatengine.io/users/", config);
}
