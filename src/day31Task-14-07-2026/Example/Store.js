import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./CounterSlice1";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});