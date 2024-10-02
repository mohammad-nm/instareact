import { configureStore } from "@reduxjs/toolkit";
import sessionReducer from "./sessionSlice";
import reactsReducer from "@/store/reactsSlice";
export const store = configureStore({
  reducer: {
    session: sessionReducer,
    reacts: reactsReducer,
  },
});
