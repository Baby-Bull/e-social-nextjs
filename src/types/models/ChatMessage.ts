import { UserBasic } from "./User";

// eslint-disable-next-line no-shadow
export enum ChatRoomMessageContentTypeEnum {
  // eslint-disable-next-line no-unused-vars
  FirstMessage = "first-message",
  // eslint-disable-next-line no-unused-vars
  Text = "text",
  // eslint-disable-next-line no-unused-vars
  Image = "image",
  // eslint-disable-next-line no-unused-vars
  File = "file",
}

export interface ChatMessage {
  id: string;
  content: string;
  content_type: ChatRoomMessageContentTypeEnum;
  created_at: string;
  user: UserBasic;
}
