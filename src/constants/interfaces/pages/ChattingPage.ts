import { IChatroom } from "../models/ChatMessage";

export interface IBoxChatProps {
  allInfoMessage: any;
  time: string;
  showAvatar: Boolean;
}

export interface IBoxMyChatProps {
  allInfoMessage: any;
  time: string;
  isStartOfDay?: boolean;
  isErrorMessage?: boolean;
  resendMessage?: Function;
  deleteErrorMessage?: Function;
}

export interface IChatBoxLeftProps {
  listRooms: IChatroom[];
  userId: string;
  user: any;
  onSelectRoom: Function;
  transferUserToLeftMobile: boolean;
  setSearchChatRoom: Function;
  hasMoreChatRoom: boolean;
  loadMoreChatRooms: any;
  isMobile: boolean;
  roomId?: string;
}

export interface INameOfChatSPProps {
  name: string;
  handleClick: () => void;
}

export interface IThreadDropDownProps {
  open: boolean;
  anchorEl: any;
  handleClose: () => void;
  t?: any;

  redirectToProfile?: () => void;
  setShowPopupReport?: any;
  setShowPopupReview?: any;
}
export interface IThreadShowMessErrProps {
  open: boolean;
  handleClose: () => void;
  textMessageErr?: string;
}
