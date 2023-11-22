import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UseIsAuthenticated } from "app/state/account/useAuthenticated";
import { UseProfile } from "app/state/profile/useProfile";
import { isRejectedWithValue } from "@reduxjs/toolkit";
import type { MiddlewareAPI, Middleware } from "@reduxjs/toolkit";
import { accountinitialState, setAccount } from "features/accountSlice";
import { setIsAuthenticated, setTokenExpiry } from "features/authSlice";
import { setProfile } from "features/profileSlice";

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

/**
 * Log a warning and show a toast!
 */

export const UseSessionMiddleware: Middleware =
  (api: MiddlewareAPI) => (next) => async (action) => {
    // RTK Query uses `createAsyncThunk` from redux-toolkit under the hood, so we're able to utilize these matchers!
    if (isRejectedWithValue(action)) {
      if (action.payload.status === 404) {
        console.log("SESSION EXPIRED");
        api.dispatch(setIsAuthenticated(false));
        api.dispatch(setTokenExpiry(0));
        api.dispatch(setAccount(accountinitialState));
        api.dispatch(setProfile(null));
        // Do not proceed with the middleware chain for 404 status
        return;
      }
    }

    return next(action);
  };
