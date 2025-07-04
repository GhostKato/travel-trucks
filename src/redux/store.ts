import { configureStore } from "@reduxjs/toolkit";

import { trucksReducer } from "./trucks/slice";

export const store = configureStore({
  reducer: {
    trucks: trucksReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
