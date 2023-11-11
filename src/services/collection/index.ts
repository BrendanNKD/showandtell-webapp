// get account might not be needed
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CollectionProp } from "domain/types/collection/collection";
export const collectionApi = createApi({
  reducerPath: "collectionApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_PATH,
  }),
  endpoints: (builder) => ({
    getCollection: builder.query<CollectionProp[], void>({
      query: () => {
        return {
          url: "/api/v1/collection",
          method: "get",
          credentials: "include",
        };
      },
    }),
    saveCollection: builder.mutation<CollectionProp[], CollectionProp>({
      query: (body: CollectionProp) => {
        return {
          url: "/api/v1/collection/update",
          method: "post",
          credentials: "include",
          body,
        };
      },
    }),
    deleteCollection: builder.mutation<any, any>({
      query: (body: any) => {
        return {
          url: "/api/v1/collection/delete",
          method: "post",
          credentials: "include",
          body,
        };
      },
    }),
  }),
});

export const {
  useGetCollectionQuery,
  useSaveCollectionMutation,
  useDeleteCollectionMutation,
} = collectionApi;
