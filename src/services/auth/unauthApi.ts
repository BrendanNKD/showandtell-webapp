import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const unauthApi = createApi({
  reducerPath: "unauthApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
  }),
  endpoints: (builder) => ({
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

export const { useUnauthUserMutation } = unauthApi;
