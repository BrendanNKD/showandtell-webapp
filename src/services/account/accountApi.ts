// get account might not be needed
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AccountResponseModel } from "domain/types/account/UserAccount";
import {
  ProfileResponseModel,
  UpdateProfileRequestModel,
} from "domain/types/profile/Profile";

export const accountApi = createApi({
  reducerPath: "accountApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000",
  }),
  endpoints: (builder) => ({
    getAccount: builder.query<AccountResponseModel, void>({
      query: () => {
        return {
          url: "/api/v1/profile/current",
          method: "get",
          credentials: "include",
        };
      },
    }),

    addProfile: builder.mutation({
      query: (body: ProfileResponseModel) => {
        return {
          url: "/api/v1/profile/add",
          method: "post",
          credentials: "include",
          body,
        };
      },
    }),

    updateProfile: builder.mutation({
      query: (body: UpdateProfileRequestModel) => {
        return {
          url: "/api/v1/profile/update",
          method: "post",
          credentials: "include",
          body,
        };
      },
    }),
  }),
});

export const {
  useGetAccountQuery,
  useAddProfileMutation,
  useUpdateProfileMutation,
} = accountApi;
