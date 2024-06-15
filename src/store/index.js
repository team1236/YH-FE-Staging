import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { RegisterAPI } from "./api/auth/register.api";
import { LoginAPI } from "./api/auth/login.api";

export const store = configureStore({
  reducer: {
    [RegisterAPI.reducerPath]: RegisterAPI.reducer,
    [LoginAPI.reducerPath]: LoginAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
    RegisterAPI.middleware,
    LoginAPI.middleware,
  ),
});

setupListeners(store.dispatch);
