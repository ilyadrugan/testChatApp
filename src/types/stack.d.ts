import { Chat, Message } from "./chat";

export type RootStackParamList = {
  chatList: undefined;
  chat: { chat: Chat; messages: Message[] };
};
