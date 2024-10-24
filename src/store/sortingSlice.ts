import { createSlice } from "@reduxjs/toolkit";

const initialState = { sorting: "All" };

const sortingSlice = createSlice({
  name: "sorting",
  initialState,
  reducers: {
    setSortingSlice: (state, action) => {
      state.sorting = action.payload;
    },
    clearSortingSlice: (state) => {
      state.sorting = initialState.sorting;
    },
  },
});
export const { setSortingSlice, clearSortingSlice } = sortingSlice.actions;

export default sortingSlice.reducer;
