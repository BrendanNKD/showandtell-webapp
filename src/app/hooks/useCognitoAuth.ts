import { TUserLogin } from "domain/types/auth/UserLogin";
import {
  ChangePassword,
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
  useChangePasswordMutation,
  useUnauthUserMutation,
} from "services/auth/authApi";
import {
  useSignUpUserMutation,
  useConfirmSignUpMutation,
} from "services/signUp/signUp";
// import { useGetCollection } from "./useCollection";
import { resetCollection, setCollection } from "features/collectionSlice";
import { useGetAccountQuery } from "services/account/accountApi";
import { useGetCollectionQuery } from "services/collection";
import { AwsErrorHandler } from "utils/errorHandler";

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
        // .then((payload) => console.error("fufilled"))
        // .catch((error) => console.error("rejected", error));

        //todo get profileY
        //await getCurrentUserInfo(dispatch)
        // todo show toast

        //showToast({ message: 'Successfuly sign in', type: 'success' })
      } catch (e: any) {
        AwsErrorHandler(e);
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

  const { data: accountData } = useGetAccountQuery(undefined, {
    skip: !loginData,
  });

  const { data: collectionData } = useGetCollectionQuery(undefined, {
    skip: !loginData,
  });

  useEffect(() => {
    if (loginData && accountData && collectionData) {
      dispatch(setAccount(accountData));
      dispatch(setCollection(collectionData));
      dispatch(
        // set token expiry to 1 day - 10 min
        setTokenExpiry(new Date().getTime() / 1000 + 24 * 60 * 60 - 600)
      );
      dispatch(setIsAuthenticated(true));
    }
  }, [dispatch, loginData, isLoginSuccess, accountData, collectionData]);

  return {
    signIn,
    loginData,
    isLoginSuccess,
    loginisErr,
    loginErr,
    authloading,
    accountData,
    collectionData,
  };
};

export const useSignOut = () => {
  const dispatch = useDispatch();

  const [
    unauthUser,
    {
      data: logutData,
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
      dispatch(resetCollection([]));
    }
  }, [dispatch, unauthUser]);

  useEffect(() => {
    if (logutData) {
      dispatch(setAccount(accountinitialState));
      dispatch(
        // set token expiry to 1 day - 10 min
        setTokenExpiry(0)
      );
      dispatch(setProfile(null));
      dispatch(resetCollection([]));

      dispatch(setIsAuthenticated(false));

      // todo show toast
      //showToast({ message: 'Successfuly sign in', type: 'success' })
    } else if (logutData === "expired") {
      
    }
  }, [dispatch, logutData]);

  return { signOut, logutData };
};

export const useSignUp = () => {
  const [
    signUpUser,
    {
      data: signUpData,
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

export const useChangePassword = () => {
  const [
    changePassword,
    {
      data: changePasswordData,
      isSuccess: ischangePasswordSuccess,
      isLoading: changePasswordLoading,
    },
  ] = useChangePasswordMutation();

  const updatePassword = useCallback(
    async (data: ChangePassword) => {
      try {
        await changePassword(data).unwrap();
      } catch (e: any) {
        //handle signUp error
      }
    },
    [changePassword]
  );

  return {
    updatePassword,
    changePasswordData,
    changePasswordLoading,
    ischangePasswordSuccess,
  };
};
