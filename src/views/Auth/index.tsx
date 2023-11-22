import { useSignIn } from "../../app/hooks/useCognitoAuth";

import { UseNonAuthenticatedRoute } from "utils/authRoute";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type Form = {
  username: string;
  password: string;
};

const initialState: Form = {
  username: "",
  password: "",
};

const Login = () => {
  // TODO
  // verification page
  // Restrict user when not verified
  UseNonAuthenticatedRoute();
  const navigate = useNavigate();
  const [formValue, setFormValue] = useState(initialState);
  const { signIn, authloading, accountData, collectionData } = useSignIn();

  const handleOnInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.currentTarget;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { username, password } = formValue;
    if (!username || !password) {
      toast.error("Please fill in the nessasary informations");
      return;
    }
    await signIn({ username, password })
      .then(() => {})
      .catch((err: any) => {
        //error thats not session related
        //or catch using a middle ware to be more clean
      });
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />

      <div className="bg-transparent flex flex-row justify-center w-full h-screen relative bg-[url(https://c.animaapp.com/T0wogGC4/img/group.png)] bg-cover">
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
              <div className="bg-white p-16 rounded-2xl shadow-md w-full sm:w-2/4 md:w-2/4 xl:w-1/4">
                <h1 className="text-4xl font-bold mb-6 font-lapsus text-black">
                  Log In
                </h1>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex flex-col">
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

                  <div className="flex flex-col">
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

                  <div className="flex justify-center pt-10">
                    <button
                      type="submit"
                      className="w-2/4 py-2 bg-[#67ac44] text-black rounded-lg font-lapsus font-bold text-[15px] sm:text-[20px] xl:text-[30px]"
                    >
                      {authloading || accountData || collectionData ? (
                        <>
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
                        </>
                      ) : (
                        "Sign In"
                      )}
                    </button>
                  </div>
                </form>

                <div className="mt-6 text-sm flex  justify-center">
                  <button
                    className="underline"
                    onClick={() => navigate("/register")}
                  >
                    Create an account
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="absolute w-[632px] h-[618px] top-[240px] left-[644px] bg-white rounded-[67px]">
            <div className="absolute w-[632px] h-[618px] top-0 left-0 bg-white rounded-[67px]" />
            <form onSubmit={handleSubmit}>
              <div className="absolute w-[148px] top-[88px] left-[242px] font-lapsus font-bold text-black text-[54px] tracking-[0.54px] leading-[normal] whitespace-nowrap">
                Log In
              </div>
              <div className="absolute w-[214px] top-[174px] left-[101px] font-lapsus font-bold text-black text-[39px] tracking-[0.39px] leading-[normal] whitespace-nowrap">
                Username
              </div>

              <input
                className="absolute w-[441px] h-[49px] top-[218px] left-[95px] bg-[#e2e3e4] rounded-[22px]"
                type="text"
                name="username" // Set the name attribute for proper identification
                onChange={handleOnInput}
              />

              <div className="absolute w-[214px] top-[290px] left-[101px] font-lapsus font-bold text-black text-[39px] tracking-[0.39px] leading-[normal] whitespace-nowrap">
                Password
              </div>

              <input
                className="absolute w-[441px] h-[49px] top-[334px] left-[95px] bg-[#e2e3e4] rounded-[22px]"
                type="password"
                name="password" // Set the name attribute for proper identification
                onChange={handleOnInput}
              />

              <div className="absolute w-[228px] h-[79px] top-[457px] left-[194px] bg-[#67ac44] rounded-[23px]" />
              <div className="absolute w-[228px] h-[80px] top-[447px] left-[194px] bg-[#84c455] rounded-[24px]" />
              <div className="absolute w-[102px] top-[464px] left-[249px] font-lapsus font-bold text-black text-[43px] tracking-[1.50px] leading-[normal] whitespace-nowrap">
                <>
                  {authloading || accountData || collectionData ? (
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
                    <button type="submit">Sign In</button>
                  )}
                </>
              </div>
            </form>
            <div className="absolute w-[228px] h-[80px] top-[550px] left-[240px] font-lapsus  font-bold text-black text-[20px] tracking-[0.39px] leading-[normal] whitespace-nowrap underline">
              <p onClick={() => navigate("/register")}>Create an account</p>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};
export default Login;
