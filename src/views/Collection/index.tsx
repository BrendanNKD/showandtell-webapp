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
import { useEffect, useState } from "react";
import { UseCollection } from "app/state/collection";

const Collection = () => {
  UseAuthenticatedRoute();
  const navigate = useNavigate();
  const collectionData = UseCollection();
  console.log(collectionData);
  const [collections, setCollections] = useState<[] | null>(null);

  useEffect(() => {
    if (collectionData) setCollections(collectionData);
  }, [collectionData]);

  return (
    <div className="h-fit flex-col justify-center align-middle ">
      <Navbar></Navbar>;
      <div className="container">
        <div className="flex justify-center align-middle pb-20 pt-10 ">
          {collections && (
            <CollectionCard collectionData={collections}></CollectionCard>
          )}
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};
export default Collection;
