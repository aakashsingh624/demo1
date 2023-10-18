import axios from "axios";

export async function getAllMessagesForChat(
	projectId: string,
	userName: string,
	userSecret: string,
	chatId: string
) {
	const config = {
		headers: {
			"Project-ID": projectId,
			"User-Name": userName,
			"User-Secret": userSecret,
		},
	};

	return axios.get(
		`https://api.chatengine.io/chats/${chatId}/messages/`,
		config
	);
}
