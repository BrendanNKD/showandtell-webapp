import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store/store";

export type CognitoUserInfo = {
  username: string;
  attributes: {
    email: string;
    email_verified: boolean;
    sub: string;
  };
};

// todo for profile
export interface AuthState {
  isAuthenticated: boolean;
  tokenExpiry: number;
}

export const authinitialState: AuthState = {
  isAuthenticated: false,
  tokenExpiry: 0,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: authinitialState,
  reducers: {
    setIsAuthenticated: (state: AuthState, action) => {
      state.isAuthenticated = action.payload;
    },
    setTokenExpiry: (state: AuthState, action) => {
      state.tokenExpiry = action.payload;
    },
  },
});

export const selectAuth = (state: RootState) => state.reducer.auth;
export const { setIsAuthenticated, setTokenExpiry } = authSlice.actions;

export default authSlice.reducer;
