import { accountinitialState, setAccount } from "features/accountSlice";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  useAddProfileMutation,
  useGetAccountQuery,
} from "services/account/accountApi";
import { useAppSelector } from "./useHooks";
import { setIsAuthenticated, setTokenExpiry } from "features/authSlice";
import { setProfile } from "features/profileSlice";
import { resetState } from "utils/resetState";
import { ErrorHandler } from "utils/errorHandler";
import { useCallback, useEffect } from "react";
// import { useGetCollection } from "./useCollection";
import { setCollection } from "features/collectionSlice";
import { useGetCollectionQuery } from "services/collection";
import { ProfileResponseModel } from "domain/types/profile/Profile";

// export const useGetAccount = () => {
//   const dispatch = useDispatch();
//   const { data: accountData, isLoading, isError, error } = useGetAccountQuery();

//   const setProfileState = useCallback(
//     async (index: number) => {
//       await dispatch(setProfile(index));
//     },
//     [dispatch]
//   );

//   useEffect(() => {
//     if (accountData) {
//       dispatch(setAccount(accountData));
//     }
//   }, [accountData, dispatch]);

//   useEffect(() => {
//     ErrorHandler(error, dispatch);
//   }, [error, dispatch]);

//   return {
//     setProfileState,
//     accountData,
//   };
// };

export const useAddProfile = () => {
  const dispatch = useDispatch();
  const [
    addProfile,
    {
      data: newAccountData,
      isSuccess: isaddProfileSuccess,
      isError: isaddProfileErr,
      error: addProfileErr,
      isLoading: addProfileLoading,
    },
  ] = useAddProfileMutation();

  const addNewProfile = useCallback(
    async (data: ProfileResponseModel) => {
      await addProfile(data);
    },
    [addProfile]
  );

  useEffect(() => {
    if (isaddProfileSuccess) {
      dispatch(setAccount(newAccountData));
    } else {
      //toast to show confirm sign up error
      //second layer defense after try catch
    }
  }, [dispatch, isaddProfileSuccess, newAccountData]);

  return { addNewProfile, addProfileLoading, isaddProfileSuccess };
};

export const useSetProfile = () => {
  const dispatch = useDispatch();

  const setProfileState = useCallback(
    async (index: number) => {
      await dispatch(setProfile(index));
    },
    [dispatch]
  );

  return {
    setProfileState,
  };
};
