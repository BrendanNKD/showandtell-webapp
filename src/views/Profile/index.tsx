import { UseProfile } from "app/state/profile/useProfile";
import Footer from "components/footer";
import { Modal } from "components/modal";
import Navbar from "components/navBar";
import {
  ProfilePicSelectionCard,
  ProfileSelectionCard,
} from "../../components/proflieSelection";
import { useEffect, useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaBirthdayCake } from "react-icons/fa";
import { ProfileResponseModel } from "domain/types/profile/Profile";

const Profile = () => {
  const currentprofile = UseProfile();

  const [profile, setProfile] = useState<ProfileResponseModel>({
    firstName: "",
    lastName: "",
    email: "",
    dateOfBirth: "",
    profilePic: 0,
  });

  const [passwords, setPasswords] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

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
    // try {
    //   // Send a PUT request to update the profile using profile state
    //   const response = await fetch("your-update-api-endpoint", {
    //     method: "PUT",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ ...profile, passwords }),
    //   });
    //   if (response.ok) {
    //     // Profile updated successfully
    //   } else {
    //     // Handle update error
    //   }
    // } catch (error) {
    //   console.error(error);
    // }
  };

  useEffect(() => {
    if (currentprofile) setProfile(currentprofile);
  }, [currentprofile]);

  return (
    <>
      <Navbar></Navbar>
      <Modal
        title="Profile Picture"
        setShowModal={setShowModal}
        showModal={showModal}
        buttonFn={handleProfilePicChange}
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
                      <img
                        alt="..."
                        src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg"
                        className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 w-40 "
                        onClick={() => {
                          setShowModal((prevShowModal) => !prevShowModal); // Toggle the state
                        }}
                      />
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
                    {profile.firstName} {profile.lastName}
                  </h3>
                  <div className="mb-2 text-blueGray-600 flex flex-row justify-center py-2">
                    <div className="flex flex-col justify-center align-bottom">
                      <AiOutlineMail
                        size={15}
                        className="mr-2 text-lg text-blueGray-400 "
                      />
                    </div>
                    {profile.email}
                  </div>
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
                          <div className="mb-6">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                              Email
                            </label>
                            <input
                              type="email"
                              name="email"
                              value={profile.email}
                              onChange={handleChange}
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="First Name"
                              required
                            />
                          </div>
                        </>
                      )}
                      {profile && activeTab === "password" && (
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
                      onClick={handleUpdateProfile}
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
        <Footer></Footer>
      </div>
    </>
  );
};

export default Profile;
