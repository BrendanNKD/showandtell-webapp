// import { useAppDispatch } from "../../app/useHooks";
import { setIsAuthenticated } from "features/authSlice";
import { useAppDispatch } from "app/hooks/useHooks";
import { useSignOut } from "app/hooks/useCognitoAuth";
import { UseAuthenticatedRoute } from "utils/PrivateRoute";
const Home = () => {
  // Redirect user to profile if they are authenticated
  UseAuthenticatedRoute();
  const { signOut, loginData, isLoginSuccess, isErr, loginErr, loading } =
    useSignOut();
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    signOut();
  };

  return (
    <div>
      <p>HOMEPAGE HERE!</p>
      <button
        type="submit"
        className="border w-full my-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white"
        onClick={handleSubmit}
      >
        Sign Out
      </button>
    </div>
  );
};
export default Home;
function useNonAuthenticatedRoute() {
  throw new Error("Function not implemented.");
}
