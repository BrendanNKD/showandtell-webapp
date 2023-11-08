import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { promptRequest } from "domain/types/openAi/completion";
export const openAiCompletionApi = createApi({
  reducerPath: "describeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_PATH,
  }),
  endpoints: (builder) => ({
    openAiCompletion: builder.mutation({
      query: (body: promptRequest) => {
        return {
          url: "/api/v1/openai/completions",
          method: "post",
          credentials: "include",
          body,
        };
      },
    }),
    check: builder.mutation({
      query: (body: any) => {
        return {
          url: "/api/v1/openai/check",
          method: "post",
          credentials: "include",
          body,
        };
      },
    }),
  }),
});

export const { useOpenAiCompletionMutation, useCheckMutation } =
  openAiCompletionApi;
