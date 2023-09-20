import { useAppSelector } from "app/hooks/useHooks";
import { selectCollection } from "features/collectionSlice";

export const UseCollection = () => {
  const collection = useAppSelector(selectCollection);

  return collection[0];
};
