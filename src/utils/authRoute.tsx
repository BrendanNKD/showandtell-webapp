import { useAppSelector } from "../app/hooks/useHooks";
import { selectAuth } from "features/authSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const UseAuthenticatedRoute = () => {
  const navigate = useNavigate();
  const isAuthenticated = useAppSelector(selectAuth);

  useEffect(() => {
    if (!isAuthenticated.isAuthenticated) {
      navigate("/login");
    }
  }, [navigate, isAuthenticated]);
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
