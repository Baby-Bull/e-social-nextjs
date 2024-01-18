import { SearchFormStatus } from "src/constants";

import { IChatroom } from "../models/ChatMessage";
import { IFormCommunitySearch, IFormUserSearch, IResultSearch } from "../pages/SearchPage";

export interface IStoreState {
  user: any;
  notifications: any;
  listrooms: {
    itemsPersonal: Array<IChatroom>;
    itemsCommunity: Array<any>;
    hasMorePersonal: boolean;
    hasMoreCommunity: boolean;
    cursorPersonal: string;
    cursorCommunity: string;
    unread_count: number;
  };
  search_users: {
    scrollPosition: number;
    formStatus: SearchFormStatus;
    form: IFormUserSearch;
    result: IResultSearch;
  };
  search_community: {
    scrollPosition: number;
    formStatus: SearchFormStatus;
    form: IFormCommunitySearch;
    result: IResultSearch;
  };
  is_profile_edited: boolean;
}
