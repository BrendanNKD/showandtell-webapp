import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const questApi = createApi({
  reducerPath: "questApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_PATH,
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
          method: "post",
          credentials: "include",
          body,
        };
      },
    }),
    completeQuest: builder.mutation({
      query: (body: any) => {
        return {
          url: "/api/v1/quest/completeQuest",
          method: "post",
          credentials: "include",
          body,
        };
      },
    }),
    refreshQuests: builder.mutation({
      query: (body: any) => {
        return {
          url: "/api/v1/quest/refreshQuest",
          method: "post",
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
  useCompleteQuestMutation,
  useRefreshQuestsMutation,
} = questApi;
