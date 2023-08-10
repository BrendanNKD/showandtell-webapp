import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const profileApi = createApi({
  reducerPath: "profileApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
  }),
  endpoints: (builder) => ({
    getAccount: builder.mutation({
      query: () => {
        return {
          url: "/api/v1/profile/current",
          method: "get",
        };
      },
    }),
  }),
});

export const { useGetAccountMutation } = profileApi;
