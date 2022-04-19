import dayjs from "dayjs";

export const replaceLabelByTranslate = (message: string, textReplace: string | number) =>
  message.replace("%s", textReplace.toString());

export const formatChatDate = (date: string) => dayjs(date).format("HH:mm");
