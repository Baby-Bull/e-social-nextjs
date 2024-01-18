import { SearchFormStatus } from "src/constants/Common.constant";

export type TMemberCountSearch = {
  from: number;
  to: number;
};
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

export interface IFormCommunitySearch {
  memberCount: TMemberCountSearch;
  searchTags: Array<string>;
  excludeJoined: boolean;
  orderBy: string;
  fullText: string;
}

export interface IResultSearch {
  take: number;
  page: number;
  countAll: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
  items: any[];
}

export interface ISearchComponent {
  scrollPosition: number;
  formStatus: SearchFormStatus;
  result: IResultSearch;
  // eslint-disable-next-line no-unused-vars
  updateForm: (formData: any) => void;
  // eslint-disable-next-line no-unused-vars
  updateResult: (result: any) => void;
  // eslint-disable-next-line no-unused-vars
  updateScrollPosition: (position: number) => void;
  clearForm: () => void;
}

export interface ISearchUserComponent extends ISearchComponent {
  form: IFormUserSearch;
}
export interface ISearchCommunityComponent extends ISearchComponent {
  form: IFormUserSearch;
}
