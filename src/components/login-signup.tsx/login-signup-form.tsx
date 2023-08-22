import { useEffect, useState } from "react";
import { useSignIn, useSignUp } from "../../app/hooks/useCognitoAuth";
import DatePicker from "react-datepicker";

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
  dateOfBirth: "",
  username: "",
  password: "",
  confirmPassword: "",
};

const LoginForm = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
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
      console.log("password is not same");
      return;
    }

    if (!firstname || !lastname || !email || !dateOfBirth || !username) {
      return;
    }

    signUp({
      username: username,
      password: password,
      profiles: [
        {
          email: email,
          dateOfBirth: dateOfBirth,
          firstName: firstname,
          lastName: lastname,
        },
      ],
    });
  };

  useEffect(() => {
    if (signUpData) {
      console.log("SUCCESSFULLY CREATED");
      setShowRegister(false);
    }
  }, [signUpData]);

  return (
    <>
      <script src="../path/to/flowbite/dist/datepicker.js"></script>
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

              <div className="flex flex-col py-2">
                <label htmlFor="">Date of birth</label>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  isClearable
                  placeholderText="I have been cleared!"
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
    </>
  );
};
export default LoginForm;
