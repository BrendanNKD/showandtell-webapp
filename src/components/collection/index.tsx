import React from "react";
import { Link } from "react-router-dom";

import item1 from "../../assets/items/1.jpg";
import item2 from "../../assets/items/2.gif";
import item3 from "../../assets/items/3.jpg";
import item4 from "../../assets/items/8.jpg";
import item5 from "../../assets/items/5.jpg";
import item6 from "../../assets/items/6.jpg";
import image from "../../assets/blog/01.jpg";
import image1 from "../../assets/blog/03.jpg";
import image2 from "../../assets/blog/05.jpg";
import image5 from "../../assets/blog/11.jpg";
import { UseProfile } from "app/state/profile/useProfile";

export const CollectionCard = () => {
  const title = "Collection";
  const profile = UseProfile();

  const collectionData = [
    {
      image: item1,
      caption: "Digital Collection",
      profile: profile?.firstName,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      avatar: image,
    },
    {
      image: item2,
      caption: "GIF Collection",
      profile: profile?.firstName,
      description: "Lorem ipsum dolor sit amet, cons",
      avatar: image1,
    },
    {
      image: item3,
      caption: "Digital Collection",
      profile: profile?.firstName,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      avatar: image2,
    },
    {
      image: item5,
      caption: "Digital Collection",
      profile: profile?.firstName,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      avatar: image5,
    },
    {
      image: image5,
      caption: "Digital Collection",
      profile: profile?.firstName,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      avatar: item3,
    },
    {
      image: image,
      caption: "Digital Collection",
      profile: profile?.firstName,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      avatar: item5,
    },
    {
      image: image,
      caption: "Digital Collection",
      profile: profile?.firstName,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      avatar: item6,
    },
    {
      image: image2,
      caption: "Digital Collection",
      profile: profile?.firstName,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      avatar: item4,
    },
  ];

  return (
    <>
      <div className="container ">
        <h1 className="font-extrabold leading-none tracking-tigh md:text-3xl lg:text-4xl dark:text-white text-white">
          Collection
        </h1>
        <div
          className={`grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px] ${
            title !== undefined ? "mt-12" : ""
          }`}
        >
          {collectionData.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden bg-violet-600 bg-opacity-10 dark:bg-slate-900 rounded-lg p-3 shadow hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-800 hover:scale-105 ease-in-out duration-500"
            >
              <img src={item.image} className="rounded-lg" alt="" />

              <div className="relative p-4 -mt-14">
                <div className="relative inline-block">
                  <img
                    src={item.avatar}
                    className="h-16 rounded-md shadow-md dark:shadow-gray-800"
                    alt=""
                  />
                </div>

                <div className="mt-3">
                  <Link
                    to="/explore-one"
                    className="font-semibold block text-[18px] hover:text-violet-600 text-white"
                  >
                    {item.caption}
                  </Link>
                  <span className="text-slate-400 mt-1 text-sm">
                    <span className="italic">by</span>{" "}
                    <Link
                      to="/creator-profile"
                      className="text-violet-600 font-medium"
                    >
                      {item.profile}
                    </Link>
                  </span>
                  <span className="text-slate-400 block text-[16px] mt-1">
                    {item.description}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
