import { async } from "q";
import { useAppSelector } from "../../hooks/useHooks";
import { selectAccount } from "features/accountSlice";

export const UseAccount = () => {
  const { profiles, username } = useAppSelector(selectAccount);
  profiles.sort((a: any, b: any) => b.totalStars - a.totalStars);
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
