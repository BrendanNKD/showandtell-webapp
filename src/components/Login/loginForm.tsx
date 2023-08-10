import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthUserMutation } from "services/auth/authApi";
import { useAppDispatch } from "app/hooks/useHooks";
import { setIsAuthenticated, setTokenExpiry } from "features/authSlice";
import { useSignIn } from "../../app/hooks/useCognitoAuth";
import { UseAuthenticatedRoute } from "utils/PrivateRoute";

type Form = {
  firstname: string;
  lastname: string;
  email: string;
  dateOfBirth: string;
  username: string;
  password: string;
};

const initialState: Form = {
  firstname: "",
  lastname: "",
  email: "",
  dateOfBirth: "",
  username: "",
  password: "",
};

const LoginForm = () => {
  const [formValue, setFormValue] = useState(initialState);
  const [showRegister, setShowRegister] = useState(false);
  const { signIn, loginData, isLoginSuccess, isErr, loginErr, loading } =
    useSignIn();

  const handleOnInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.currentTarget;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { username, password } = formValue;
    if (username && password) {
      console.log("click the button");
      await signIn({ username, password });
    } else {
      console.log("please input all fields");
    }
  };

  return (
    <div className="bg-gray-100 flex flex-col justify-center">
      <form
        className={`max-w-[500px] w-full mx-auto bg-white p-12 shadow-xl rounded-lg`}
        onSubmit={handleSubmit}
      >
        <h2 className="text-4xl font-bold text-center py-5">
          {!showRegister ? "Login" : "Register"}
        </h2>

        {showRegister && (
          <>
            <div className="flex flex-col py-2">
              <label htmlFor="">firstname</label>
              <input
                className="border p-2"
                type="text"
                name="firstname" // Set the name attribute for proper identification
                onChange={handleOnInput}
              />
            </div>
            <div className="flex flex-col py-2">
              <label htmlFor="">lastname</label>
              <input
                className="border p-2"
                type="text"
                name="lastname" // Set the name attribute for proper identification
                onChange={handleOnInput}
              />
            </div>
            <div className="flex flex-col py-2">
              <label htmlFor="">email</label>
              <input
                className="border p-2"
                type="text"
                name="email" // Set the name attribute for proper identification
                onChange={handleOnInput}
              />
            </div>

            <div className="relative max-w-sm">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </div>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Select date"
                name="dateOfBirth"
                onChange={handleOnInput}
              />
            </div>
          </>
        )}

        <div className="flex flex-col py-2">
          <label htmlFor="">Username</label>
          <input
            className="border p-2"
            type="text"
            name="username" // Set the name attribute for proper identification
            onChange={handleOnInput}
          />
        </div>

        <div className="flex flex-col py-2">
          <label htmlFor="">Password</label>
          <input
            className="border p-2"
            type="password"
            name="password" // Set the name attribute for proper identification
            onChange={handleOnInput}
          />
        </div>

        {showRegister && (
          <>
            <div className="flex flex-col py-2">
              <label htmlFor="">confirm password</label>
              <input
                className="border p-2"
                type="password"
                name="password" // Set the name attribute for proper identification
                onChange={handleOnInput}
              />
            </div>
          </>
        )}

        {!showRegister ? (
          <button
            type="submit"
            className="border w-full my-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white"
          >
            Sign In
          </button>
        ) : (
          <button
            type="submit"
            className="border w-full my-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white"
          >
            Register
          </button>
        )}

        {!showRegister ? (
          <div className="flex justify-between">
            <p className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Remember Me
            </p>
            <p onClick={() => setShowRegister(true)}>Create an account</p>
          </div>
        ) : (
          <div className="flex justify-center space-x-2">
            <p className="flex items-center ">Already have an account?</p>
            <p onClick={() => setShowRegister(false)}>Sign In</p>
          </div>
        )}
      </form>
    </div>
  );
};
export default LoginForm;
function useNonAuthenticatedRoute() {
  throw new Error("Function not implemented.");
}
