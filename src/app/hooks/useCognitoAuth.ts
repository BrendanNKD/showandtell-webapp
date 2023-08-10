import { TUserLogin } from "domain/types/UserLogin";
import { setIsAuthenticated, setTokenExpiry } from "features/authSlice";
import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAuthUserMutation } from "services/auth/authApi";

export const useSignIn = () => {
  console.log("im in the sign in function");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [
    authUser,
    {
      data: loginData,
      isSuccess: isLoginSuccess,
      isError: isErr,
      error: loginErr,
      isLoading: loading,
    },
  ] = useAuthUserMutation();

  const signIn = useCallback(
    async (data: TUserLogin) => {
      const { username, password } = data;
      try {
        await authUser({ username, password });
        //todo get profile
        //await getCurrentUserInfo(dispatch)
        dispatch(setIsAuthenticated(true));
        dispatch(
          // set token expiry to 1 day - 10 min
          setTokenExpiry(new Date().getTime() / 1000 + 24 * 60 * 60 - 600)
        );
        //   console.log("navigating");
        //   navigate("/home");

        // todo show toast
        //showToast({ message: 'Successfuly sign in', type: 'success' })
      } catch (e: any) {
        dispatch(setIsAuthenticated(false));
        dispatch(setTokenExpiry(0));

        if (e.response.data.code === "UserNotConfirmedException") {
          navigate(`/registration/confirmOtp?username=${username}`);
        }
      }
    },
    [authUser, dispatch, navigate]
  );

  useEffect(() => {
    if (loginData && isLoginSuccess) {
      dispatch(setIsAuthenticated(true));
      dispatch(
        // set token expiry to 1 day - 10 min
        setTokenExpiry(new Date().getTime() / 1000 + 24 * 60 * 60 - 600)
      );
    }
  }, [dispatch, loginData, isLoginSuccess]);

  return { signIn, loginData, isLoginSuccess, isErr, loginErr, loading };
};

export const useSignOut = () => {
  const dispatch = useDispatch();

  const [
    authUser,
    {
      data: loginData,
      isSuccess: isLoginSuccess,
      isError: isErr,
      error: loginErr,
      isLoading: loading,
    },
  ] = useAuthUserMutation();

  const signOut = useCallback(async () => {
    try {
      //logout user backend
      //await loginUser();
      //todo get profile
      //await getCurrentUserInfo(dispatch)
      dispatch(setIsAuthenticated(false));
      dispatch(
        // set token expiry to 1 day - 10 min
        setTokenExpiry(0)
      );
      // todo show toast
      //showToast({ message: 'Successfuly sign in', type: 'success' })
    } catch (e: any) {
      dispatch(setIsAuthenticated(false));
      dispatch(setTokenExpiry(0));
    }
  }, [dispatch]);
  return { signOut, loginData, isLoginSuccess, isErr, loginErr, loading };
};
