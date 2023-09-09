import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TUserLogin } from "domain/types/auth/UserLogin";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000",
  }),
  endpoints: (builder) => ({
    authUser: builder.mutation({
      query: (body: TUserLogin) => {
        return {
          url: "/api/v1/auth/login",
          method: "post",
          credentials: "include",
          body,
        };
      },
    }),
    unauthUser: builder.mutation<Boolean, void>({
      query: () => {
        return {
          url: "/api/v1/auth/logout",
          method: "post",
          credentials: "include",
        };
      },
    }),
  }),
});

export const { useAuthUserMutation, useUnauthUserMutation } = authApi;
