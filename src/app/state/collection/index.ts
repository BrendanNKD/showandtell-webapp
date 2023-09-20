import { useAppSelector } from "app/hooks/useHooks";
import { selectCollection } from "features/collectionSlice";

export const UseCollection = () => {
  const collection = useAppSelector(selectCollection);
  console.log(collection);
  return collection[0];
};
