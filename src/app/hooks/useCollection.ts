import { useDispatch } from "react-redux";

import { ErrorHandler } from "utils/errorHandler";
import { useCallback, useEffect } from "react";
import {
  useGetCollectionQuery,
  useSaveCollectionMutation,
} from "services/collection";
import { CollectionProp } from "domain/types/collection/collection";

export const useGetCollection = () => {
  const dispatch = useDispatch();
  const {
    data: collectionData,
    isLoading,
    isError,
    error,
  } = useGetCollectionQuery();

  useEffect(() => {
    ErrorHandler(error, dispatch);
  }, [error, dispatch]);

  return {
    collectionData,
    isLoading,
    isError,
  };
};

export const useSaveCollection = () => {
  const dispatch = useDispatch();

  const [
    saveCollection,
    {
      data: updateData,
      isSuccess: isupdateDataSuccess,
      isError: updateDataisErr,
      error: updateDataErr,
      isLoading: updateDataloading,
    },
  ] = useSaveCollectionMutation();

  useEffect(() => {
    ErrorHandler(updateDataErr, dispatch);
  }, [updateDataErr, dispatch]);

  const update = useCallback(
    async (data: CollectionProp) => {
      try {
        console.log(data);
        await saveCollection(data).unwrap();
      } catch (e: any) {}
    },
    [saveCollection]
  );

  return {
    update,
    updateData,
    updateDataloading,
  };
};
