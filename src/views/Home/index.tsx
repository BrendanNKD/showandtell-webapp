import {
  UseAuthenticatedRoute,
  UseNonAuthenticatedRoute,
} from "utils/authRoute";
// import { UseProfile } from "app/state/profile/useProfile";
import { useSignOut } from "app/hooks/useCognitoAuth";
import Navbar from "components/navBar";
import { useState } from "react";
import DragDrop from "components/dragAndDrop";
import { Link, useNavigate } from "react-router-dom";
import Slider from "components/slider";
import Footer from "components/footer";
import about from "../../assets/home1.jpeg";

const Home = () => {
  // Redirect user to profile if they are authenticate
  // const profile = UseProfile();
  const navigate = useNavigate();

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
                      <span className="bg-gradient-to-l from-red-600 to-violet-600 text-transparent bg-clip-text ">
                        Learn, experience,
                      </span>{" "}
                      <br />{" "}
                      <div className="w-max">
                        <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-black pr-5 text-5xl text-black font-bold">
                          Level Up
                        </h1>
                      </div>
                    </h4>
                    <p className="text-lg max-w-xl text-black">
                      We are a huge marketplace dedicated to connecting great
                      artists of all Giglink with their fans and unique token
                      collectors!
                    </p>

                    <div className="mt-6">
                      <button
                        className="hover:bg-violet-600 border-violet-600 bg-violet-600  text-white font-bold py-2 px-4 rounded-full"
                        onClick={() => {
                          navigate("/generation");
                        }}
                      >
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

      <div className="container">
        <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 items-center gap-[30px] mt-32 ">
          <div className="lg:col-span-5">
            <div className="relative  pl-10">
              <div className="absolute bg-gradient-to-r from-red-600 to-violet-600 rounded-lg -mt-[20px] -ms-[20px] h-[98%] w-[98%] z-0"></div>
              <img
                src={about}
                className="relative rounded-lg shadow-md dark:shadow-gray-800 z-10"
                alt=""
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="lg:ms-5">
              <span className="text-violet-600 font-medium">
                Creative Vision & Mission
              </span>
              <h3 className="mb-4 md:text-3xl text-2xl md:leading-snug leading-snug font-semibold">
                We develop & create <br /> digital art.
              </h3>

              <p className="text-slate-400 max-w-xl">
                We are a huge marketplace dedicated to connecting great artists
                of all Giglink with their fans and unique token collectors!
              </p>
              <p className="text-slate-400 max-w-xl mt-4">
                It seems that only fragments of the original text remain in the
                Lorem Ipsum texts used today. One may speculate that over the
                course of time certain letters were added or deleted at various
                positions within the text. This might also explain why one can
                now find slightly different versions.
              </p>

              <div className="mt-6">
                <button
                  className="hover:bg-violet-600 border-violet-600 bg-violet-600  text-white font-bold py-2 px-4 rounded-full"
                  onClick={() => {
                    navigate("/generation");
                  }}
                >
                  Explore
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="h-fit flex justify-center align-middle">
          <div className="py-16 h-fit">
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
            <Slider />
          </div>
        </div>

        <Footer></Footer>
      </div>
    </div>
  );
};
export default Home;
