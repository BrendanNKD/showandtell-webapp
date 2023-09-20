import { selectAuth } from "features/authSlice";
import { useAppSelector } from "../../hooks/useHooks";
import { selectAccount } from "features/accountSlice";

export const UseIsAuthenticated = () => {
  const { isAuthenticated } = useAppSelector(selectAuth);
  return isAuthenticated;
};
