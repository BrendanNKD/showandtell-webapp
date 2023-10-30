import { setAccount } from "features/accountSlice";
import { useDispatch } from "react-redux";
import {
  useAddProfileMutation,
  useGetLevelQuery,
  useUpdateProfileMutation,
} from "services/account/accountApi";
import { setProfile } from "features/profileSlice";
import { useCallback, useEffect } from "react";
// import { useGetCollection } from "./useCollection";
import {
  ProfileResponseModel,
  UpdateProfileRequestModel,
} from "domain/types/profile/Profile";
import { useAddStarsMutation } from "services/account/accountApi";
import { UseProfile } from "app/state/profile/useProfile";
export const useAddProfile = () => {
  const dispatch = useDispatch();
  const [
    addProfile,
    {
      data: newAccountData,
      isSuccess: isaddProfileSuccess,
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

export const useUpdateProfile = () => {
  const dispatch = useDispatch();
  const [
    updateProfile,
    {
      data: newAccountData,
      isSuccess: isupdateProfileSuccess,
      isLoading: updateProfileLoading,
    },
  ] = useUpdateProfileMutation();

  const update = useCallback(
    async (data: UpdateProfileRequestModel) => {
      await updateProfile(data);
    },
    [updateProfile]
  );

  useEffect(() => {
    if (isupdateProfileSuccess) {
      // dispatch(setAccount(newAccountData));
      if (newAccountData.leveled) {
        //DISPLAY LEVEL UP SOMETHING
        //reset account details
      }
      dispatch(setAccount(newAccountData.result));
    } else {
      //toast to show confirm sign up error
      //second layer defense after try catch
    }
  }, [dispatch, isupdateProfileSuccess, newAccountData]);

  return {
    update,
    updateProfileLoading,
    newAccountData,
    isupdateProfileSuccess,
  };
};

export const useAddStars = () => {
  const dispatch = useDispatch();
  const [
    addStars,
    {
      data: newStarsData,
      isSuccess: isnewStarsSuccess,
      isLoading: newStarsLoading,
    },
  ] = useAddStarsMutation();

  const updateStars = useCallback(
    async (data: any) => {
      await addStars(data);
    },
    [addStars]
  );

  useEffect(() => {
    if (newStarsData) {
      // dispatch(setAccount(newAccountData));
      if (newStarsData.leveled) {
        console.log("I HAVE LEVELED UP");
      }
      dispatch(setAccount(newStarsData.result));
    } else {
      //toast to show confirm sign up error
      //second layer defense after try catch
    }
  }, [dispatch, newStarsData]);

  return {
    updateStars,
    newStarsData,
    isnewStarsSuccess,
    newStarsLoading,
  };
};
