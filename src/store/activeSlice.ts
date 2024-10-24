import { createSlice } from "@reduxjs/toolkit";

const initialState = { sorting: "All" };

const activeSlice = createSlice({
  name: "active",
  initialState,
  reducers: {
    setActiveSlice: (state, action) => {
      state.sorting = action.payload;
    },
    clearActiveSlice: (state) => {
      state.sorting = initialState.sorting;
    },
  },
});
export const { setActiveSlice, clearActiveSlice } = activeSlice.actions;

export default activeSlice.reducer;
