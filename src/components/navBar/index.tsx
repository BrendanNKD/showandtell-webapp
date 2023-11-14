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
            {/* logo */}
            <button
                    onClick={() => {
                      navigate("/");
                    }}
                  >
            <img
              className="w-12 md:w-16 lg:w-30"
              alt="Frame"
              src="https://c.animaapp.com/Y2tyLAH0/img/frame.svg"
              />
            </button>
            {/* dashboard */}
            <div className="flex flex-col w-24 md:w-36 lg:w-50 xl:w-56">
              <div className="h-5 sm:h-6 md:h-9 l:h-10 xl:h-12 bg-[#66ae45] rounded-3xl md:rounded-lg lg:rounded-xl">
                <div className="h-4 sm:h-5 md:h-8 l:h-9 xl:h-11 bg-[#84c455] rounded-3xl md:rounded-lg lg:rounded-xl">
                  <div className="flex flex-row justify-center items-center [font-family:'lapsus',Helvetica] font-bold text-black text-l sm:text-[17px] md:text-3xl lg:text-3xl xl:text-[36px] text-center tracking-[1.07px] leading-[normal] whitespace-nowrap">
                    <button
                      className="h-4 sm:h-5 md:h-8 l:h-9 xl:h-11"
                      onClick={() => {
                          //stopCollection();
                           //dashboardplay();
                      navigate("/dashboard");
                      }}
                    >
                    Dashboard
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* generate choose */}
            <div className="flex flex-col w-20 md:w-28 lg:w-50 xl:w-56">
              <div className="h-5 sm:h-6 md:h-9 l:h-10 xl:h-12 bg-[#53c2ef] rounded-3xl md:rounded-lg lg:rounded-xl">
                <div className="h-4 sm:h-5 md:h-8 l:h-9 xl:h-11 bg-[#9cdcf9] rounded-3xl md:rounded-lg lg:rounded-xl">
                  <div className="flex flex-row justify-center items-center [font-family:'lapsus',Helvetica] font-bold text-black text-l sm:text-[17px] md:text-3xl lg:text-3xl xl:text-[36px] text-center tracking-[1.07px] leading-[normal] whitespace-nowrap">
                    <button
                      className="h-4 sm:h-5 md:h-8 l:h-9 xl:h-11"
                      onClick={() => {
                          //stopCollection();
                           //dashboardplay();
                      navigate("/generateChoose");
                      }}
                    >
                    Generate
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Collection */}
            <div className="flex flex-col w-24 md:w-36 lg:w-50 xl:w-56">
              <div className="h-5 sm:h-6 md:h-9 l:h-10 xl:h-12 bg-[#facd0a] rounded-3xl md:rounded-lg lg:rounded-xl">
                <div className="h-4 sm:h-5 md:h-8 l:h-9 xl:h-11 bg-[#fae55a] rounded-3xl md:rounded-lg lg:rounded-xl">
                  <div className="flex flex-row justify-center items-center [font-family:'lapsus',Helvetica] font-bold text-black text-l sm:text-[17px] md:text-3xl lg:text-3xl xl:text-[36px] text-center tracking-[1.07px] leading-[normal] whitespace-nowrap">
                    <button
                      className="h-4 sm:h-5 md:h-8 l:h-9 xl:h-11"
                      onClick={() => {
                          //stopCollection();
                           //dashboardplay();
                      navigate("/collection");
                      }}
                    >
                    Collection
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* playground */}
            <div className="flex flex-col w-24 md:w-36 lg:w-50 xl:w-56">
              <div className="h-5 sm:h-6 md:h-9 l:h-10 xl:h-12 bg-[#e78324] rounded-3xl md:rounded-lg lg:rounded-xl">
                <div className="h-4 sm:h-5 md:h-8 l:h-9 xl:h-11 bg-[#fcb315] rounded-3xl md:rounded-lg lg:rounded-xl">
                  <div className="flex flex-row justify-center items-center [font-family:'lapsus',Helvetica] font-bold text-black text-l sm:text-[17px] md:text-3xl lg:text-3xl xl:text-[36px] text-center tracking-[1.07px] leading-[normal] whitespace-nowrap">
                    <button
                      className="h-4 sm:h-5 md:h-8 l:h-9 xl:h-11"
                      onClick={() => {
                          //stopCollection();
                           //dashboardplay();
                      navigate("/PlaygroundChoose");
                      }}
                    >
                    Playground
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* quest */}
            <div className="flex flex-col w-16 md:w-20 lg:w-35 xl:w-[100px]">
              <div className="h-5 sm:h-6 md:h-9 l:h-10 xl:h-12 bg-[#595aa4] rounded-3xl md:rounded-lg lg:rounded-xl">
                <div className="h-4 sm:h-5 md:h-8 l:h-9 xl:h-11 bg-[#8b8dff] rounded-3xl md:rounded-lg lg:rounded-xl">
                  <div className="flex flex-row justify-center items-center [font-family:'lapsus',Helvetica] font-bold text-black text-l sm:text-[17px] md:text-3xl lg:text-3xl xl:text-[36px] text-center tracking-[1.07px] leading-[normal] whitespace-nowrap">
                    <button
                      className="h-4 sm:h-5 md:h-8 l:h-9 xl:h-11"
                      onClick={() => {
                          //stopCollection();
                           //dashboardplay();
                      navigate("/quest");
                      }}
                    >
                    Quest
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* profile icon */}
            <div className="md:mr-8">
              {isAuthenticated ? (
                <>
                  {/* <button
                    type="button"
                    className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="absolute -inset-1.5"></span>
                    <span className="sr-only">View notifications</span>
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                      />
                    </svg>
                  </button> */}
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

                    {/* <!--
            Dropdown menu, show/hide based on menu state.

            Entering: "transition ease-out duration-100"
              From: "transform opacity-0 scale-95"
              To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
              From: "transform opacity-100 scale-100"
              To: "transform opacity-0 scale-95"
          --> */}
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

  // return (
  //   <>
  //     <nav className="bg-gray-800">
  //       <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
  //         <div className="relative flex h-16 items-center justify-between">
  //           <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
  //             {/* <!-- Mobile menu button--> */}
  //             <button
  //               type="button"
  //               className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
  //               aria-controls="mobile-menu"
  //               aria-expanded="false"
  //             >
  //               <span className="absolute -inset-0.5"></span>
  //               <span className="sr-only">Open main menu</span>
  //               {/* <!--
  //           Icon when menu is closed.

  //           Menu open: "hidden", Menu closed: "block"
  //         --> */}
  //               <svg
  //                 className="block h-6 w-6"
  //                 fill="none"
  //                 viewBox="0 0 24 24"
  //                 strokeWidth="1.5"
  //                 stroke="currentColor"
  //                 aria-hidden="true"
  //               >
  //                 <path
  //                   strokeLinecap="round"
  //                   strokeLinejoin="round"
  //                   d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
  //                 />
  //               </svg>
  //               {/* <!--
  //           Icon when menu is open.

  //           Menu open: "block", Menu closed: "hidden"
  //         --> */}
  //               <svg
  //                 className="hidden h-6 w-6"
  //                 fill="none"
  //                 viewBox="0 0 24 24"
  //                 strokeWidth="1.5"
  //                 stroke="currentColor"
  //                 aria-hidden="true"
  //               >
  //                 <path
  //                   strokeLinecap="round"
  //                   strokeLinejoin="round"
  //                   d="M6 18L18 6M6 6l12 12"
  //                 />
  //               </svg>
  //             </button>
  //           </div>
  //           <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
  //             <div className="flex flex-shrink-0 items-center">
  //               <img
  //                 className="h-8 w-auto"
  //                 src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
  //                 alt="Your Company"
  //               />
  //             </div>
  //             <div className="hidden sm:ml-6 sm:block">
  //               <div className="flex space-x-4">
  //                 {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
  //                 <button
  //                   onClick={() => {
  //                     navigate("/dashboard");
  //                   }}
  //                   className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
  //                   aria-current="page"
  //                 >
  //                   Dashboard
  //                 </button>
  //                 <button
  //                   onClick={() => {
  //                     navigate("/generation");
  //                   }}
  //                   className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
  //                 >
  //                   Generate
  //                 </button>
  // <button
  //   onClick={() => {
  //     navigate("/collection");
  //   }}
  //   className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
  // >
  //   Collection
  // </button>
  //                 <button
  //                   onClick={() => {
  //                     navigate("/playground");
  //                   }}
  //                   className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
  //                 >
  //                   Playground
  //                 </button>
  //               </div>
  //             </div>
  //           </div>
  //           <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
  //             {/*
  //       <!-- Profile dropdown --> */}
  //             {isAuthenticated ? (
  //               <>
  //                 <button
  //                   type="button"
  //                   className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
  //                 >
  //                   <span className="absolute -inset-1.5"></span>
  //                   <span className="sr-only">View notifications</span>
  //                   <svg
  //                     className="h-6 w-6"
  //                     fill="none"
  //                     viewBox="0 0 24 24"
  //                     strokeWidth="1.5"
  //                     stroke="currentColor"
  //                     aria-hidden="true"
  //                   >
  //                     <path
  //                       strokeLinecap="round"
  //                       strokeLinejoin="round"
  //                       d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
  //                     />
  //                   </svg>
  //                 </button>
  //                 <div className="relative ml-3">
  //                   <div>
  //                     <button
  //                       type="button"
  //                       className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
  //                       id="user-menu-button"
  //                       aria-expanded="false"
  //                       aria-haspopup="true"
  //                       onClick={toggleDropdown}
  //                     >
  //                       <span className="absolute -inset-1.5"></span>
  //                       <span className="sr-only">Open user menu</span>
  //                       {profile && (
  //                         <img
  //                           className="h-8 w-8 rounded-full"
  //                           src={defaultPics[profile.profilePic].url}
  //                           alt=""
  //                         />
  //                       )}
  //                     </button>
  //                   </div>

  //                   {/* <!--
  //           Dropdown menu, show/hide based on menu state.

  //           Entering: "transition ease-out duration-100"
  //             From: "transform opacity-0 scale-95"
  //             To: "transform opacity-100 scale-100"
  //           Leaving: "transition ease-in duration-75"
  //             From: "transform opacity-100 scale-100"
  //             To: "transform opacity-0 scale-95"
  //         --> */}
  //                   {isOpen && (
  //                     <div
  //                       className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
  //                       role="menu"
  //                       aria-orientation="vertical"
  //                       aria-labelledby="user-menu-button"
  //                     >
  //                       <div className="relative">
  //                         <div className="py-10 bg-gradient-to-tr from-violet-600 to-red-600 rounded-md"></div>
  //                         <div className="absolute px-4 -bottom-7 start-0">
  //                           <div className="flex items-end">
  //                             {profile && (
  //                               <img
  //                                 className="rounded-full w-10 h-w-10 shadow dark:shadow-gray-700"
  //                                 src={defaultPics[profile.profilePic].url}
  //                                 alt=""
  //                               />
  //                             )}

  //                             <span className="font-semibold text-[15px] ms-1">
  //                               {profile?.firstName} {profile?.lastName}
  //                             </span>
  //                           </div>
  //                         </div>
  //                       </div>

  //                       <div className="mt-10 px-4">
  //                         <ul className="py-2 text-start">
  //                           <li>
  //                             <button
  //                               onClick={() => {
  //                                 navigate("/profile");
  //                               }}
  //                               className="block text-[14px] font-semibold py-1.5 px-4 hover:text-violet-600"
  //                             >
  //                               <i className="uil uil-user text-[16px] align-middle me-1"></i>{" "}
  //                               Profile
  //                             </button>
  //                           </li>
  //                           <li>
  //                             <button className="block text-[14px] font-semibold py-1.5 px-4 hover:text-violet-600">
  //                               <i className="uil uil-setting text-[16px] align-middle me-1"></i>{" "}
  //                               Settings
  //                             </button>
  //                           </li>
  //                           <li className="border-t border-gray-100 dark:border-gray-800 my-2"></li>
  //                           <li>
  //                             <button
  //                               className="block text-[14px] font-semibold py-1.5 px-4 hover:text-violet-600"
  //                               onClick={handleSignOut}
  //                             >
  //                               <i className="uil uil-sign-out-alt text-[16px] align-middle me-1"></i>{" "}
  //                               Logout
  //                             </button>
  //                           </li>
  //                         </ul>
  //                       </div>
  //                     </div>
  //                   )}
  //                 </div>
  //               </>
  //             ) : (
  //               <button
  //                 className="bg-transparent hover:text-violet-600 text-violet-600  font-semibold  py-2 px-4 border border-violet-600 rounded"
  //                 onClick={() => {
  //                   navigate("/login");
  //                 }}
  //               >
  //                 Login
  //               </button>
  //             )}
  //           </div>
  //         </div>
  //       </div>

  //       {/* <!-- Mobile menu, show/hide based on menu state. --> */}
  //       <div className="sm:hidden" id="mobile-menu">
  //         <div className="space-y-1 px-2 pb-3 pt-2">
  //           {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
  //           <button
  //             className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
  //             aria-current="page"
  //             onClick={() => {
  //               navigate("/dashboard");
  //             }}
  //           >
  //             Dashboard
  //           </button>
  //           <button
  //             onClick={() => {
  //               navigate("/generation");
  //             }}
  //             className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
  //           >
  //             Generate
  //           </button>
  //           <button
  //             onClick={() => {
  //               navigate("/collection");
  //             }}
  //             className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
  //           >
  //             Collection
  //           </button>
  //           <button
  //             onClick={() => {
  //               navigate("/playground");
  //             }}
  //             className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
  //           >
  //             Playground
  //           </button>
  //         </div>
  //       </div>
  //     </nav>
  //   </>
  // );
};

export default Navbar;
