import { TUserRegistration } from "domain/types/auth/UserRegistration";
import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSessionAuthMutation } from "services/auth/authApi";

export const useSessionAuth = () => {
  const navigate = useNavigate();
  const [
    sessionAuth,
    {
      data: sessionAuthData,
      isSuccess: sessionAuthSuccess,
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
  }, [navigate, sessionAuthData]);

  return { session, sessionAuthData, sessionAuthSuccess, sessionAuthLoading };
};
