import { Chat } from "../types/chat";

export const getLastMessage = (chat: Chat) => {
  return chat.messages.slice(-1)[0].message;
};
export const getLastMessageTime = (chat: Chat) => {
  return chat.messages.slice(-1)[0].timestamp;
};
