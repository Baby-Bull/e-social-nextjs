import { useMemo } from "react";
import { applyMiddleware, createStore } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { SearchFormStatus } from "src/constants";
import { IStoreState } from "src/constants/interfaces";

import actionTypes from "./actionTypes";
import rootReducer, { RootState } from "./reducers/combineReducers";

let store: IStoreState | any;

const exampleInitialState: IStoreState = {
  user: {},
  search_users: {
    formStatus: SearchFormStatus.Init,
    scrollPosition: 0,
    form: {
      searchTags: [],
      orderBy: "favorite_count",
      fullText: null,
      searchJob: null,
      searchStatus: null,
    },
    result: {
      sort: "favorite_count",
      limit: 9,
      page: 1,
      hasMore: false,
      items: [],
    },
  },
  search_community: {
    formStatus: SearchFormStatus.Init,
    scrollPosition: 0,
    form: {
      login_count: 0,
      member_count: 0,
      lastLogin: 0,
      exclude_joined_communities: false,
      tags: [],
    },
    result: {
      sort: "recommended",
      limit: 12,
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
  is_profile_edited: true,
};

export const login = (user: any) => ({ type: actionTypes.LOGIN, user });

export const logout = () => ({ type: actionTypes.LOGOUT });

const persistConfig = {
  key: "primary",
  storage,
  whitelist: ["user", "is_profile_edited", "listrooms"], // place to select which state you want to persist
};
const persistedReducer = persistReducer<RootState>(persistConfig, rootReducer);

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
