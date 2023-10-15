import { selectAuth } from "features/authSlice";
import { useAppSelector } from "../../hooks/useHooks";

export const UseIsAuthenticated = () => {
  const { isAuthenticated } = useAppSelector(selectAuth);
  return isAuthenticated;
};
