import axios from "axios";

export async function getAllChatsForUser(
	projectId: string,
	userName: string,
	userSecret: string
) {
	const config = {
		headers: {
			"Project-ID": projectId,
			"User-Name": userName,
			"User-Secret": userSecret,
		},
	};

	return axios.get("https://api.chatengine.io/chats/", config);
}
