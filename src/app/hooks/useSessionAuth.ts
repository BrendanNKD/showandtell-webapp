import { TUserLogin } from "domain/types/auth/UserLogin";
import {
  TUserConfirmOtp,
  TUserRegistration,
} from "domain/types/auth/UserRegistration";
import { accountinitialState, setAccount } from "features/accountSlice";
import { setIsAuthenticated, setTokenExpiry } from "features/authSlice";
import { setProfile } from "features/profileSlice";
import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  useAuthUserMutation,
  useSessionAuthMutation,
  useUnauthUserMutation,
} from "services/auth/authApi";
import {
  useSignUpUserMutation,
  useConfirmSignUpMutation,
} from "services/signUp/signUp";

export const useSessionAuth = () => {
  const navigate = useNavigate();
  const [
    sessionAuth,
    {
      data: sessionAuthData,
      isSuccess: sessionAuthSuccess,
      isError: isSessionAuthErr,
      error: sessionAuthErr,
      isLoading: sessionAuthLoading,
    },
  ] = useSessionAuthMutation();

  const session = useCallback(
    async (data: TUserRegistration) => {
      try {
        await sessionAuth().unwrap();
        console.log(sessionAuthData);
      } catch (e: any) {
        //handle signUp error
      }
    },
    [sessionAuth, sessionAuthData]
  );

    useEffect(() => {
      if (!sessionAuthData) {
        // currently reauthenticate first no way
        navigate("/login");
      } else {
        //toast to show confirm sign up error
        //second layer defense after try catch
      }
    }, [sessionAuthLoading, navigate]);

  return { session, sessionAuthData, sessionAuthSuccess, sessionAuthLoading };
};
