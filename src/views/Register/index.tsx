import { useEffect, useState } from "react";
import { useSignUp } from "../../app/hooks/useCognitoAuth";
import { useNavigate } from "react-router-dom";
import { UseNonAuthenticatedRoute } from "utils/authRoute";
import toast, { Toaster } from "react-hot-toast";

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

const Register = () => {
  UseNonAuthenticatedRoute();
  const navigate = useNavigate();
  const [formValue, setFormValue] = useState(initialState);
  const { signUp, signUpData, signUpLoading } = useSignUp();

  const handleOnInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.currentTarget;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
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
      toast.error("Password does not match");
      return;
    }

    if (!firstname || !lastname || !email || !dateOfBirth || !username) {
      toast.error("Please fill in the nessasary informations");
      return;
    }
    // password restriction
    await signUp({
      username: username,
      password: password,
      email: email,
      profiles: [
        {
          dateOfBirth: dateOfBirth,
          firstName: firstname,
          lastName: lastname,
          profilePic: Math.floor(Math.random() * 4),
          stars: 0,
          level: 1,
          totalStars: 0,
        },
      ],
    })
      .then(() => {})
      .catch((err: any) => {
        //error thats not session related
        //or catch using a middle ware to be more clean
      });
  };
  useEffect(() => {
    if (signUpData) {
      navigate(`/registration/confirmOtp?username=${formValue.username}`);
    }
  }, [signUpData, navigate, formValue]);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="bg-transparent flex flex-row justify-center w-full h-screen relative bg-[url(https://c.animaapp.com/T0wogGC4/img/group.png)] bg-cover overflow-y-auto">
        <div className="w-full h-screen relative">
          <div className="flex flex-col px-4 md:px-10 py-10">
            <img
              className="relative w-[130px] xl:w-[300px] md:w-[300px] sm:w-[200px]"
              alt="Frame"
              src="https://c.animaapp.com/T0wogGC4/img/frame-1.svg"
            />
            <p className="relative font-gillsans font-normal text-black text-[13px] sm:text-[20px] md:w-[25px] tracking-[0.28px] leading-[normal] whitespace-nowrap">
              Show and tell: Deep learning
            </p>
            <div className="pt-28 flex flex-row justify-center">
              <div className="bg-white p-16 rounded-2xl shadow-md w-full sm:w-2/4 md:w-2/4 xl:w-2/4">
                <form
                  onSubmit={handleSubmit}
                  className="bg-white p-8 rounded-lg  w-full"
                >
                  <h1 className="text-4xl font-bold mb-6 font-lapsus text-black">
                    Register
                  </h1>

                  {/* First Name */}
                  <div className="mb-6">
                    <label
                      htmlFor="firstname"
                      className="text-lg font-bold mb-2"
                    >
                      First Name
                    </label>
                    <input
                      id="firstname"
                      type="text"
                      name="firstname"
                      onChange={handleOnInput}
                      className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  {/* Last Name */}
                  <div className="mb-6">
                    <label
                      htmlFor="lastname"
                      className="text-lg font-bold mb-2"
                    >
                      Last Name
                    </label>
                    <input
                      id="lastname"
                      type="text"
                      name="lastname"
                      onChange={handleOnInput}
                      className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  {/* Email */}
                  <div className="mb-6">
                    <label htmlFor="email" className="text-lg font-bold mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      type="text"
                      name="email"
                      onChange={handleOnInput}
                      className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  {/* Date of Birth */}
                  <div className="mb-6">
                    <label
                      htmlFor="dateOfBirth"
                      className="text-lg font-bold mb-2"
                    >
                      Date of Birth
                    </label>
                    <input
                      id="dateOfBirth"
                      type="text"
                      name="dateOfBirth"
                      onChange={handleOnInput}
                      className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  {/* Username */}
                  <div className="mb-6">
                    <label
                      htmlFor="username"
                      className="text-lg font-bold mb-2"
                    >
                      Username
                    </label>
                    <input
                      id="username"
                      type="text"
                      name="username"
                      onChange={handleOnInput}
                      className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  {/* Password */}
                  <div className="mb-6">
                    <label
                      htmlFor="password"
                      className="text-lg font-bold mb-2"
                    >
                      Password
                    </label>
                    <input
                      id="password"
                      type="password"
                      name="password"
                      onChange={handleOnInput}
                      className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  {/* Confirm Password */}
                  <div className="mb-6">
                    <label
                      htmlFor="confirmPassword"
                      className="text-lg font-bold mb-2"
                    >
                      Confirm Password
                    </label>
                    <input
                      id="confirmPassword"
                      type="password"
                      name="confirmPassword"
                      onChange={handleOnInput}
                      className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <p className="text-sm text-center mb-6">
                    Already have an account?{" "}
                    <button
                      className="underline"
                      onClick={() => navigate("/login")}
                    >
                      Sign in
                    </button>
                  </p>
                  <div className="flex justify-center pt-10">
                    <button
                      className="w-2/4 py-2 bg-[#67ac44] text-black rounded-lg font-lapsus font-bold text-[15px] sm:text-[20px] xl:text-[30px]"
                      disabled={signUpLoading}
                      type="submit"
                    >
                      {signUpLoading ? (
                        <>
                          <svg
                            aria-hidden="true"
                            role="status"
                            className="inline w-4 h-4 mr-3 text-gray-200 animate-spin dark:text-gray-600"
                            viewBox="0 0 100 101"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            {/* SVG path here */}
                          </svg>
                          Loading...
                        </>
                      ) : (
                        "Sign up"
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
