// import { useAppDispatch } from "../../app/useHooks";
import { useSignOut } from "app/hooks/useCognitoAuth";
import { UseAuthenticatedRoute } from "utils/authRoute";
import { UseAccount } from "../../app/state/account/useAccount";
import { useEffect, useState } from "react";
import { ProfileSelectionCard } from "../../components/proflieSelection";

import { useNavigate } from "react-router-dom";
import {
  useAddProfile,
  useDeleteProfile,
  useSetProfile,
} from "app/hooks/useAccount";
import { ProfileResponseModel } from "domain/types/profile/Profile";

// import { useGetCollection } from "app/hooks/useCollection";
import { Landing } from "components/landing";
import { Modal } from "components/modal";
import AddProfileForm from "components/form/addProfile";
import { FaTrash } from "react-icons/fa";

const initialState: ProfileResponseModel = {
  firstName: "",
  lastName: "",
  dateOfBirth: "",
  profilePic: Math.floor(Math.random() * 4),
  stars: 0,
  level: 1,
  totalStars: 0,
};

const Profiles = () => {
  // Redirect user to profile if they are authenticated

  // const { setProfileState, accountData } = useGetAccount();
  // const { isLoading } = useGetCollection();
  const { setProfileState } = useSetProfile();
  const accountData = UseAccount();
  const [showModal, setShowModal] = useState(false);
  const [landing, setLanding] = useState<boolean>(true);
  const [formValue, setFormValue] = useState(initialState);
  const [profiles, setProfiles] = useState<any[] | []>([]);

  UseAuthenticatedRoute();

  const {
    addNewProfile,
    newAccountData,
    addProfileLoading,
    isaddProfileSuccess,
  } = useAddProfile();

  const { deleteOneProfile, newdeleteAccountData } = useDeleteProfile();

  const navigate = useNavigate();
  const { signOut } = useSignOut();

  const handleProfileClick = (index: number) => {
    // console.log(index);
    // dispatch(setProfile(index));
    setProfileState(index);
    navigate("/");
  };

  const handleLogout = async (event: any) => {
    event.preventDefault();
    signOut();
  };

  const handleNewProfile = async (event: any) => {
    event.preventDefault();
    console.log(formValue);
    await addNewProfile(formValue);
  };

  const handleDeleteItem = async (id: any) => {
    await deleteOneProfile(id);
  };

  useEffect(() => {
    if (accountData && landing) setProfiles(accountData.profiles);
  }, [accountData, landing]);

  useEffect(() => {
    // Call the function to start the timeout when the component mounts
    setTimeout(() => {
      setLanding(false);
    }, 4000); // 3000 milliseconds = 3 seconds
  }, []); // Empty dependency array ensures this effect runs once on mount

  useEffect(() => {
    if (isaddProfileSuccess) {
      setShowModal(false);
      setProfiles(newAccountData.profiles);
    }
  }, [newAccountData, isaddProfileSuccess]); // Empty dependency array ensures this effect runs once on mount

  useEffect(() => {
    if (newdeleteAccountData) {
      console.log(newdeleteAccountData.profiles);
      setProfiles(newdeleteAccountData.profiles);
    }
  }, [newdeleteAccountData]);

  return (
    <>
      <Modal
        title="Create New Profile"
        setShowModal={setShowModal}
        showModal={showModal}
        buttonFn={handleNewProfile}
        loading={addProfileLoading}
        cancelBnt={true}
        cbuttonFn={() => {
          setShowModal(false);
        }}
        confirmButton={true}
        element={
          <AddProfileForm setFormValue={setFormValue} formValue={formValue} />
        }
      />
      {landing ? (
        <Landing></Landing>
      ) : (
        <div className="bg-transparent h-screen flex items-center justify-center alignItems-center">
          <div className="bg-[url(https://c.animaapp.com/JG9iazHt/img/group.png)] bg-[100%_100%] w-[1920px] h-[1136.7px] flex flex-col items-center justify-center">
            {/* Title */}
            <h1 className="[font-family:'lapsus',Helvetica] font-bold text-black text-[60px] tracking-[1.85px] leading-[normal] whitespace-nowrap text-3xl">
              Select Profile
            </h1>

            {/* Profiles */}
            <div className="flex flex-row flex-wrap gap-5 mt-8">
              {/* Profile 1 */}
              {profiles &&
                profiles.map((object, index) => {
                  return (
                    <div
                      key={index}
                      className={`rounded-full p-4 cursor-pointer`}
                      onClick={() => handleProfileClick(index)}
                    >
                      <div className = "flex flex-col w-full justify-content h-[50px] ml-[100px] relative top-[30px]">
                        <button 
                            className = ""
                            onClick={(event) => {event.stopPropagation();
                                                    console.log("deletion here!");}}
                            style={{//this section allows for button hiding
                                    display: "inline", 
                                    pointerEvents: "auto", 
                                  }}>
                            <FaTrash
                              style={{ color: "red", cursor: "pointer" }}
                              className = "w-[30px] h-[18px]"
                              // onClick={() => handleDeleteItem(item._id)} 
                            />

                        </button>
                      </div>
                      {ProfileSelectionCard({ object, index })}
                    </div>
                  );
                })}
              {/* Add Profile */}
              <button
                className="rounded-lg p-4 cursor-pointer flex flex-col align-middle justify-center alignItems-center"
                onClick={() => {
                  setShowModal((prevShowModal) => !prevShowModal); // Toggle the state
                }}
              >
                {/*<svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-[80px] w-[80px] group-hover:bg-gray-300 border-2 border-transparent"
                viewBox="0 0 20 20"
                fill="#6b7280"
            >*/}
                <img
                  className="flex h-[80px] w-[80px]"
                  alt="Group"
                  src="https://c.animaapp.com/nxB4xB9Q/img/group-1@2x.png"
                />
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                  clipRule="evenodd"
                />
                {/*</svg>*/}
                {/* <p className="text-gray-500 group-hover:text-gray-300">Sign Out</p> */}
              </button>
            </div>

            {/* Sign out */}
            <div className="flex gap-10">
              <button
                //className="border-2 border-gray-600 text-gray-600 px-4 py-1 mt-20 hover:border-gray-400 hover:text-gray-400"
                className="mt-20"
                onClick={handleLogout}
              >
                <div className="flex">
                  <div className="group relative w-[200px] h-[100px]">
                    <div className="flex top-[10px] bg-[#67ac44] relative w-[200px] h-[80px] left-0 rounded-[30px] " />
                    <div className="flex top-0 bg-[#84c455] absolute w-[200px] h-[80px] left-0 rounded-[30px] group-hover:bg-[#67ac44]" />
                    <div className="justify-center align-middle alignItems-center absolute w-[192px] top-[20px] left-[5px] [font-family:'lapsus',Helvetica] font-bold text-black text-[41px] tracking-[1.85px] leading-[normal] whitespace-nowrap group-hover:text-[#000000]">
                      Sign Out
                    </div>
                  </div>
                </div>
              </button>
              {/* Manage profiles */}
              <button
                //className="border-2 border-gray-600 text-gray-600 px-4 py-1 mt-20 hover:border-gray-400 hover:text-gray-400"
                className="mt-20"
                onClick={handleLogout}
              >
                <div className="flex">
                  <div className="group relative w-[200px] h-[100px]">
                    <div className="flex relative w-[320px] h-[80px] top-[10px] left-0 bg-[#67ac44] rounded-[30px]" />
                    <div className="flex absolute w-[320px] h-[80px] top-0 left-0 bg-[#84c455] rounded-[30px] group-hover:bg-[#67ac44]" />
                    <div className="justify-center align-middle alignItems-center absolute w-[324px] top-[20px] [font-family:'lapsus',Helvetica] font-bold text-black text-[41px] tracking-[1.85px] leading-[normal] whitespace-nowrap group-hover:text-[#000000]">
                      Manage Profiles
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Profiles;
