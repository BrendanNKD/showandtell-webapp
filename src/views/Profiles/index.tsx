// import { useAppDispatch } from "../../app/useHooks";
import { setIsAuthenticated } from "features/authSlice";
import { useAppDispatch } from "app/hooks/useHooks";
import { useSignOut } from "app/hooks/useCognitoAuth";
import { UseAuthenticatedRoute } from "utils/authRoute";
import { UseAccount } from "../../app/state/account/useAccount";
import { useEffect, useState } from "react";
import {
  ProfilePicSelectionCard,
  ProfileSelectionCard,
} from "../../components/proflieSelection";
import { useDispatch } from "react-redux";
import { setProfile } from "features/profileSlice";
import { useNavigate } from "react-router-dom";
import { UseProfile } from "app/state/profile/useProfile";
import { useGetAccount } from "app/hooks/useGetAccount";
import { ProfileResponseModel } from "domain/types/profile/Profile";

const Profiles = () => {
  // Redirect user to profile if they are authenticated
  const { setProfileState, accountData } = useGetAccount();
  const [profiles, setProfiles] = useState<ProfileResponseModel[] | []>([]);
  UseAuthenticatedRoute();

  const navigate = useNavigate();
  const { signOut } = useSignOut();

  const handleProfileClick = (index: number) => {
    // console.log(index);
    // dispatch(setProfile(index));
    setProfileState(index);
    navigate("/home");
  };

  const handleLogout = async (event: any) => {
    event.preventDefault();
    signOut();
  };

  useEffect(() => {
    if (accountData) setProfiles(accountData.profiles);
  }, [accountData]);

  return (
    <>
      <div className="bg-black h-screen flex flex-col items-center justify-center">
        {/* Title */}
        <h1 className="text-gray-200 text-5xl">Select Profile</h1>

        {/* Profiles */}
        <div className="flex flex-row flex-wrap gap-5 mt-8">
          {/* Profile 1 */}
          {profiles.map((object, index) => {
            return (
              <div
                key={index}
                className={`rounded-lg p-4 cursor-pointer`}
                onClick={() => handleProfileClick(index)}
              >
                {ProfileSelectionCard({ object, index })}
              </div>
            );
          })}
          {/* Add Profile */}
          <button
            className="flex flex-col items-center group gap-3"
            // onClick={handleLogout}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-[150px] w-[150px] group-hover:bg-gray-300 border-2 border-transparent"
              viewBox="0 0 20 20"
              fill="#6b7280"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-gray-500 group-hover:text-gray-300">Sign Out</p>
          </button>
        </div>

        {/* Manage Profiles */}
        <button
          className="border-2 border-gray-600 text-gray-600 px-4 py-1 mt-20 hover:border-gray-400 hover:text-gray-400"
          onClick={handleLogout}
        >
          Sign out
        </button>
      </div>
    </>
  );
};
export default Profiles;
