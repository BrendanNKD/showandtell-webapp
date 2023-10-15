import React from "react";
import { Link } from "react-router-dom";
import TinySlider from "tiny-slider-react";
import "tiny-slider/dist/tiny-slider.css";
import { sliderSettings } from "config/config";

import image from "../../assets/avatar/1.jpg";
import image1 from "../../assets/avatar/2.jpg";
import image2 from "../../assets/items/3.gif";
import image5 from "../../assets/avatar/5.jpg";
import image6 from "../../assets/avatar/6.jpg";

import item1 from "../../assets/items/1.jpg";
import item2 from "../../assets/items/2.gif";
import item3 from "../../assets/items/3.jpg";
import item5 from "../../assets/items/5.jpg";
import item6 from "../../assets/items/6.jpg";

const Slider = () => {
  const data = [
    {
      image: item1,
      title: "image of a cat",
      subtext: "@CutieGirl",
      items:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      avatar: image,
    },
    {
      image: item2,
      title: "image of a cat",
      subtext: "@ButterFly",
      items:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      avatar: image1,
    },
    {
      image: item3,
      title: "image of a cat",
      subtext: "@NorseQueen",
      items:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      avatar: image2,
    },
    {
      image: item5,
      title: "image of a cat",
      subtext: "@Angel",
      items:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      avatar: image5,
    },
    {
      image: image6,
      title: "image of a cat",
      subtext: "@CrazyAnyone",
      items:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      avatar: item6,
    },
  ];

  return (
    <>
      <div className="grid relative grid-cols-1 ">
        <div className="tiny-four-icon-item">
          <TinySlider settings={sliderSettings}>
            {data.map((item, index) => (
              <div className="tiny-slide" key={index}>
                <div className="group relative overflow-hidden bg-violet-600 bg-opacity-10 dark:bg-slate-900 rounded-lg p-3 shadow dark:shadow-gray-800 ease-in-out duration-500 m-2">
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
                        className="font-semibold block text-[18px] hover:text-violet-600 text-black"
                      >
                        {item.title}
                      </Link>
                      <span className="text-slate-400 mt-1 text-sm">
                        <span className="italic">by</span>{" "}
                        <Link
                          to="/creator-profile"
                          className="text-violet-600 font-medium"
                        >
                          {item.subtext}
                        </Link>
                      </span>
                      <span className="text-slate-400 block text-[16px] mt-1">
                        {item.items}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </TinySlider>
        </div>
      </div>
    </>
  );
};

export default Slider;
