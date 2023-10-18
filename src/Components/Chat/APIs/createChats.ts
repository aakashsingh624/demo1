import axios from "axios";

export async function createChats(
	projectId: string,
	userName: string,
	userSecret: string,
	body: any
) {
	const config = {
		headers: {
			"Project-ID": projectId,
			"User-Name": userName,
			"User-Secret": userSecret,
		},
	};

	return axios.put("https://api.chatengine.io/chats/", body, config);
}
