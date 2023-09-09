import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { generateCaptionRequest } from "domain/types/generateCaption/generateCaption";

export const generateApi = createApi({
  reducerPath: "generateApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000",
  }),
  endpoints: (builder) => ({
    genCaption: builder.mutation({
      query: (body: generateCaptionRequest) => {
        return {
          url: "/api/v1/generate/gencaption",
          method: "post",
          credentials: "include",
          body,
        };
      },
    }),
  }),
});

export const { useGenCaptionMutation } = generateApi;
