import {
  UseAuthenticatedRoute,
  UseNonAuthenticatedRoute,
} from "utils/authRoute";
import { UseProfile } from "app/state/profile/useProfile";
import { useSignOut } from "app/hooks/useCognitoAuth";

const Home = () => {
  // Redirect user to profile if they are authenticated
  UseAuthenticatedRoute();
  const profile = UseProfile();
  const { signOut } = useSignOut();

  const handleProfileClick = () => {
    console.log(profile);
  };
  const handleProfileClick2 = () => {
    signOut();
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <p>IM AT HOME NOW</p>
      <button
        className="border-2 border-gray-600 text-gray-600 px-4 py-1 mt-20 hover:border-gray-400 hover:text-gray-400"
        onClick={handleProfileClick}
      >
        Manage Profiles
      </button>
      <button
        className="border-2 border-gray-600 text-gray-600 px-4 py-1 mt-20 hover:border-gray-400 hover:text-gray-400"
        onClick={handleProfileClick2}
      >
        SIGNOUT
      </button>
    </div>
  );
};
export default Home;
