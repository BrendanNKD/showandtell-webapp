import { useAppSelector } from "../app/hooks/useHooks";
import {
  selectAuth,
  setIsAuthenticated,
  setTokenExpiry,
} from "features/authSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie"; // Import js-cookie library
import { useDispatch } from "react-redux";
import { accountinitialState, setAccount } from "features/accountSlice";
import { UseProfile } from "app/state/profile/useProfile";

export const UseAuthenticatedRoute = () => {
  const navigate = useNavigate();
  const isAuthenticated = useAppSelector(selectAuth);
  const profile = UseProfile();
  useEffect(() => {
    if (!isAuthenticated.isAuthenticated) {
      navigate("/login");
    }
    if (isAuthenticated.isAuthenticated && profile === null) {
      navigate("/profiles");
    }
  }, [navigate, isAuthenticated, profile]);
};

export const UseNonAuthenticatedRoute = () => {
  const navigate = useNavigate();
  const isAuthenticated = useAppSelector(selectAuth);

  useEffect(() => {
    if (isAuthenticated.isAuthenticated) {
      navigate("/profiles");
    }
  }, [navigate, isAuthenticated]);
};
