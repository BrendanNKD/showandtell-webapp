import { useEffect, useState } from "react";
import { useSignIn, useSignUp } from "../../app/hooks/useCognitoAuth";
import { useNavigate } from "react-router-dom";
import { useGetAccount } from "app/hooks/useGetAccount";

type Form = {
  firstname: string;
  lastname: string;
  email: string;
  dateOfBirth: string;
  username: string;
  password: string;
  confirmPassword: string;
};

const initialState: Form = {
  firstname: "",
  lastname: "",
  email: "",
  dateOfBirth: new Date().toLocaleDateString(),
  username: "",
  password: "",
  confirmPassword: "",
};

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const [formValue, setFormValue] = useState(initialState);
  const [showRegister, setShowRegister] = useState(false);
  const {
    signIn,
    loginData,
    isLoginSuccess,
    loginisErr,
    loginErr,
    authloading,
  } = useSignIn();

  const { signUp, signUpData, signUpLoading } = useSignUp();

  const handleOnInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.currentTarget;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { username, password } = formValue;
    if (username && password) {
      await signIn({ username, password });
    } else {
    }
  };

  const handleSignUp = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const {
      firstname,
      lastname,
      email,
      dateOfBirth,
      username,
      password,
      confirmPassword,
    } = formValue;
    if (password !== confirmPassword) {
      return;
    }

    if (!firstname || !lastname || !email || !dateOfBirth || !username) {
      return;
    }
    // password restriction
    signUp({
      username: username,
      password: password,
      profiles: [
        {
          email: email,
          dateOfBirth: dateOfBirth,
          firstName: firstname,
          lastName: lastname,
          profilePic: Math.floor(Math.random() * 4),
        },
      ],
    });
  };

  useEffect(() => {
    if (signUpData) {
      console.log(signUpData);
      navigate(`/registration/confirmOtp?username=${formValue.username}`);
    }
  }, [formValue, navigate, signUpData]);

  return (
    <>
      <div className="bg-gray-100 flex flex-col justify-center">
        <form
          className={`max-w-[500px] w-full mx-auto bg-white p-12 shadow-xl rounded-lg`}
          onSubmit={showRegister ? handleSignUp : handleSubmit}
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

              <div className="flex flex-col py-2">
                <label htmlFor="">Date of birth</label>
                <input
                  className="border p-2"
                  type="text"
                  name="dateOfBirth" // Set the name attribute for proper identification
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
                  name="confirmPassword" // Set the name attribute for proper identification
                  onChange={handleOnInput}
                />
              </div>
            </>
          )}

          {!showRegister ? (
            <>
              {authloading ? (
                <button
                  disabled
                  type="button"
                  className="border w-full my-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg"
                >
                  <svg
                    aria-hidden="true"
                    role="status"
                    className="inline w-4 h-4 mr-3 text-gray-200 animate-spin dark:text-gray-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="#1C64F2"
                    />
                  </svg>
                  Loading...
                </button>
              ) : (
                <button
                  type="submit"
                  className="border w-full my-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg"
                >
                  Sign In
                </button>
              )}
            </>
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
    </>
  );
};
export default LoginForm;
