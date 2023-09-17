import { accountinitialState, setAccount } from "features/accountSlice";
import { setIsAuthenticated, setTokenExpiry } from "features/authSlice";
import { setProfile } from "features/profileSlice";
import { Dispatch } from "redux";

export const resetState = (dispatch: Dispatch) => {
  dispatch(setIsAuthenticated(false));
  dispatch(setTokenExpiry(0));
  dispatch(setAccount(accountinitialState));
  dispatch(setProfile(null));
};
