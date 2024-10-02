import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  session: null,
};

const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    setSessionSlice: (state, action) => {
      state.session = action.payload;
    },
    clearSession: (state) => {
      state.session = null;
    },
  },
});
export const loginAsync = (credentials: any) => async (dispatch: any) => {
  try {
    const session = credentials;

    dispatch(setSessionSlice(session));
  } catch (error) {
    console.error("Failed to login:", error);
  }
};
export const { setSessionSlice, clearSession } = sessionSlice.actions;

export default sessionSlice.reducer;
