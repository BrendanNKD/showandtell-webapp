import { UseProfile } from "app/state/profile/useProfile";
import "./index.css";
import { UseAccount } from "app/state/account/useAccount";
export const Landing = () => {
  const { username } = UseAccount();
  return (
    <div className="body1">
      <div className="title">
        <h1>Welcome!</h1>
        <div className="flex justify-center">
          <p className="text-black text-4xl">{username}</p>
        </div>
      </div>
      <div className="ghost">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
