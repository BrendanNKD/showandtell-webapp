import {
  UseIsMain,
  UseProfile,
  UseProfileIndex,
} from "app/state/profile/useProfile";
import { Modal } from "components/modal";
import Navbar from "components/navBar";
import { ProfilePicSelectionCard } from "../../components/proflieSelection";
import { useEffect, useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaBirthdayCake } from "react-icons/fa";
import { ProfileResponseModel } from "domain/types/profile/Profile";
import { useUpdateProfile } from "app/hooks/useAccount";
import { defaultPics } from "utils/profilePic";
import { useChangePassword } from "app/hooks/useCognitoAuth";
import toast, { Toaster } from "react-hot-toast";
import { UseEmail } from "app/state/account/useAccount";

const Profile = () => {
  const currentprofile = UseProfile();
  const currentemail = UseEmail();
  const profileIndex = UseProfileIndex();
  const isMain = UseIsMain();
  const [profile, setProfile] = useState<ProfileResponseModel>({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    profilePic: 0,
    stars: 0,
    level: 1,
    totalStars: 0,
  });

  const [email, setEmail] = useState("");

  const [passwords, setPasswords] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const { update, updateProfileLoading, isupdateProfileSuccess } =
    useUpdateProfile();

  const { updatePassword, changePasswordLoading, ischangePasswordSuccess } =
    useChangePassword();

  const [showModal, setShowModal] = useState(false);

  const [activeTab, setActiveTab] = useState<"profile" | "password">("profile");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value,
    });
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setPasswords((prevPasswords) => ({
      ...prevPasswords,
      [name]: value,
    }));
  };

  const handleTabChange = (tab: "profile" | "password") => {
    setActiveTab(tab);
  };

  const handleProfilePicChange = () => {};

  const handleUpdateProfile = async () => {
    if (profileIndex !== null && profile)
      await update({ index: profileIndex, profile: profile });
  };

  const handleChangePassword = async () => {
    if (passwords.newPassword === passwords.confirmPassword)
      await updatePassword({
        previousPassword: passwords.oldPassword,
        proposedPassword: passwords.newPassword,
      });
    else {
      console.log("password does not match");
    }
  };

  // const handleEditClick = () => {
  //   // Handle the edit button click event
  // };

  useEffect(() => {
    if (currentprofile && currentemail) {
      setProfile(currentprofile);
      setEmail(currentemail);
    }
  }, [currentprofile, currentemail]);

  useEffect(() => {
    if (isupdateProfileSuccess) {
      toast.success("Successfully Updated Profile!");
    }
  }, [isupdateProfileSuccess]);

  useEffect(() => {
    if (ischangePasswordSuccess) {
      toast.success("Successfully Updated Password!");
    }
  }, [ischangePasswordSuccess]);

  return (
    <>
      <Navbar></Navbar>
      <Toaster position="top-center" reverseOrder={false} />
      <Modal
        title="Profile Picture"
        setShowModal={setShowModal}
        showModal={showModal}
        buttonFn={handleProfilePicChange}
        cbuttonFn={() => {
          setShowModal(false);
        }}
        loading={false}
        element={<ProfilePicSelectionCard />}
      />
      <div className="container">
        <div className="py-32 bg-blueGray-200">
          <div className="container mx-auto px-4 flex justify-center">
            <div className="relative flex flex-col min-w-0 break-words bg-gray-200 w-4/5 mb-6 shadow-xl rounded-lg ">
              <div className="px-6 pb-10">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="flex justify-center">
                      {currentprofile && (
                        <>
                          {/* <img
                            alt="..."
                            src={defaultPics[currentprofile?.profilePic].url}
                            className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 w-40 "
                            onMouseEnter={() => {
                              setShowEditButton(true);
                            }}
                            onMouseLeave={() => {
                              setShowEditButton(false);
                            }}
                            onClick={() => {
                              setShowModal((prevShowModal) => !prevShowModal); // Toggle the state
                            }}
                          /> */}
                          <div className="relative w-40 -m-16 -ml-20 lg:-ml-16">
                            <img
                              className="w-40 h-40 rounded-full absolute"
                              src={defaultPics[currentprofile?.profilePic].url}
                              alt=""
                              onClick={() => {
                                setShowModal((prevShowModal) => !prevShowModal); // Toggle the state
                              }}
                            />
                            <div className="w-40 h-40 group hover:bg-gray-200 opacity-60 rounded-full absolute flex justify-center items-center cursor-pointer transition duration-500">
                              {/* <img
                                className="hidden group-hover:block w-12"
                                src="https://www.svgrepo.com/show/33565/upload.svg"
                                alt=""
                              /> */}
                              <p
                                className="underline"
                                onClick={() => {
                                  setShowModal(
                                    (prevShowModal) => !prevShowModal
                                  ); // Toggle the state
                                }}
                              >
                                Edit
                              </p>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className="py-6 px-3 mt-32 sm:mt-0">
                      <button
                        className="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                        type="button"
                      >
                        logout
                      </button>
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block  text-blueGray-600">
                          22
                        </span>
                        <span className="text-sm text-blueGray-400">
                          Friends
                        </span>
                      </div>
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block  text-blueGray-600">
                          10
                        </span>
                        <span className="text-sm text-blueGray-400">
                          Photos
                        </span>
                      </div>
                      <div className="lg:mr-4 p-3 text-center">
                        <span className="text-xl font-bold block text-blueGray-600">
                          89
                        </span>
                        <span className="text-sm text-blueGray-400">
                          Comments
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 ">
                    {currentprofile && (
                      <>
                        {currentprofile.firstName} {currentprofile.lastName}{" "}
                      </>
                    )}
                  </h3>

                  {isMain && (
                    <div className="mb-2 text-blueGray-600 flex flex-row justify-center py-2">
                      <div className="flex flex-col justify-center align-bottom">
                        <AiOutlineMail
                          size={15}
                          className="mr-2 text-lg text-blueGray-400 "
                        />
                      </div>
                      {email}
                    </div>
                  )}

                  <div className="mb-2 text-blueGray-600 flex flex-row justify-center">
                    <div className="flex flex-col justify-center align-bottom">
                      <FaBirthdayCake
                        size={15}
                        className="mr-2 text-lg text-blueGray-400 "
                      />
                    </div>
                    <span>{profile.dateOfBirth}</span>
                  </div>
                </div>

                {isMain && (
                  <div className="mt-10 flex justify-center ">
                    <button
                      className={`${
                        activeTab === "profile" ? "bg-blue-500" : "bg-gray-300"
                      } text-white hover:bg-blue-600 py-2 px-4 rounded-t-lg`}
                      onClick={() => handleTabChange("profile")}
                    >
                      Profile
                    </button>
                    <button
                      className={`${
                        activeTab === "password" ? "bg-blue-500" : "bg-gray-300"
                      } text-white hover:bg-blue-600 py-2 px-4 rounded-t-lg`}
                      onClick={() => handleTabChange("password")}
                    >
                      Change Password
                    </button>
                  </div>
                )}

                <div className="py-10 border-t border-purple-300 text-center h-96 pb-10">
                  <div className="flex flex-wrap justify-center flex-col px-56">
                    <div className="mb-4">
                      {profile && activeTab === "profile" && (
                        <>
                          <div className="mb-6">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                              First Name
                            </label>
                            <input
                              type="text"
                              name="firstName"
                              value={profile.firstName}
                              onChange={handleChange}
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="First Name"
                              required
                            />
                          </div>
                          <div className="mb-6">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                              last Name
                            </label>
                            <input
                              type="text"
                              name="lastName"
                              value={profile.lastName}
                              onChange={handleChange}
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="First Name"
                              required
                            />
                          </div>
                          {isMain && (
                            <div className="mb-6">
                              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Email
                              </label>
                              <input
                                type="email"
                                name="email"
                                value={email}
                                onChange={handleChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="First Name"
                                required
                                disabled={true}
                              />
                            </div>
                          )}
                        </>
                      )}
                      {isMain && profile && activeTab === "password" && (
                        <>
                          <div className="mb-6">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                              Old Password
                            </label>
                            <input
                              type="password"
                              name="oldPassword"
                              value={passwords.oldPassword}
                              onChange={handlePasswordChange}
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="•••••••••"
                              required
                            />
                          </div>
                          <div className="mb-6">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                              New Password
                            </label>
                            <input
                              type="password"
                              name="newPassword"
                              value={passwords.newPassword}
                              onChange={handlePasswordChange}
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="•••••••••"
                              required
                            />
                          </div>

                          <div className="mb-6">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                              Confirm Password
                            </label>
                            <input
                              type="password"
                              name="confirmPassword"
                              value={passwords.confirmPassword}
                              onChange={handlePasswordChange}
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="•••••••••"
                              required
                            />
                          </div>
                        </>
                      )}
                    </div>

                    <button
                      disabled={changePasswordLoading || updateProfileLoading}
                      onClick={
                        activeTab === "profile"
                          ? handleUpdateProfile
                          : handleChangePassword
                      }
                      className="bg-blue-500 text-white hover:bg-blue-600 py-2 px-4 rounded-lg"
                    >
                      Update {activeTab === "profile" ? "Profile" : "Password"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
