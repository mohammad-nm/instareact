import { createSlice } from "@reduxjs/toolkit";

const initialState = { insta: {} };

const instaSlice = createSlice({
  name: "insta",
  initialState,
  reducers: {
    setInstaSlice: (state, action) => {
      state.insta = action.payload;
    },
    clearInstaSlice: (state) => {
      state.insta = {};
    },
  },
});
export const { setInstaSlice, clearInstaSlice } = instaSlice.actions;

export default instaSlice.reducer;
