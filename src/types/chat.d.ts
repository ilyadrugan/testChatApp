import { User } from "./user";

export interface ChatList {
  chat_list: Chat[];
}

export interface Chat {
  chat_id: number;
  participants: User[];
  messages: Message[];
}

export interface Message {
  timestamp: string;
  sender_id: number;
  receiver_id: number;
  message: string;
}
