import LoginForm from "components/form/loginSignupForm";
import loginimage from "../../assets/loginimage.jpg";
import { UseNonAuthenticatedRoute } from "utils/authRoute";
const Login = () => {
  // TODO
  // verification page
  // Restrict user when not verified

  UseNonAuthenticatedRoute();
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
        <div className="hidden sm:block">
          <img
            className="object-cover h-screen w-full"
            src={loginimage}
            alt=""
          />
        </div>
        <LoginForm></LoginForm>
      </div>
    </>
  );
};
export default Login;
