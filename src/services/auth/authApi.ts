import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
  }),
  endpoints: (builder) => ({
    authUser: builder.mutation({
      query: (body: { username: string; password: string }) => {
        return {
          url: "/api/v1/auth/login",
          method: "post",
          credential: true,
          body,
        };
      },
    }),
  }),
});

export const { useAuthUserMutation } = authApi;
