import { accountinitialState, setAccount } from "features/accountSlice";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useGetAccountQuery } from "services/account/accountApi";
import { useAppSelector } from "./useHooks";
import { setIsAuthenticated, setTokenExpiry } from "features/authSlice";
import { setProfile } from "features/profileSlice";
import { resetState } from "utils/resetState";
import { ErrorHandler } from "utils/errorHandler";
import { useCallback, useEffect } from "react";
// import { useGetCollection } from "./useCollection";
import { setCollection } from "features/collectionSlice";
import { useGetCollectionQuery } from "services/collection";

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
