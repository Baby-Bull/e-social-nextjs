import { ReactNode } from "react";

import { IUserCardInformation } from "../models/User";

export interface ISlickSliderRecommendComponentProps {
  items: Array<ReactNode>;
}

export interface IItemRecommendUserHomepage {
  data: IUserCardInformation;
  indexKey?: number;
  handleOpenMatchingModal: Function;
  handleAcceptMatchingRequestReceived: Function;
}

export interface ISlideRecommendUsersHomepage {
  indexFetch?: number;
  title: string;
  dataRecommends: Array<IUserCardInformation>;
  handleOpenMatchingModal: Function;
  handleAcceptMatchingRequestReceived: Function;
  queryUrl: string;
}

export interface IMatchingItem {
  label: string;
  data: number;
  unit: string;
  link: string;
}

export interface IMatchingItemMobile {
  icon: string;
  // data: number;
  label: string;
  link: string;
}

export interface IModalMatchingComponent {
  open: boolean;
  setOpen: Function;
  userRequestMatching?: any;
  handleSendMatchingRequest?: Function;
}

export interface IDataInfoMatching {
  title: string;
  icon: string;
  number: any;
  link: string;
}
