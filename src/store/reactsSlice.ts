import { createSlice } from "@reduxjs/toolkit";

const initialState = { reacts: null };

const reactsSlice = createSlice({
  name: "reacts",
  initialState,
  reducers: {
    setReacts: (state, action) => {
      state.reacts = action.payload;
    },
    clearReacts: (state) => {
      state.reacts = null;
    },
  },
});
export const { setReacts, clearReacts } = reactsSlice.actions;

export default reactsSlice.reducer;
