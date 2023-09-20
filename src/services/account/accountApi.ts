// get account might not be needed
import {
  SkipToken,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { AccountResponseModel } from "domain/types/account/UserAccount";

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
    addProfile: builder.mutation<AccountResponseModel, void>({
      query: () => {
        return {
          url: "/api/v1/profile/current",
          method: "get",
          credentials: "include",
        };
      },
    }),
  }),
});

export const { useGetAccountQuery } = accountApi;
