import { createSlice } from "@reduxjs/toolkit";

const initialState = { reacts: null };

const reactsSlice = createSlice({
  name: "reacts",
  initialState,
  reducers: {
    setReactsSlice: (state, action) => {
      state.reacts = action.payload;
    },
    clearReactsSlice: (state) => {
      state.reacts = null;
    },
  },
});
export const { setReactsSlice, clearReactsSlice } = reactsSlice.actions;

export default reactsSlice.reducer;
