import LoginForm from "components/Login/loginForm";
import loginimage from "../../assets/loginimage.jpg";
import { UseNonAuthenticatedRoute } from "utils/PrivateRoute";
const Login = () => {
  // Redirect user to profile if they are authenticated
  UseNonAuthenticatedRoute();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="hidden sm:block">
        <img className="object-cover h-screen w-full" src={loginimage} alt="" />
      </div>
      <LoginForm></LoginForm>
    </div>
  );
};
export default Login;
