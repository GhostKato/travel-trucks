import { configureStore } from "@reduxjs/toolkit";
import trucksReducer from "./trucks/slice";
import { filtersReducer } from "./filters/slice";

export const store = configureStore({
  reducer: {
    trucks: trucksReducer,
    filters: filtersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
