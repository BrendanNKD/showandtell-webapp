import { setAccount } from "features/accountSlice";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useGetAccountQuery } from "services/account/accountApi";
import { useAppSelector } from "./useHooks";

export const useGetAccount = async () => {
  const dispatch = useDispatch();
  const { data: accountData, isLoading, isError } = await useGetAccountQuery();
  if (!isLoading) {
    dispatch(setAccount(accountData));
  }
};
