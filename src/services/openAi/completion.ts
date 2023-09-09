import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { promptRequest } from "domain/types/openAi/completion";

export const openAiCompletionApi = createApi({
  reducerPath: "describeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000",
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
  }),
});

export const { useOpenAiCompletionMutation } = openAiCompletionApi;
