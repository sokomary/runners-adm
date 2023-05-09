import { Moment } from "moment";
import { Company } from "./Company";
import { Courier } from "./Courier";
import { Source } from "./Source";

enum MessageStatus {
  SEND = "SEND",
  READ = "READ",
}

interface Chat {
  id: number;
  company: Company;
  courier: Courier;
}

interface Message {
  source: Source;
  body: string;
  date: Moment;
  status: MessageStatus;
  chat: Chat;
}

const getLastMessage = (messages: Message[]) =>
  messages.sort((a, b) => (a.date.isAfter(b.date) ? -1 : 1))[0];

const getUnreadMessages = (messages: Message[]) =>
  messages.filter((message) => message.status === MessageStatus.SEND);

const getFirstUnreadMessage = (messages: Message[], source: Source) =>
  getUnreadMessages(messages)
    .filter((message) => message.source === source)
    .sort((a, b) => (a.date.isAfter(b.date) ? 1 : -1))[0];

export type { Chat, Message };
export {
  getLastMessage,
  MessageStatus,
  getFirstUnreadMessage,
  getUnreadMessages,
};
