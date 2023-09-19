import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store/store";
import { AccountResponseModel } from "domain/types/account/UserAccount";

export const accountinitialState: AccountResponseModel = {
  profiles: [
    {
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      email: "",
      profilePic: 1,
    },
  ],
  username: "",
};

export const accountSlice = createSlice({
  name: "account",
  initialState: accountinitialState,
  reducers: {
    setAccount: (state: AccountResponseModel, action) => {
      state.profiles = action.payload.profiles;
      state.username = action.payload.username;
    },
  },
});

export const selectAccount = (state: RootState) => state.reducer.account;
export const { setAccount } = accountSlice.actions;

export default accountSlice.reducer;
