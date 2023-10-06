import { useAppSelector } from "../../hooks/useHooks";
import { selectAccount } from "features/accountSlice";

export const UseAccount = () => {
  const { profiles, username } = useAppSelector(selectAccount);

  return { profiles, username };
};

export const UseEmail = () => {
  const { email } = useAppSelector(selectAccount);
  return email;
};

export const UseUsername = () => {
  const { username } = useAppSelector(selectAccount);
  return username;
};