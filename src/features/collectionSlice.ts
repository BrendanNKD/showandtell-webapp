import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store/store";


// todo for profile

export const collectionSlice = createSlice({
  name: "collection",
  initialState: [],
  reducers: {
    setCollection: (state: any, action) => {
      state.push(action.payload);
    },
    resetCollection(state, action) {
      // ✅ CORRECT: returns a new value to replace the old one
      return [];
    },
  },
});

export const selectCollection = (state: RootState) => state.reducer.collection;
export const { setCollection, resetCollection } = collectionSlice.actions;

export default collectionSlice.reducer;
