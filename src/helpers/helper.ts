import dayjs from "dayjs";

export const sortListRoomChat = (listRooms: any) => {
  listRooms.sort((a: any, b: any) => {
    const dateA = dayjs(a.last_chat_message_at);
    const dateB = dayjs(b.last_chat_message_at);
    return dateB.isAfter(dateA) ? 1 : -1;
  });
  return listRooms;
};

export const formatChatDateRoom = (date: string) => {
  if (dayjs(new Date()).format("YYYYMMDD") === dayjs(date).format("YYYYMMDD")) {
    return dayjs(date).format("HH:mm");
  }
  return dayjs(date).format("YYYY/MM/DD");
};

export const formatChatDate = (date: string) => dayjs(date).format("HH:mm");
