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
  useUnauthUserMutation,
} from "services/auth/authApi";
import {
  useSignUpUserMutation,
  useConfirmSignUpMutation,
} from "services/signUp/signUp";

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

  const signIn = useCallback(
    async (data: TUserLogin) => {
      const { username, password } = data;
      try {
        await authUser({ username, password }).unwrap();

        //todo get profileY
        //await getCurrentUserInfo(dispatch)
        // todo show toast
        //showToast({ message: 'Successfuly sign in', type: 'success' })
      } catch (e: any) {
        dispatch(setIsAuthenticated(false));
        dispatch(setTokenExpiry(0));
        dispatch(setAccount(accountinitialState));

        if (e.data.err === "UserNotConfirmedException") {
          navigate(`/registration/confirmOtp?username=${username}`);
        }
      }
    },
    [authUser, dispatch, navigate]
  );

  useEffect(() => {
    if (isLoginSuccess) {
      dispatch(setIsAuthenticated(true));
      dispatch(
        // set token expiry to 1 day - 10 min
        setTokenExpiry(new Date().getTime() / 1000 + 24 * 60 * 60 - 600)
      );
    }
  }, [dispatch, loginData, isLoginSuccess]);

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
      await unauthUser().unwrap();
    } catch (e: any) {
      dispatch(setIsAuthenticated(false));
      dispatch(setTokenExpiry(0));
      dispatch(setAccount(accountinitialState));
      dispatch(setProfile(null));
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
      dispatch(setProfile(null));
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
        await signUpUser(data).unwrap();
      } catch (e: any) {
        //handle signUp error
      }
    },
    [signUpUser]
  );

  return { signUp, signUpData, signUpLoading };
};

export const useConfirmSignUp = () => {
  const navigate = useNavigate();
  const [
    confirmSignUp,
    {
      data: confirmSignUpData,
      isSuccess: isconfirmSignUpSuccess,
      isError: isconfirmSignUpErr,
      error: confirmSignUpErr,
      isLoading: confirmSignUpLoading,
    },
  ] = useConfirmSignUpMutation();

  const confirmOtp = useCallback(
    async (data: TUserConfirmOtp) => {
      try {
        await confirmSignUp(data).unwrap();
      } catch (e: any) {
        //handle signUp error
      }
    },
    [confirmSignUp]
  );

  useEffect(() => {
    if (isconfirmSignUpSuccess) {
      // currently reauthenticate first no way
      navigate("/login");
    } else {
      //toast to show confirm sign up error
      //second layer defense after try catch
    }
  }, [isconfirmSignUpSuccess, navigate]);

  return { confirmOtp, confirmSignUpData, isconfirmSignUpSuccess };
};

export const useResendConfirmSignUp = () => {
  const navigate = useNavigate();
  const [
    confirmSignUp,
    {
      data: confirmSignUpData,
      isSuccess: isconfirmSignUpSuccess,
      isError: isconfirmSignUpErr,
      error: confirmSignUpErr,
      isLoading: confirmSignUpLoading,
    },
  ] = useConfirmSignUpMutation();

  const confirmOtp = useCallback(
    async (data: TUserConfirmOtp) => {
      try {
        await confirmSignUp(data).unwrap();
      } catch (e: any) {
        //handle signUp error
      }
    },
    [confirmSignUp]
  );

  useEffect(() => {
    if (isconfirmSignUpSuccess) {
      // currently reauthenticate first no way
      navigate("/login");
    } else {
      //toast to show confirm sign up error
      //second layer defense after try catch
    }
  }, [isconfirmSignUpSuccess, navigate]);

  return { confirmOtp, confirmSignUpData, isconfirmSignUpSuccess };
};
