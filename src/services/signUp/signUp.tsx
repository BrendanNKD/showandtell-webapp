import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  TUserConfirmOtp,
  TUserRegistration,
} from "domain/types/auth/UserRegistration";
import { config } from "config/config";

export const signUpApi = createApi({
  reducerPath: "signUpApi",
  baseQuery: fetchBaseQuery({
    baseUrl: String(config.api_domain),
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
    confirmSignUp: builder.mutation({
      query: (body: TUserConfirmOtp) => {
        return {
          url: "/api/v1/auth/confirmSignup",
          method: "post",
          credentials: "include",
          body,
        };
      },
    }),
  }),
});

export const { useSignUpUserMutation, useConfirmSignUpMutation } = signUpApi;
