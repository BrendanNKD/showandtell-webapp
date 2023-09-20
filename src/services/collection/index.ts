// get account might not be needed
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AccountResponseModel } from "domain/types/account/UserAccount";
import {
  CollectionProp,
  CollectionsResponseModel,
} from "domain/types/collection/collection";

export const collectionApi = createApi({
  reducerPath: "collectionApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000",
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
  }),
});

export const { useGetCollectionQuery, useSaveCollectionMutation } =
  collectionApi;
