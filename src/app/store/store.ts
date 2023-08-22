import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "services/auth/authApi";
import { unauthApi } from "services/auth/unauthApi";
import { accountApi } from "services/account/accountApi";
import { signUpApi } from "services/signUp/signUp";

import authReducer from "../../features/authSlice";
import accountReducer from "../../features/accountSlice";
import profileReducer from "../../features/profileSlice";

import { setupListeners } from "@reduxjs/toolkit/query/react";
import { combineReducers } from "redux";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  auth: authReducer,
  account: accountReducer,
  profile: profileReducer,
});

const persistConfig = {
  key: "root", // Key for the persisted state in storage
  storage, // Storage method (e.g., localStorage or AsyncStorage)
  whitelist: ["auth", "account", "profile"], // List of keys to persist (only "auth" in this case)
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: {
    reducer: persistedReducer,
    [authApi.reducerPath]: authApi.reducer,
    [accountApi.reducerPath]: accountApi.reducer,
    [unauthApi.reducerPath]: unauthApi.reducer,
    [signUpApi.reducerPath]: signUpApi.reducer,
  },
  devTools: process.env.NODE_ENV !== "production",

  middleware: (getDefaultMiddleware) =>
    // no need for redux-thunk
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat([
      authApi.middleware,
      accountApi.middleware,
      unauthApi.middleware,
      signUpApi.middleware,
    ]),
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
setupListeners(store.dispatch);
