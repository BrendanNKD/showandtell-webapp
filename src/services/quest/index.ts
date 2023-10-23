import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const questApi = createApi({
  reducerPath: "questApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000",
  }),
  endpoints: (builder) => ({
    getQuest: builder.query<any, void>({
      query: () => {
        return {
          url: "/api/v1/quest",
          method: "get",
          credentials: "include",
        };
      },
    }),
    getProfileQuest: builder.query<any, any>({
      query: (profileId) => {
        return {
          url: `/api/v1/quest/profileQuest/${profileId}`,
          method: "get",
          credentials: "include",
        };
      },
    }),
    createQuest: builder.mutation({
      query: (body: any) => {
        return {
          url: "/api/v1/quest/createQuest",
          method: "get",
          credentials: "include",
          body,
        };
      },
    }),
    completeQuest: builder.mutation({
      query: (body: any) => {
        return {
          url: "/api/v1/quest/completeQuest",
          method: "get",
          credentials: "include",
          body,
        };
      },
    }),
  }),
});

export const {
  useGetQuestQuery,
  useCreateQuestMutation,
  useGetProfileQuestQuery,
} = questApi;
