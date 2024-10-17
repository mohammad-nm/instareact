import { configureStore } from "@reduxjs/toolkit";
import sessionReducer from "./sessionSlice";
import reactsReducer from "./reactsSlice";
import instaReducer from "./instaSlice";
export const store = configureStore({
  reducer: {
    session: sessionReducer,
    reacts: reactsReducer,
    insta: instaReducer,
  },
});
