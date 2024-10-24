import { configureStore } from "@reduxjs/toolkit";
import sessionReducer from "./sessionSlice";
import reactsReducer from "./reactsSlice";
import instaReducer from "./instaSlice";
import sortingReducer from "./sortingSlice";
import activeReducer from "./activeSlice";
export const store = configureStore({
  reducer: {
    session: sessionReducer,
    reacts: reactsReducer,
    insta: instaReducer,
    sorting: sortingReducer,
    active: activeReducer,
  },
});
