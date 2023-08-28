import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store/store";
import { ProfileState } from "domain/types/profile/Profile";

export const profileinitialState: ProfileState = {
  profile: null,
};

export const profileSlice = createSlice({
  name: "profile",
  initialState: profileinitialState,
  reducers: {
    setProfile: (state: ProfileState, action) => {
      state.profile = action.payload;
    },
  },
});

export const selectProfile = (state: RootState) => state.reducer.profile;
export const { setProfile } = profileSlice.actions;

export default profileSlice.reducer;
