import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

// if we use typescript:
// typescript helper utility.
export type RootState = ReturnType<typeof store.getState>;
// for async actions.
export type AppDispatch = typeof store.dispatch;

// for this to be useful we need a provider for react to use.
