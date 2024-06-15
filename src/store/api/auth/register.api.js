import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const RegisterAPI = createApi({
  reducerPath: "RegisterAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_APP_API_URL
  }),
  endpoints: (builder) => ({
    registerapi: builder.mutation({
      query: (payload) => ({
        url: `/api/v1/register`,
        method: "POST",
        body: payload,
      }),
    }),
  }),
});

export const { useRegisterapiMutation } = RegisterAPI;
