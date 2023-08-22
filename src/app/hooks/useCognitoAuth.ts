import { useIsomorphicLayoutEffect } from "@reduxjs/toolkit/dist/query/react/buildHooks";
import { TUserLogin } from "domain/types/auth/UserLogin";
import { TUserRegistration } from "domain/types/auth/UserRegistration";
import { accountinitialState, setAccount } from "features/accountSlice";
import { setIsAuthenticated, setTokenExpiry } from "features/authSlice";
import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useGetAccountMutation } from "services/account/accountApi";
import { useAuthUserMutation } from "services/auth/authApi";
import { useUnauthUserMutation } from "services/auth/unauthApi";
import { useSignUpUserMutation } from "services/signUp/signUp";

export const useSignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [
    authUser,
    {
      data: loginData,
      isSuccess: isLoginSuccess,
      isError: loginisErr,
      error: loginErr,
      isLoading: authloading,
    },
  ] = useAuthUserMutation();
  const [
    getAccount,
    {
      data: accountData,
      isSuccess: isGetAccountSuccess,
      isError: accountisErr,
      error: getAccountErr,
      isLoading: accountloading,
    },
  ] = useGetAccountMutation();

  const signIn = useCallback(
    async (data: TUserLogin) => {
      const { username, password } = data;
      try {
        await authUser({ username, password });
        await getAccount();
        //todo get profileY
        //await getCurrentUserInfo(dispatch)
        // todo show toast
        //showToast({ message: 'Successfuly sign in', type: 'success' })
      } catch (e: any) {
        dispatch(setIsAuthenticated(false));
        dispatch(setTokenExpiry(0));
        dispatch(setAccount(accountinitialState));
        if (e.response.data.code === "UserNotConfirmedException") {
          navigate(`/registration/confirmOtp?username=${username}`);
        }
      }
    },
    [authUser, getAccount, dispatch, navigate]
  );

  useEffect(() => {
    if (isGetAccountSuccess && isLoginSuccess) {
      dispatch(setIsAuthenticated(true));
      dispatch(
        // set token expiry to 1 day - 10 min
        setTokenExpiry(new Date().getTime() / 1000 + 24 * 60 * 60 - 600)
      );
      dispatch(setAccount(accountData));
    }
  }, [dispatch, loginData, isLoginSuccess, accountData, isGetAccountSuccess]);

  return {
    signIn,
    loginData,
    isLoginSuccess,
    loginisErr,
    loginErr,
    authloading,
  };
};

export const useSignOut = () => {
  const dispatch = useDispatch();

  const [
    unauthUser,
    {
      data: logutData,
      isSuccess: isLogoutSuccess,
      isError: isLogoutErr,
      error: logoutErr,
      isLoading: logoutLoading,
    },
  ] = useUnauthUserMutation();

  const signOut = useCallback(async () => {
    try {
      await unauthUser();
    } catch (e: any) {
      dispatch(setIsAuthenticated(false));
      dispatch(setTokenExpiry(0));
      dispatch(setAccount(accountinitialState));
    }
  }, [dispatch, unauthUser]);

  useEffect(() => {
    if (logutData) {
      dispatch(setIsAuthenticated(false));
      dispatch(
        // set token expiry to 1 day - 10 min
        setTokenExpiry(0)
      );
      dispatch(setAccount(accountinitialState));
      // todo show toast
      //showToast({ message: 'Successfuly sign in', type: 'success' })
    }
  }, [dispatch, logutData, isLogoutSuccess]);

  return { signOut, logutData };
};

export const useSignUp = () => {
  const [
    signUpUser,
    {
      data: signUpData,
      isSuccess: isSignUpSuccess,
      isError: isSignUpErr,
      error: signUpErr,
      isLoading: signUpLoading,
    },
  ] = useSignUpUserMutation();

  const signUp = useCallback(
    async (data: TUserRegistration) => {
      try {
        await signUpUser(data);
      } catch (e: any) {
        //handle signUp error
      }
    },
    [signUpUser]
  );

  return { signUp, signUpData, signUpLoading };
};
