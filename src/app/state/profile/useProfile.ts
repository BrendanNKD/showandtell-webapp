import { useAppSelector } from "../../hooks/useHooks";
import { selectProfile } from "features/profileSlice";
import { selectAccount } from "features/accountSlice";

export const UseProfile = () => {
  const { profile } = useAppSelector(selectProfile);
  const { profiles } = useAppSelector(selectAccount);
  if (profile !== null) {
    return profiles[profile];
  }
  return null;
};

export const UseProfileIndex = () => {
  const { profile } = useAppSelector(selectProfile);
  return profile;
};

export const UseIsMain = () => {
  const { isMain } = useAppSelector(selectProfile);
  return isMain;
};

export const UseProfileName = () => {
  const { profile } = useAppSelector(selectProfile);
  const { profiles } = useAppSelector(selectAccount);
  if (profile !== null) {
    const fullname =
      profiles[profile].firstName + " " + profiles[profile].lastName;
    return fullname;
  }

  return null;
};
