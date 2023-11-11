import { useDispatch } from "react-redux";
import { ErrorHandler } from "utils/errorHandler";
import { useCallback, useEffect } from "react";
import {
  useSaveCollectionMutation,
  useDeleteCollectionMutation,
} from "services/collection";
import { CollectionProp } from "domain/types/collection/collection";
import { resetCollection, setCollection } from "features/collectionSlice";

export const useSaveCollection = () => {
  const dispatch = useDispatch();

  const [
    saveCollection,
    { data: updateData, error: updateDataErr, isLoading: updateDataloading },
  ] = useSaveCollectionMutation();

  useEffect(() => {
    ErrorHandler(updateDataErr, dispatch);
  }, [updateDataErr, dispatch]);

  const update = useCallback(
    async (data: CollectionProp) => {
      try {
        await saveCollection(data).unwrap();
      } catch (e: any) {}
    },
    [saveCollection]
  );

  useEffect(() => {
    if (updateData) {
      dispatch(resetCollection([]));
      dispatch(setCollection(updateData));
    }
  }, [updateData, dispatch]);

  return {
    update,
    updateData,
    updateDataloading,
  };
};

export const useDeleteCollection = () => {
  const dispatch = useDispatch();

  const [
    deleteCollection,
    { data: deleteData, error: deleteDataErr, isLoading: deleteDataloading },
  ] = useDeleteCollectionMutation();

  const deleteCol = useCallback(
    async (data: any) => {
      try {
        await deleteCollection(data).unwrap();
      } catch (e: any) {}
    },
    [deleteCollection]
  );

  useEffect(() => {
    if (deleteData) {
      dispatch(resetCollection([]));
      dispatch(setCollection(deleteData.collections));
    }
  }, [deleteData, dispatch]);

  return {
    deleteCol,
    deleteDataErr,
    deleteDataloading,
  };
};
