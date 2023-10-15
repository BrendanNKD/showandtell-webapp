import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { TUserConfirmOtp } from "domain/types/auth/UserRegistration";
import { useConfirmSignUp } from "app/hooks/useCognitoAuth";

const ConfirmOtp = () => {
  const [searchParams] = useSearchParams();
  const username = searchParams.get("username");

  const { confirmOtp } = useConfirmSignUp();

  const [otpValues, setOtpValues] = useState<string[]>([
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

  const handleInput = (index: number, value: string) => {
    if (value.length <= 1) {
      const newOtpValues = [...otpValues];
      newOtpValues[index] = value;
      setOtpValues(newOtpValues);

      if (value.length === 1 && index < otpValues.length - 1) {
        const nextInput = document.querySelector<HTMLInputElement>(
          `#input-${index + 1}`
        );
        if (nextInput) {
          nextInput.focus();
        }
      }
    }
  };

  const verifyAccount = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (username) {
      const combinedOTP = otpValues.join("");
      const data: TUserConfirmOtp = { username: username, otp: combinedOTP };
      confirmOtp(data);
    } else {
    }
  };

  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-12">
      <div className="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-xl rounded-2xl">
        <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
          <div className="flex flex-col items-center justify-center text-center space-y-2">
            <div className="font-semibold text-3xl">
              <p>Email Verification</p>
            </div>
            <div className="flex flex-row text-sm font-medium text-gray-400">
              <p>We have sent a code to your email</p>
            </div>
          </div>

          <div>
            <form onSubmit={verifyAccount}>
              <div className="flex flex-col space-y-16">
                <div className="flex f  lex-row items-center justify-between mx-auto w-full max-w-xm">
                  {otpValues.map((value, index) => (
                    <div key={index} className="w-16 h-16 ">
                      <input
                        id={`input-${index}`}
                        className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                        type="text"
                        name=""
                        maxLength={1}
                        value={value}
                        onChange={(e) => handleInput(index, e.target.value)}
                      />
                    </div>
                  ))}
                </div>

                <div className="flex flex-col space-y-5">
                  <div>
                    <button
                      type="submit"
                      className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-blue-700 border-none text-white text-sm shadow-sm"
                    >
                      Verify Account
                    </button>
                  </div>

                  <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                    <p>Didn't receive the code?</p>
                    <a
                      className="flex flex-row items-center text-blue-600"
                      href="http://"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Resend
                    </a>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ConfirmOtp;
