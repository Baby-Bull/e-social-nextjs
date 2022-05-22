import { useMemo } from "react";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import actionTypes from "./actionTypes";
import reducer from "./reducer";

interface IStoreState {
  user: any;
}

let store: any;

const exampleInitialState: IStoreState = {
  user: {},
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
  return createStore(persistedReducer, initialState, composeWithDevTools(applyMiddleware()));
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
