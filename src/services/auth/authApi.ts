import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TUserLogin } from "domain/types/auth/UserLogin";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
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
  }),
});

export const { useAuthUserMutation } = authApi;
