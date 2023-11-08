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
    signUp({
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
      <div className="bg-transparent flex flex-row justify-center w-full">
        <div className="bg-[url(https://c.animaapp.com/00hlfSVI/img/group.png)] bg-[100%_100%] w-[1920px] h-[1136.7px] relative">
          <div className="absolute w-[632px] h-[1080px] top-[46px] left-[643px] bg-[url(https://c.animaapp.com/00hlfSVI/img/vector.svg)] bg-[100%_100%]">
            <form onSubmit={handleSubmit}>
              <div className="absolute w-[191px] top-[11px] left-[222px] font-lapsus font-bold text-black text-[54px] tracking-[0.54px] leading-[normal] whitespace-nowrap">
                Register
              </div>
              <div className="absolute w-[443px] h-[92px] top-[97px] left-[97px]">
                <div className="absolute w-[181px] top-0 left-[6px] font-lapsus font-bold text-black text-[39px] tracking-[0.39px] leading-[normal] whitespace-nowrap">
                  First Name
                </div>
                <input
                  className="w-[441px] h-[49px] top-[43px] bg-[#e2e3e4] rounded-[22px] absolute left-0"
                  type="text"
                  name="firstname" // Set the name attribute for proper identification
                  onChange={handleOnInput}
                />
              </div>
              <div className="absolute w-[443px] h-[92px] top-[201px] left-[97px]">
                <div className="absolute w-[181px] top-0 left-[6px] font-lapsus font-bold text-black text-[39px] tracking-[0.39px] leading-[normal] whitespace-nowrap">
                  Last Name
                </div>
                <input
                  className="w-[441px] h-[49px] top-[43px] bg-[#e2e3e4] rounded-[22px] absolute left-0"
                  type="text"
                  name="lastname" // Set the name attribute for proper identification
                  onChange={handleOnInput}
                />
              </div>
              <div className="absolute w-[443px] h-[92px] top-[310px] left-[97px]">
                <div className="absolute w-[181px] top-0 left-[6px] font-lapsus font-bold text-black text-[39px] tracking-[0.39px] leading-[normal] whitespace-nowrap">
                  Email
                </div>
                <input
                  className="w-[441px] h-[49px] top-[43px] bg-[#e2e3e4] rounded-[22px] absolute left-0"
                  type="text"
                  name="email" // Set the name attribute for proper identification
                  onChange={handleOnInput}
                />
              </div>
              <div className="absolute w-[443px] h-[92px] top-[419px] left-[96px]">
                <div className="absolute w-[214px] top-0 left-[6px] font-lapsus font-bold text-black text-[39px] tracking-[0.39px] leading-[normal] whitespace-nowrap">
                  Date of Birth
                </div>
                <input
                  className="w-[441px] h-[49px] top-[43px] bg-[#e2e3e4] rounded-[22px] absolute left-0"
                  type="text"
                  name="dateOfBirth" // Set the name attribute for proper identification
                  onChange={handleOnInput}
                />
              </div>
              <div className="absolute w-[443px] h-[92px] top-[528px] left-[102px]">
                <div className="absolute w-[214px] top-0 left-[6px] font-lapsus font-bold text-black text-[39px] tracking-[0.39px] leading-[normal] whitespace-nowrap">
                  Username
                </div>
                <input
                  className="w-[441px] h-[49px] top-[43px] bg-[#e2e3e4] rounded-[22px] absolute left-0"
                  type="text"
                  name="username" // Set the name attribute for proper identification
                  onChange={handleOnInput}
                />
              </div>
              <div className="absolute w-[443px] h-[92px] top-[637px] left-[97px]">
                <div className="absolute w-[214px] top-0 left-[6px] font-lapsus font-bold text-black text-[39px] tracking-[0.39px] leading-[normal] whitespace-nowrap">
                  Password
                </div>
                <input
                  className="w-[441px] h-[49px] top-[43px] bg-[#e2e3e4] rounded-[22px] absolute left-0"
                  type="password"
                  name="password" // Set the name attribute for proper identification
                  onChange={handleOnInput}
                />
              </div>
              <div className="absolute w-[443px] h-[92px] top-[746px] left-[97px]">
                <div className="absolute w-[214px] top-0 left-[6px] font-lapsus font-bold text-black text-[39px] tracking-[0.39px] leading-[normal] whitespace-nowrap">
                  Confirm Password
                </div>

                <input
                  className="w-[441px] h-[49px] top-[43px] bg-[#e2e3e4] rounded-[22px] absolute left-0"
                  type="password"
                  name="confirmPassword" // Set the name attribute for proper identification
                  onChange={handleOnInput}
                />
              </div>
              <p className="absolute w-[390px] top-[1007px] left-[121px] font-gillsans font-normal text-black text-[28px] tracking-[0.28px] leading-[normal] whitespace-nowrap">
                Already have an account?{" "}
                <span className="underline" onClick={() => navigate("/login")}>
                  Sign in
                </span>
              </p>
              <button className="absolute w-[302px] h-[88px] top-[879px] left-[166px] all-[unset] box-border">
                <div className="relative w-[300px] h-[88px]">
                  <div className="w-[300px] h-[82px] top-[6px] bg-[#67ac44] rounded-[30px] absolute left-0" />
                  <div className="w-[300px] h-[77px] top-0 bg-[#84c455] rounded-[30px] absolute left-0" />
                  <div className="absolute w-[192px] top-[12px] left-[67px] font-lapsus font-bold text-black text-[53px] tracking-[1.85px] leading-[normal] whitespace-nowrap ">
                    <>
                      {signUpLoading ? (
                        <button disabled type="button">
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
                        <button type="submit">Sign up</button>
                      )}
                    </>
                  </div>
                </div>
              </button>
            </form>
          </div>
          <p className="absolute w-[419px] top-[131px] left-[65px] font-gillsans font-normal text-black text-[28px] tracking-[0.28px] leading-[normal] whitespace-nowrap">
            Show and tell: Deep learning
          </p>
          <img
            className="absolute w-[437px] h-[73px] top-[57px] left-[56px]"
            alt="Frame"
            src="https://c.animaapp.com/00hlfSVI/img/frame.svg"
          />
        </div>
      </div>
    </>
  );
};

export default Register;
