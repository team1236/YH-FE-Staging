import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    // [RegisterAPI.reducerPath]: RegisterAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
    // RegisterAPI.middleware
  ),
});

setupListeners(store.dispatch);
