import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { generateImageRequest } from "domain/types/generate";

export const generateApi = createApi({
  reducerPath: "generateApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_PATH,
  }),
  endpoints: (builder) => ({
    genCaption: builder.mutation({
      query: (body: any) => {
        return {
          url: "/api/v1/generate/gencaption",
          method: "post",
          credentials: "include",
          body,
        };
      },
    }),
    genImage: builder.mutation({
      query: (body: generateImageRequest) => {
        return {
          url: "/api/v1/generate/genimage",
          method: "post",
          credentials: "include",
          body,
        };
      },
    }),
    report: builder.mutation({
      query: (body: any) => {
        return {
          url: "/api/v1/generate/report",
          method: "post",
          credentials: "include",
          body,
        };
      },
    }),
  }),
});

export const { useGenCaptionMutation, useGenImageMutation,useReportMutation } = generateApi;
