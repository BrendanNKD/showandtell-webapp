import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store/store";
import { ProfileState } from "domain/types/profile/Profile";

export const profileinitialState: ProfileState = {
  profile: null,
  isMain: false,
};

export const profileSlice = createSlice({
  name: "profile",
  initialState: profileinitialState,
  reducers: {
    setProfile: (state: ProfileState, action) => {
      state.profile = action.payload;
      if (action.payload === 0) state.isMain = true;
      else {
        state.isMain = false;
      }
    },
  },
});

export const selectProfile = (state: RootState) => state.reducer.profile;
export const { setProfile } = profileSlice.actions;

export default profileSlice.reducer;
