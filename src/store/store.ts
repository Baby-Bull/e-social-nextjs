import { useMemo } from "react";
import { applyMiddleware, createStore } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { SearchUserFormStatus } from "src/constants/constants";

import actionTypes from "./actionTypes";
import reducer from "./reducer";

interface IStoreState {
  user: any;
  notifications: any;
  listrooms: any;
  search_users: {
    scrollPosition: number;
    formStatus: SearchUserFormStatus;
    form: {
      job: string | number;
      employeeStatus: string | number;
      lastLogin: number;
      review: number;
      statusCanTalk: boolean;
      statusLookingForFriend: boolean;
      statusNeedConsult: boolean;
      tags: string[];
    };
    result: {
      limit: number;
      cursor: string;
      items: any[];
      sort: string;
      hasMore: boolean;
    };
  };
}

let store: any;

const exampleInitialState: IStoreState = {
  user: {},
  search_users: {
    formStatus: SearchUserFormStatus.Init,
    scrollPosition: 0,
    form: {
      job: 0,
      employeeStatus: 0,
      lastLogin: 0,
      review: 0,
      statusCanTalk: false,
      statusLookingForFriend: false,
      statusNeedConsult: false,
      tags: [],
    },
    result: {
      sort: "recommended",
      limit: 6,
      cursor: "",
      hasMore: false,
      items: [],
    },
  },
  notifications: {
    items: [],
  },
  listrooms: {
    itemsPersonal: [],
    itemsCommunity: [],
    hasMorePersonal: false,
    hasMoreCommunity: false,
    cursorPersonal: "",
    cursorCommunity: "",
    unread_count: 0,
  },
};

export const login = (user: any) => ({ type: actionTypes.LOGIN, user });

export const logout = () => ({ type: actionTypes.LOGIN, user: {} });

const persistConfig = {
  key: "primary",
  storage,
  whitelist: ["user", "is_profile_edited"], // place to select which state you want to persist
};
const persistedReducer = persistReducer(persistConfig, reducer);

function makeStore(initialState = exampleInitialState) {
  return createStore(persistedReducer, initialState, applyMiddleware());
}

export const initializeStore = (preloadedState) => {
  // eslint-disable-next-line no-underscore-dangle
  let _store = store ?? makeStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = makeStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === "undefined") return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
};

export function useStore(initialState: any) {
  return useMemo(() => initializeStore(initialState), [initialState]);
}
