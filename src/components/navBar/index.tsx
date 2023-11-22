import { useState } from "react";
import { useSignOut } from "app/hooks/useCognitoAuth";
import { useNavigate } from "react-router-dom";
import { UseIsAuthenticated } from "app/state/account/useAuthenticated";
import { UseProfile } from "app/state/profile/useProfile";
import { defaultPics } from "utils/profilePic";
import "./audio.css";

const Navbar = () => {
  //const [dashboardplay, { stop: stopDashboard }] = useSound("/assets/Homepage1.mp3");
  //const [collectionplay, { stop: stopCollection }] = useSound("/assets/Homepage.mp3");
  const { signOut } = useSignOut();
  const [isOpen, setIsOpen] = useState(false);
  const isAuthenticated = UseIsAuthenticated();
  const navigate = useNavigate();
  const profile = UseProfile();
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSignOut = async () => {
    await signOut();
    navigate("/login");
  };

  return (
    <>
      <nav>
        <div className="w-full h-[9%] z-10 fixed">
          <div className="flex flex-row justify-center md:justify-evenly items-center relative w-full h-[100%] top-0 left-0 bg-white drop-shadow-md space-x-2 md:space-x-1 p-4">
            <button
              onClick={() => {
                navigate("/");
              }}
            >
              <img
                className="w-12 md:w-16 lg:w-36 "
                alt="Frame"
                src="https://c.animaapp.com/Y2tyLAH0/img/frame.svg"
              />
            </button>

            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>

            <div
              className="hidden w-full md:block md:w-auto"
              id="navbar-default"
            >
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <div
                    className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                    aria-current="page"
                  >
                    <div className="flex flex-col w-24 md:w-36 lg:w-50 xl:w-56">
                      <div className="h-5 sm:h-6 md:h-9 l:h-10 xl:h-12 bg-[#66ae45] rounded-3xl md:rounded-lg lg:rounded-xl">
                        <div className="h-4 sm:h-5 md:h-8 l:h-9 xl:h-11 bg-[#84c455] rounded-3xl md:rounded-lg lg:rounded-xl">
                          <div className="flex flex-row justify-center items-center [font-family:'lapsus',Helvetica] font-bold text-black text-l sm:text-[17px] md:text-3xl lg:text-3xl xl:text-[36px] text-center tracking-[1.07px] leading-[normal] whitespace-nowrap">
                            <button
                              className="h-4 sm:h-5 md:h-8 l:h-9 xl:h-11"
                              onClick={() => {
                                navigate("/dashboard");
                              }}
                            >
                              Dashboard
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                    <div className="flex flex-col w-20 md:w-28 lg:w-50 xl:w-56">
                      <div className="h-5 sm:h-6 md:h-9 l:h-10 xl:h-12 bg-[#53c2ef] rounded-3xl md:rounded-lg lg:rounded-xl">
                        <div className="h-4 sm:h-5 md:h-8 l:h-9 xl:h-11 bg-[#9cdcf9] rounded-3xl md:rounded-lg lg:rounded-xl">
                          <div className="flex flex-row justify-center items-center [font-family:'lapsus',Helvetica] font-bold text-black text-l sm:text-[17px] md:text-3xl lg:text-3xl xl:text-[36px] text-center tracking-[1.07px] leading-[normal] whitespace-nowrap">
                            <button
                              className="h-4 sm:h-5 md:h-8 l:h-9 xl:h-11"
                              onClick={() => {
                                navigate("/generateChoose");
                              }}
                            >
                              Generate
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                    <div className="flex flex-col w-24 md:w-36 lg:w-50 xl:w-56">
                      <div className="h-5 sm:h-6 md:h-9 l:h-10 xl:h-12 bg-[#facd0a] rounded-3xl md:rounded-lg lg:rounded-xl">
                        <div className="h-4 sm:h-5 md:h-8 l:h-9 xl:h-11 bg-[#fae55a] rounded-3xl md:rounded-lg lg:rounded-xl">
                          <div className="flex flex-row justify-center items-center [font-family:'lapsus',Helvetica] font-bold text-black text-l sm:text-[17px] md:text-3xl lg:text-3xl xl:text-[36px] text-center tracking-[1.07px] leading-[normal] whitespace-nowrap">
                            <button
                              className="h-4 sm:h-5 md:h-8 l:h-9 xl:h-11"
                              onClick={() => {
                                navigate("/collection");
                              }}
                            >
                              Collection
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                    <div className="flex flex-col w-24 md:w-36 lg:w-50 xl:w-56">
                      <div className="h-5 sm:h-6 md:h-9 l:h-10 xl:h-12 bg-[#e78324] rounded-3xl md:rounded-lg lg:rounded-xl">
                        <div className="h-4 sm:h-5 md:h-8 l:h-9 xl:h-11 bg-[#fcb315] rounded-3xl md:rounded-lg lg:rounded-xl">
                          <div className="flex flex-row justify-center items-center [font-family:'lapsus',Helvetica] font-bold text-black text-l sm:text-[17px] md:text-3xl lg:text-3xl xl:text-[36px] text-center tracking-[1.07px] leading-[normal] whitespace-nowrap">
                            <button
                              className="h-4 sm:h-5 md:h-8 l:h-9 xl:h-11"
                              onClick={() => {
                                navigate("/PlaygroundChoose");
                              }}
                            >
                              Playground
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                    <div className="flex flex-col w-16 md:w-20 lg:w-35 xl:w-[100px]">
                      <div className="h-5 sm:h-6 md:h-9 l:h-10 xl:h-12 bg-[#595aa4] rounded-3xl md:rounded-lg lg:rounded-xl">
                        <div className="h-4 sm:h-5 md:h-8 l:h-9 xl:h-11 bg-[#8b8dff] rounded-3xl md:rounded-lg lg:rounded-xl">
                          <div className="flex flex-row justify-center items-center [font-family:'lapsus',Helvetica] font-bold text-black text-l sm:text-[17px] md:text-3xl lg:text-3xl xl:text-[36px] text-center tracking-[1.07px] leading-[normal] whitespace-nowrap">
                            <button
                              className="h-4 sm:h-5 md:h-8 l:h-9 xl:h-11"
                              onClick={() => {
                                navigate("/quest");
                              }}
                            >
                              Quest
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>

              {/* <div className="flex flex-col w-24 md:w-36 lg:w-50 xl:w-56">
                <div className="h-5 sm:h-6 md:h-9 l:h-10 xl:h-12 bg-[#66ae45] rounded-3xl md:rounded-lg lg:rounded-xl">
                  <div className="h-4 sm:h-5 md:h-8 l:h-9 xl:h-11 bg-[#84c455] rounded-3xl md:rounded-lg lg:rounded-xl">
                    <div className="flex flex-row justify-center items-center [font-family:'lapsus',Helvetica] font-bold text-black text-l sm:text-[17px] md:text-3xl lg:text-3xl xl:text-[36px] text-center tracking-[1.07px] leading-[normal] whitespace-nowrap">
                      <button
                        className="h-4 sm:h-5 md:h-8 l:h-9 xl:h-11"
                        onClick={() => {
                          navigate("/dashboard");
                        }}
                      >
                        Dashboard
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col w-20 md:w-28 lg:w-50 xl:w-56">
                <div className="h-5 sm:h-6 md:h-9 l:h-10 xl:h-12 bg-[#53c2ef] rounded-3xl md:rounded-lg lg:rounded-xl">
                  <div className="h-4 sm:h-5 md:h-8 l:h-9 xl:h-11 bg-[#9cdcf9] rounded-3xl md:rounded-lg lg:rounded-xl">
                    <div className="flex flex-row justify-center items-center [font-family:'lapsus',Helvetica] font-bold text-black text-l sm:text-[17px] md:text-3xl lg:text-3xl xl:text-[36px] text-center tracking-[1.07px] leading-[normal] whitespace-nowrap">
                      <button
                        className="h-4 sm:h-5 md:h-8 l:h-9 xl:h-11"
                        onClick={() => {
                          navigate("/generateChoose");
                        }}
                      >
                        Generate
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col w-24 md:w-36 lg:w-50 xl:w-56">
                <div className="h-5 sm:h-6 md:h-9 l:h-10 xl:h-12 bg-[#facd0a] rounded-3xl md:rounded-lg lg:rounded-xl">
                  <div className="h-4 sm:h-5 md:h-8 l:h-9 xl:h-11 bg-[#fae55a] rounded-3xl md:rounded-lg lg:rounded-xl">
                    <div className="flex flex-row justify-center items-center [font-family:'lapsus',Helvetica] font-bold text-black text-l sm:text-[17px] md:text-3xl lg:text-3xl xl:text-[36px] text-center tracking-[1.07px] leading-[normal] whitespace-nowrap">
                      <button
                        className="h-4 sm:h-5 md:h-8 l:h-9 xl:h-11"
                        onClick={() => {
                          navigate("/collection");
                        }}
                      >
                        Collection
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col w-24 md:w-36 lg:w-50 xl:w-56">
                <div className="h-5 sm:h-6 md:h-9 l:h-10 xl:h-12 bg-[#e78324] rounded-3xl md:rounded-lg lg:rounded-xl">
                  <div className="h-4 sm:h-5 md:h-8 l:h-9 xl:h-11 bg-[#fcb315] rounded-3xl md:rounded-lg lg:rounded-xl">
                    <div className="flex flex-row justify-center items-center [font-family:'lapsus',Helvetica] font-bold text-black text-l sm:text-[17px] md:text-3xl lg:text-3xl xl:text-[36px] text-center tracking-[1.07px] leading-[normal] whitespace-nowrap">
                      <button
                        className="h-4 sm:h-5 md:h-8 l:h-9 xl:h-11"
                        onClick={() => {
                          navigate("/PlaygroundChoose");
                        }}
                      >
                        Playground
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col w-16 md:w-20 lg:w-35 xl:w-[100px]">
                <div className="h-5 sm:h-6 md:h-9 l:h-10 xl:h-12 bg-[#595aa4] rounded-3xl md:rounded-lg lg:rounded-xl">
                  <div className="h-4 sm:h-5 md:h-8 l:h-9 xl:h-11 bg-[#8b8dff] rounded-3xl md:rounded-lg lg:rounded-xl">
                    <div className="flex flex-row justify-center items-center [font-family:'lapsus',Helvetica] font-bold text-black text-l sm:text-[17px] md:text-3xl lg:text-3xl xl:text-[36px] text-center tracking-[1.07px] leading-[normal] whitespace-nowrap">
                      <button
                        className="h-4 sm:h-5 md:h-8 l:h-9 xl:h-11"
                        onClick={() => {
                          navigate("/quest");
                        }}
                      >
                        Quest
                      </button>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
            <div className="md:mr-8">
              {isAuthenticated ? (
                <>
                  <div className="relative">
                    <div>
                      <button
                        type="button"
                        className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                        id="user-menu-button"
                        aria-expanded="false"
                        aria-haspopup="true"
                        onClick={toggleDropdown}
                      >
                        <span className="absolute -inset-1.5"></span>
                        <span className="sr-only">Open user menu</span>
                        {profile && (
                          <img
                            className="w-7 md:w-7 lg:w-12 xl:w-16 rounded-full "
                            src={defaultPics[profile.profilePic].url}
                            alt=""
                          />
                        )}
                      </button>
                    </div>

                    {isOpen && (
                      <div
                        className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="user-menu-button"
                      >
                        <div className="relative">
                          <div className="py-10 bg-gradient-to-tr from-violet-600 to-red-600 rounded-md"></div>
                          <div className="absolute px-4 -bottom-7 start-0">
                            <div className="flex items-end">
                              {profile && (
                                <img
                                  className="rounded-full w-10 h-w-10 shadow dark:shadow-gray-700"
                                  src={defaultPics[profile.profilePic].url}
                                  alt=""
                                />
                              )}

                              <span className="font-semibold [font-family:'lapsus',Helvetica] text-[22px] ms-1 tracking-[1px]">
                                {profile?.firstName} {profile?.lastName}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="mt-10 px-4">
                          <ul className="py-2 text-start">
                            <li>
                              <button
                                onClick={() => {
                                  navigate("/profile");
                                }}
                                className="block text-[18px] font-semibold py-1.5 px-4 hover:text-violet-600 [font-family:'gillsans',Helvetica]"
                              >
                                <i className="uil uil-user text-[16px] align-middle me-1"></i>{" "}
                                Profile
                              </button>
                            </li>
                            <li>
                              <button
                                onClick={() => {
                                  navigate("/profiles");
                                }}
                                className="block text-[18px] font-semibold py-1.5 px-4 hover:text-violet-600 [font-family:'gillsans',Helvetica]"
                              >
                                <i className="uil uil-setting text-[16px] align-middle me-1"></i>{" "}
                                Switch Profiles
                              </button>
                            </li>
                            <li className="border-t border-gray-100 dark:border-gray-800 my-2"></li>
                            <li>
                              <button
                                className="block text-[18px] font-semibold py-1.5 px-4 hover:text-violet-600 [font-family:'gillsans',Helvetica]"
                                onClick={handleSignOut}
                              >
                                <i className="uil uil-sign-out-alt text-[16px] align-middle me-1"></i>{" "}
                                Logout
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <button
                  className="bg-transparent hover:text-violet-600 text-violet-600  font-semibold  py-2 px-4 border border-violet-600 rounded"
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Login
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
