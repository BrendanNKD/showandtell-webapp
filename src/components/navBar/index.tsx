import { useState } from "react";
import { useSignOut } from "app/hooks/useCognitoAuth";
import { useNavigate } from "react-router-dom";
import { UseIsAuthenticated } from "app/state/account/useAuthenticated";
import { UseProfile } from "app/state/profile/useProfile";
import { defaultPics } from "utils/profilePic";
import { useEffect, useRef } from "react";
import useSound from "use-sound";
const Navbar = () => {
  const [dashboardplay, { stop }] = useSound("/assets/Homepage1.mp3");
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
        <div className="relative w-[1920px] h-[96px] z-10">
          <div className="fixed w-[1920px] h-[96px] top-0 left-0 bg-white">
            <div className="absolute w-[156px] h-[81px] top-[8px] left-[1701px]">
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
                  <div className="relative ml-3 mt-4">
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
                            className="h-16 w-16 rounded-full "
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
            <div className="absolute w-[238px] h-[59px] top-[25px] left-[378px]">
              <div className="relative w-[236px] h-[59px]">
                <div className="absolute w-[236px] h-[53px] top-[6px] left-0 bg-[#66ae45] rounded-[13px]" />
                <div className="absolute w-[236px] h-[53px] top-0 left-0 bg-[#84c455] rounded-[13px]" />
                <div className="absolute w-[207px] top-[6px] left-[14px] [font-family:'lapsus',Helvetica] font-bold text-black text-[43px] text-center tracking-[1.07px] leading-[normal] whitespace-nowrap">
                  <button
                    onClick={() => {
                      dashboardplay();
                      navigate("/dashboard");
                    }}
                  >
                    Dashboard
                  </button>
                </div>
              </div>
            </div>
            <div className="absolute w-[238px] h-[59px] top-[25px] left-[925px]">
              <div className="relative w-[236px] h-[59px]">
                <div className="w-[236px] bg-[#facd0a] absolute h-[53px] top-[6px] left-0 rounded-[13px]" />
                <div className="w-[236px] bg-[#fae55a] absolute h-[53px] top-0 left-0 rounded-[13px]" />
                <div className="absolute w-[207px] top-[6px] left-[14px] [font-family:'lapsus',Helvetica] font-bold text-black text-[43px] text-center tracking-[1.07px] leading-[normal] whitespace-nowrap">
                  <button
                    onClick={() => {
                      stop();
                      navigate("/collection");
                    }}
                  >
                    Collection
                  </button>
                </div>
              </div>
            </div>
            <div className="absolute w-[238px] h-[59px] top-[25px] left-[1212px]">
              <div className="relative w-[236px] h-[59px]">
                <div className="w-[236px] bg-[#e78324] absolute h-[53px] top-[6px] left-0 rounded-[13px]" />
                <div className="w-[236px] bg-[#fcb315] absolute h-[53px] top-0 left-0 rounded-[13px]" />
                <div className="absolute w-[207px] top-[6px] left-[14px] [font-family:'lapsus',Helvetica] font-bold text-black text-[43px] text-center tracking-[1.07px] leading-[normal] whitespace-nowrap">
                  <button
                    onClick={() => {
                      navigate("/PlaygroundChoose");
                    }}
                  >
                    Playground
                  </button>
                </div>
              </div>
            </div>
            <div className="absolute w-[157px] h-[59px] top-[25px] left-[1493px]">
              <div className="relative w-[155px] h-[59px]">
                <div className="w-[155px] bg-[#595aa4] absolute h-[53px] top-[6px] left-0 rounded-[13px]" />
                <div className="w-[155px] bg-[#8b8dff] absolute h-[53px] top-0 left-0 rounded-[13px]" />
                <div className="absolute w-[127px] top-[6px] left-[14px] [font-family:'lapsus',Helvetica] font-bold text-black text-[43px] text-center tracking-[1.07px] leading-[normal] whitespace-nowrap">
                  <button
                    onClick={() => {
                      navigate("/quest");
                    }}
                  >
                    Quest
                  </button>
                </div>
              </div>
            </div>
            <div className="absolute w-[207px] h-[59px] top-[25px] left-[667px]">
              <div className="relative w-[205px] h-[59px]">
                <div className="w-[205px] bg-[#53c2ef] absolute h-[53px] top-[6px] left-0 rounded-[13px]" />
                <div className="w-[205px] bg-[#9cdcf9] absolute h-[53px] top-0 left-0 rounded-[13px]" />
                <div className="absolute w-[180px] top-[6px] left-[12px] [font-family:'lapsus',Helvetica] font-bold text-black text-[43px] text-center tracking-[1.07px] leading-[normal] whitespace-nowrap">
                  <button
                    onClick={() => {
                      navigate("/generateChoose");
                    }}
                  >
                    Generate
                  </button>
                </div>
              </div>
            </div>

            <img
              className="absolute w-[219px] h-[37px] top-[41px] left-[70px]"
              alt="Frame"
              src="https://c.animaapp.com/Y2tyLAH0/img/frame.svg"
            />
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
