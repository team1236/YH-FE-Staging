import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const LoginAPI = createApi({
  reducerPath: "LoginAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_APP_API_URL,
  }),
  endpoints: (builder) => ({
    loginapi: builder.mutation({
      query: (payload) => ({
        url: `/api/v1/login`,
        method: "POST",
        body: payload,
      }),
    }),
  }),
});

export const { useLoginapiMutation } = LoginAPI;
