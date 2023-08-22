import { useAppSelector } from "../../hooks/useHooks";
import { selectAccount } from "features/accountSlice";

export const UseAccount = () => {
  const { profiles, username } = useAppSelector(selectAccount);
  return { profiles, username };
};
