
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
