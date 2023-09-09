import {
  UseAuthenticatedRoute,
  UseNonAuthenticatedRoute,
} from "utils/authRoute";
// import { UseProfile } from "app/state/profile/useProfile";
import { useSignOut } from "app/hooks/useCognitoAuth";
import Navbar from "components/navBar";
import { useState } from "react";
import DragDrop from "components/dragAndDrop";
import { Link } from "react-router-dom";
import Collections from "components/collection";
import Footer from "components/footer";

const Home = () => {
  // Redirect user to profile if they are authenticate
  // const profile = UseProfile();

  return (
    <div className="h-fit flex-col justify-center align-middle">
      <Navbar></Navbar>
      <section className="relative overflow-hidden">
        <div className="container-fluid lg:px-10 md:px-3 relative overflow-hidden">
          <span className="absolute blur-[200px] w-[600px] h-[600px] rounded-full top-1/2 start-1/2 ltr:-translate-x-1/2 rtl:translate-x-1/2 -translate-y-1/2 bg-gradient-to-tl from-red-600/40 to-violet-600/40 dark:from-red-600/60 dark:to-violet-600/60"></span>
          <div className="lg:py-36 py-[74px] md:rounded-lg shadow dark:shadow-gray-800 bg-violet-700/10 dark:bg-violet-600/20">
            <div className="flex justify-center">
              <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                <div className="md:col-span-7">
                  <div className="md:me-6">
                    <h4 className="font-bold lg:leading-snug leading-snug text-4xl lg:text-6xl mb-4">
                      <span className="bg-gradient-to-l from-red-600 to-violet-600 text-transparent bg-clip-text">
                        Learn, experience,
                      </span>{" "}
                      <br />{" "}
                      <div className="w-max">
                        <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-black pr-5 text-5xl text-white font-bold">
                          Level Up
                        </h1>
                      </div>
                    </h4>
                    <p className="text-lg max-w-xl text-white">
                      We are a huge marketplace dedicated to connecting great
                      artists of all Giglink with their fans and unique token
                      collectors!
                    </p>

                    <div className="mt-6">
                      <button className="hover:bg-violet-600 border-violet-600 bg-violet-600  text-white font-bold py-2 px-4 rounded-full">
                        Explore
                      </button>
                    </div>
                  </div>
                  <div className="overflow-hidden after:content-[''] after:absolute after:h-10 after:w-10 after:bg-violet-600/10 dark:after:bg-violet-600/30 after:-bottom-[50px] after:start-[30%] after:-z-1 after:rounded-full after:animate-ping"></div>
                </div>

                <div className="md:col-span-5 relative">
                  <div className="tiny-one-icon-item"></div>

                  <div className="overflow-hidden after:content-[''] after:absolute after:h-14 after:w-14 after:bg-violet-600/10 dark:after:bg-violet-600/30 after:-top-[50px] after:start-[30%] after:-z-1 after:rounded-lg after:animate-[spin_10s_linear_infinite]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="h-fit flex justify-center align-middle">
        <div className="py-16 w-2/4 h-fit">
          <div className="md:flex justify-between items-center">
            <div className="md:w-10/12 md:text-start text-center">
              <h3 className="md:text-[30px] text-[26px] font-semibold text-white">
                Top Examples
              </h3>
            </div>
            <div className="md:w-2/12 text-end md:block hidden">
              <Link
                to="/collections"
                className="btn btn-link text-[16px] font-medium hover:text-violet-600 after:bg-violet-600 duration-500 ease-in-out text-white"
              >
                See More <i className="uil uil-arrow-right"></i>
              </Link>
            </div>
          </div>
          <Collections />
        </div>
      </div>
      <div className="flex justify-center align-middle">
        <Footer></Footer>
      </div>
      {/* <div className="flex items-center justify-center w-full pt-6 flex-col">
        <h1 className="mb-10 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Caption Your Image
        </h1>
        <DragDrop></DragDrop>
      </div> */}
    </div>
    // <div>
    //   <Navbar></Navbar>
    //   <nav className="bg-white border-gray-200 dark:bg-gray-900">
    //     <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
    //       <a href="http://localhost:3001/home" className="flex items-center">
    //         <img
    //           src="https://cdn.iconscout.com/icon/premium/png-512-thumb/illustrate-2479939-2074435.png?f=avif&w=256"
    //           className="h-8 mr-3"
    //           alt="show-and-tell"
    //         />
    //         <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
    //           Show-and-tell
    //         </span>
    //       </a>
    //       <div className="space-x-4">
    //         <button
    //           className="border-2 border-gray-600 text-gray-600 px-4 py-1 hover:border-gray-400 hover:text-gray-400"
    //           onClick={handleProfileClick}
    //         >
    //           Manage Profiles
    //         </button>
    //         <button
    //           className="border-2 border-gray-600 text-gray-600 px-4 py-1 hover:border-gray-400 hover:text-gray-400"
    //           onClick={handleProfileClick2}
    //         >
    //           SIGNOUT
    //         </button>
    //       </div>
    //     </div>
    //   </nav>
    //   <div className="container mx-auto mt-8 p-8">
    //     <label
    //       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    //       htmlFor="file_input"
    //     >
    //       Upload file
    //     </label>
    //     <input
    //       className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
    //       aria-describedby="file_input_help"
    //       id="file_input"
    //       type="file"
    //     />
    //     <p
    //       className="mt-1 text-sm text-gray-500 dark:text-black-300"
    //       id="file_input_help"
    //     >
    //       SVG, PNG, JPG or GIF (MAX. 800x400px).
    //     </p>
    //   </div>
    // </div>
  );
};
export default Home;
