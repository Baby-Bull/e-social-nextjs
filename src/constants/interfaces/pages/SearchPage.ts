import { SearchFormStatus } from "src/constants/Common.constant";

export interface IFormUserSearch {
  searchTags: Array<string>;
  orderBy: string;
  fullText: string;
  searchJob: string;
  searchStatus: string;

  // job: string | number;
  // employeeStatus: string | number;
  // lastLogin: number;
  // review: number;
  // statusCanTalk: boolean;
  // statusLookingForFriend: boolean;
  // statusNeedConsult: boolean;
  // tags: string[];
  // fullText: string;
  // orderBy: string;
}

export interface IResultSearchUser {
  take: number;
  page: number;
  countAll: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;

  // limit: number;
  // cursor: string;
  // items: any[];
  // sort: string;
  // hasMore: boolean;
}

export interface ISearchUserComponent {
  scrollPosition: number;
  formStatus: SearchFormStatus;
  form: IFormUserSearch;
  result: IResultSearchUser;
  // eslint-disable-next-line no-unused-vars
  updateForm: (formData: any) => void;
  // eslint-disable-next-line no-unused-vars
  updateResult: (result: any) => void;
  // eslint-disable-next-line no-unused-vars
  updateScrollPosition: (position: number) => void;
  clearForm: () => void;
}
