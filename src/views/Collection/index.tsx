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
import { useGetCollection } from "app/hooks/useCollection";

const Collection = () => {
  UseAuthenticatedRoute();
  const navigate = useNavigate();
  const { collectionData, isLoading, isError } = useGetCollection();

  console.log(collectionData);

  return (
    <div className="h-fit flex-col justify-center align-middle ">
      <Navbar></Navbar>;
      <div className="container">
        <div className="flex justify-center align-middle pb-20 pt-10 ">
          {collectionData && (
            <CollectionCard collectionData={collectionData}></CollectionCard>
          )}
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};
export default Collection;
