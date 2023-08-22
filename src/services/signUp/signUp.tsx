import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TUserRegistration } from "domain/types/auth/UserRegistration";

export const signUpApi = createApi({
  reducerPath: "signUpApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
  }),
  endpoints: (builder) => ({
    signUpUser: builder.mutation({
      query: (body: TUserRegistration) => {
        return {
          url: "/api/v1/auth/register",
          method: "post",
          credentials: "include",
          body,
        };
      },
    }),
  }),
});

export const { useSignUpUserMutation } = signUpApi;
