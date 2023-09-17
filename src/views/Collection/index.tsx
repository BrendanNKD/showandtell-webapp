import {
  UseAuthenticatedRoute,
  UseNonAuthenticatedRoute,
} from "utils/authRoute";
// import { UseProfile } from "app/state/profile/useProfile";
import { useSignOut } from "app/hooks/useCognitoAuth";
import Navbar from "components/navBar";
import { useNavigate } from "react-router-dom";
import { CollectionCard } from "components/collection";
import Footer from "components/footer";

const Collection = () => {
  UseAuthenticatedRoute();
  const navigate = useNavigate();

  return (
    <div className="h-fit flex-col justify-center align-middle ">
      <Navbar></Navbar>;
      <div className="flex justify-center align-middle pb-20 pt-10 px-2">
        <CollectionCard></CollectionCard>
      </div>
      <Footer></Footer>
    </div>
  );
};
export default Collection;
