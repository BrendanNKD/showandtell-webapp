import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TUserLogin } from "domain/types/auth/UserLogin";
import { ChangePassword } from "domain/types/auth/UserRegistration";

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
    changePassword: builder.mutation({
      query: (body: ChangePassword) => {
        return {
          url: "/api/v1/auth/changePassword",
          method: "post",
          credentials: "include",
          body,
        };
      },
    }),
    sessionAuth: builder.mutation<Boolean, void>({
      query: () => {
        return {
          url: "/api/v1/auth/session",
          method: "post",
          credentials: "include",
        };
      },
    }),
  }),
});

export const {
  useAuthUserMutation,
  useUnauthUserMutation,
  useSessionAuthMutation,
  useChangePasswordMutation
} = authApi;
