import { useAppSelector } from "../app/hooks/useHooks";
import {
  selectAuth,
  setIsAuthenticated,
  setTokenExpiry,
} from "features/authSlice";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Cookies from "js-cookie"; // Import js-cookie library
import { useDispatch } from "react-redux";
import { accountinitialState, setAccount } from "features/accountSlice";
import { UseIsAuthenticated } from "app/state/account/useAuthenticated";
import { UseProfile } from "app/state/profile/useProfile";

export const UseAuthenticatedRoute = () => {
  const navigate = useNavigate();

  const isAuthenticated = UseIsAuthenticated();
  const profile = UseProfile();
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
      window.location.reload();
    }
    if (isAuthenticated && profile === null) {
      navigate("/profiles");
    }
  }, [navigate, isAuthenticated, profile]);
};

export const UseNonAuthenticatedRoute = () => {
  const navigate = useNavigate();
  const isAuthenticated = UseIsAuthenticated();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/profiles");
    }
  }, [navigate, isAuthenticated]);
};
