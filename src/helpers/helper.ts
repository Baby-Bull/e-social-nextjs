export const sortListRoomChat = (listRooms: any) => {
  listRooms.sort((a: any, b: any) => {
    const dateA = Date.parse(a.last_chat_message_at);
    const dateB = Date.parse(b.last_chat_message_at);
    return dateB - dateA > 0 ? 1 : -1;
  });
  return listRooms;
};

const equalsYearMonthDate = (date1: Date, date2: Date) => {
  const equalsFullYear = date1.getFullYear() === date2.getFullYear();
  const equalsMonth = date1.getMonth() === date2.getMonth();
  const equalsDate = date1.getDate() === date2.getDate();

  return equalsFullYear && equalsMonth && equalsDate;
};

export const formatChatDateRoom = (date: string) => {
  const chatRoomDate = new Date(date);
  //if (dayjs(new Date()).format("YYYYMMDD") === dayjs(date).format("YYYYMMDD")) {
  if (equalsYearMonthDate(new Date(), chatRoomDate)) {
    return `${chatRoomDate.getHours()}:${chatRoomDate.getMinutes()}`;
  }
  return `${chatRoomDate.getFullYear()}/${chatRoomDate.getMonth() + 1}/${chatRoomDate.getDate()}`;
};

export const formatChatDate = (chatDate: string) => {
  const date = new Date(chatDate);
  return `${date.getHours()}:${date.getMinutes()}`;
};
