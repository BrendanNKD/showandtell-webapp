import React from "react";
import logo_white from "../../assets/logo-white.png";
import app from "../../assets/app.png";
import playstore from "../../assets/playstore.png";
import { Link } from "react-router-dom";
import { Mail, Phone } from "react-feather";

const Footer = () => {
  return (
    <footer
      className="bg-violet-600 bg-opacity-10
     relative text-gray-200 dark:text-gray-200 px-10 rounded-lg"
    >
      <div className="grid grid-cols-1">
        <div className="relative py-16">
          <div className="relative w-full">
            <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
              <div className="lg:col-span-4 md:col-span-12">
                <Link to="#" className="text-[22px] focus:outline-none">
                  <img src={logo_white} alt="" />
                </Link>
                <p className="mt-6 text-gray-300">
                  Buy, sell and discover exclusive digital assets by the top
                  artists of NFTs world.
                </p>
              </div>

              <div className="lg:col-span-2 md:col-span-4">
                <h5 className="tracking-[1px] text-lg text-gray-100 font-semibold">
                  Giglink
                </h5>
                <ul className="list-none footer-list mt-6">
                  <li>
                    <Link
                      to="/explore-one"
                      className="text-[16px] text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                    >
                      <i className="uil uil-angle-right-b me-1"></i> Explore
                      Item
                    </Link>
                  </li>
                  <li className="mt-[10px]">
                    <Link
                      to="/auction"
                      className="text-[16px] text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                    >
                      <i className="uil uil-angle-right-b me-1"></i> Live
                      Auction
                    </Link>
                  </li>
                  <li className="mt-[10px]">
                    <Link
                      to="/activity"
                      className="text-[16px] text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                    >
                      <i className="uil uil-angle-right-b me-1"></i> Activities
                    </Link>
                  </li>
                  <li className="mt-[10px]">
                    <Link
                      to="/wallet"
                      className="text-[16px] text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                    >
                      <i className="uil uil-angle-right-b me-1"></i> Wallets
                    </Link>
                  </li>
                  <li className="mt-[10px]">
                    <Link
                      to="/creators"
                      className="text-[16px] text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                    >
                      <i className="uil uil-angle-right-b me-1"></i> Creators
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="lg:col-span-3 md:col-span-4">
                <h5 className="tracking-[1px] text-lg text-gray-100 font-semibold">
                  Usefull Links
                </h5>
                <ul className="list-none footer-list mt-6">
                  <li>
                    <Link
                      to="/aboutus"
                      className="text-[16px] text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                    >
                      <i className="uil uil-angle-right-b me-1"></i> About Us
                    </Link>
                  </li>
                  <li className="mt-[10px]">
                    <Link
                      to="/blogs"
                      className="text-[16px] text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                    >
                      <i className="uil uil-angle-right-b me-1"></i> Blog & News
                    </Link>
                  </li>
                  <li className="mt-[10px]">
                    <Link
                      to="/terms"
                      className="text-[16px] text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                    >
                      <i className="uil uil-angle-right-b me-1"></i> Terms &
                      Condition
                    </Link>
                  </li>
                  <li className="mt-[10px]">
                    <Link
                      to="/privacy"
                      className="text-[16px] text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                    >
                      <i className="uil uil-angle-right-b me-1"></i> Privacy
                      policy
                    </Link>
                  </li>
                  <li className="mt-[10px]">
                    <Link
                      to="/login"
                      className="text-[16px] text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                    >
                      <i className="uil uil-angle-right-b me-1"></i> Login
                    </Link>
                  </li>
                  <li className="mt-[10px]">
                    <Link
                      to="/contact"
                      className="text-[16px] text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                    >
                      <i className="uil uil-angle-right-b me-1"></i> Contact Us
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="lg:col-span-3 md:col-span-4">
                <h5 className="tracking-[1px] text-lg text-gray-100 font-semibold">
                  Download the Giglink app
                </h5>

                <ul className="list-none mt-6">
                  <li className="inline">
                    <img src={app} className="h-9 inline-block" alt="" />
                  </li>
                  <li className="inline">
                    <img src={playstore} className="h-9 inline-block" alt="" />
                  </li>
                </ul>

                <div className="mt-6">
                  <h5 className="tracking-[1px] text-lg text-gray-100 font-semibold">
                    Contact Details
                  </h5>

                  <div className="flex mt-6">
                    <Mail className="w-5 h-5 text-violet-600 me-3 mt-1"></Mail>
                    <div className="">
                      <Link
                        to="mailto:contact@example.com"
                        className="text-[16px] text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                      >
                        contact@example.com
                      </Link>
                    </div>
                  </div>

                  <div className="flex mt-6">
                    <Phone className="w-5 h-5 text-violet-600 me-3 mt-1"></Phone>
                    <div className="">
                      <Link
                        to="tel:+152534-468-854"
                        className="text-[16px] text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                      >
                        +152 534-468-854
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-[30px] px-0 border-t border-gray-800 dark:border-gray-700">
        <div className="container text-center">
          <div className="grid md:grid-cols-2 items-center gap-6">
            <div className="md:text-start text-center">
              <p className="mb-0 text-gray-300">
                © {new Date().getFullYear()} Giglink. Design with{" "}
                <i className="mdi mdi-heart text-red-600"></i> by{" "}
                <Link
                  to="https://shreethemes.in/"
                  target="_blank"
                  className="text-reset"
                >
                  Shreethemes
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
