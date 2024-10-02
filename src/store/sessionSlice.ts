import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  session: null,
};

const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    setSession: (state, action) => {
      state.session = action.payload;
    },
    clearSession: (state) => {
      state.session = null;
    },
  },
});

export const { setSession, clearSession } = sessionSlice.actions;

export default sessionSlice.reducer;
