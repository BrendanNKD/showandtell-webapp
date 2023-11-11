import React from "react";
import Navbar from "components/navBar";
import { useNavigate, createSearchParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Navigation, Pagination } from "swiper/modules";
import ReactAudioPlayer from 'react-audio-player';

export const GenerateChoose = (): JSX.Element => {
  const swiperStyle = {
    width: "100%",
    height: "100%",
  };

  const swiperSlideStyle = {
    //textAlign: 'center',
    fontSize: "18px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };



  const navigate = useNavigate();

  const passParams = (
    titleid: string,
    imageid: string,
    color: string,
    category: string
  ) => {
    navigate({
      pathname: "/generate",
      search: createSearchParams({
        title: titleid,
        image: imageid,
        color: color,
        category: category,
      }).toString(),
    });
  };

  return (
    <div className="h-fit flex-col justify-center items-center align-middle">
      <Navbar />
      <div className="bg-transparent flex flex-row justify-center items-center w-full">
        <div className="overflow-hidden bg-[url(https://c.animaapp.com/YStE9pzZ/img/group.png)] bg-[100%_100%] w-[1920px] h-[1136.7px] relative">
          <div className="absolute left-[400px] top-[100px] [font-family:'lapsus',Helvetica] font-bold text-black text-[64px] tracking-[0.71px] leading-[normal] whitespace-nowrap">
                Generate
          </div>
          <Swiper
            navigation={{
              prevEl: ".prev",
              nextEl: ".next",
            }}
            pagination={{
              clickable: true,
              el: `swiper-container swiper-container-testClass`,
              bulletClass: `swiper-pagination-bullet swiper-pagination-testClass`,
            }}
            modules={[Navigation, Pagination]}
            style={swiperStyle}
            className="mySwiper"
            preventClicks={false}
            preventClicksPropagation={false}
            touchStartPreventDefault={false}
            watchSlidesProgress={true}
          >
            <div className="w-[100%] h-[100%]">
              <SwiperSlide style={swiperSlideStyle}>
              <div className="flex flex-row justify-center items-center w-[100%] h-[100%] space-x-[2%]">                  
                <div className="flex flex-col justify-center items-center w-[48%] h-[55%] space-y-[3%]">
                  {/*animals*/}
                  <div className="relative w-[100%] h-[30%]">
                    <div className="flex flex-row justify-center items-center w-[100%] h-[100%]">
                
                      <div className="relative w-[100%] h-[100%]">
                        <div className="relative w-[100%] h-[100%] top-[0] bg-[#ef59a1] rounded-[20px]">
                          <div className="flex md:flex-row flex-col md:justify-center items-center w-[100%] h-[90%] top-0 bg-[#f177ae] rounded-[17px] p-[2%]">
                            <div className="flex justify-center items-center w-[70%] h-[70%]">
                              <img
                                className="w-[100%] h-[100%]"
                                alt="Frame"
                                src="https://c.animaapp.com/YStE9pzZ/img/frame-2.svg"
                              />
                            </div>
                            <div className="flex justify-center items-center relative w-[100%] h-[35%] top-[0] left-[0] [font-family:'lapsus',Helvetica] font-bold text-black text-xl md:text-3xl lg:text-5xl text-center tracking-[1.07px] leading-[normal] whitespace-nowrap">
                                Animals
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[170%] h-[90%]">
                      <div className="flex flex-row justify-center items-center relative w-[100%] h-[100%] bg-white rounded-r-[24px] p-[3%] space-x-[10%]">
                        <div className="flex justify-center items-center w-[100%] h-[100%] left-[0] [font-family:'gillsans',Helvetica] font-normal text-black text-[10px] md:text-[13px] lg:text-[15px] xl:text-[17px] 2xl:text[20px] tracking-[0.21px] leading-[normal]">
                          Learn about the world of animals and the creatures
                          around you! This educational and entertaining game is
                          designed to help children learn about animals from all
                          around the world while having loads of fun.
                        </div>
                        <div className="flex justify-center items-center relative w-[30%] h-[100%]">
                          <button
                            onClick={() =>
                              passParams(
                                "Animals",
                                "https://c.animaapp.com/YStE9pzZ/img/frame-2.svg",
                                "#F177AE",
                                "animals"
                              )
                            }
                          >
                            <img
                              className=""
                              alt="Frame"
                              src="https://c.animaapp.com/YStE9pzZ/img/frame-9.svg"
                            />
                        </button>
                      </div>
                      </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* shapes */}
                  <div className="relative w-[100%] h-[30%]">
                    <div className="flex flex-row justify-center items-center w-[100%] h-[100%]">
                
                      <div className="relative w-[100%] h-[100%]">
                        <div className="relative w-[100%] h-[100%] top-[0] bg-[#facd0a] rounded-[20px]">
                          <div className="flex md:flex-row flex-col justify-center items-center w-[100%] h-[90%] top-0 bg-[#fae55a] rounded-[17px] p-[2%]">
                            <div className="flex justify-center items-center  w-[70%] h-[100%]">
                              <img
                                className="w-[100%] h-[100%]"
                                alt="Frame"
                                src="https://c.animaapp.com/YStE9pzZ/img/frame.svg"
                              />
                            </div>
                            <div className="flex justify-center items-center relative w-[100%] h-[40%] top-[0] left-[0] [font-family:'lapsus',Helvetica] font-bold text-black text-[2.5vw] text-center tracking-[1.07px] leading-[normal] whitespace-nowrap">
                            Shapes &amp; <br></br> Colors
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[170%] h-[90%]">
                      <div className="flex flex-row justify-center items-center relative w-[100%] h-[100%] bg-white rounded-r-[24px] p-[3%] space-x-[10%]">
                        <div className="flex justify-center items-center w-[100%] h-[100%] left-[0] [font-family:'gillsans',Helvetica] font-normal text-black text-[10px] md:text-[13px] lg:text-[15px] xl:text-[17px] 2xl:text[20px] tracking-[0.21px] leading-[normal]">
                          Dive into the fascinating realm of shapes and colors!
                          This engaging show & tell is tailored to help children
                          explore the exciting world of geometric forms and
                          vibrant hues.
                        </div>
                        <div className="flex justify-center items-center relative w-[30%] h-[100%]">
                          <button
                            onClick={() =>
                              passParams(
                                "Shapes",
                                "https://c.animaapp.com/YStE9pzZ/img/frame.svg",
                                "#FAE55A",
                                "shapes"
                              )
                            }
                          >
                            <img
                              className=""
                              alt="Frame"
                              src="https://c.animaapp.com/YStE9pzZ/img/frame-8.svg"
                            />
                        </button>
                      </div>
                      </div>
                      </div>
                    </div>
                  </div>
                  {/* vehicles */}
                  <div className="relative w-[100%] h-[30%]">
                    <div className="flex flex-row justify-center items-center w-[100%] h-[100%]">
                
                      <div className="relative w-[100%] h-[100%]">
                        <div className="relative w-[100%] h-[100%] top-[0] bg-[#491d6f] rounded-[20px]">
                          <div className="flex md:flex-row flex-col md:justify-center items-center w-[100%] h-[90%] top-0 bg-[#885FA8] rounded-[17px] p-[2%]">
                            <div className="flex justify-center items-center w-[70%] h-[70%]">
                              <img
                                className="w-[100%] h-[100%] md:shrink-0"
                                alt="Frame"
                                src="https://c.animaapp.com/YStE9pzZ/img/frame-1.svg"
                              />
                            </div>
                            <div className="flex justify-center items-center relative w-[100%] h-[35%] top-[0] left-[0] [font-family:'lapsus',Helvetica] font-bold text-black text-[2.5vw] text-center tracking-[1.07px] leading-[normal] whitespace-nowrap">
                                Vehicles
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[170%] h-[90%]">
                      <div className="flex flex-row justify-center items-center relative w-[100%] h-[100%] bg-white rounded-r-[24px] p-[3%] space-x-[10%]">
                        <div className="flex justify-center items-center w-[100%] h-[100%] left-[0] [font-family:'gillsans',Helvetica] font-normal text-black text-[10px] md:text-[13px] lg:text-[15px] xl:text-[17px] 2xl:text[20px] tracking-[0.21px] leading-[normal]">
                          Embark on a thrilling journey through the universe of
                          vehicles! This informative game is designed to introduce
                          children to a wide array of transportation.
                        </div>
                        <div className="flex justify-center items-center relative w-[30%] h-[100%]">
                          <button
                            onClick={() =>
                              passParams(
                                "Vehicles",
                                "https://c.animaapp.com/YStE9pzZ/img/frame-1.svg",
                                "#885FA8",
                                "cars"
                              )
                            }
                          >
                            <img
                              className=""
                              alt="Frame"
                              src="https://c.animaapp.com/YStE9pzZ/img/frame-9.svg"
                            />
                        </button>
                      </div>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
                  <button className="next">
                      <img
                      src="https://c.animaapp.com/YStE9pzZ/img/frame-5.svg"
                      alt="Frame"
                    />
                  </button>
                </div>
              </SwiperSlide>

              <SwiperSlide style={swiperSlideStyle}>
              <div className="flex flex-row justify-center items-center w-[100%] h-[100%] space-x-[2%]">
                  <button className="prev">
                      <img
                      src="https://c.animaapp.com/qxMy52EW/img/frame-3.svg"
                      alt="Frame"
                    />
                  </button>
                <div className="flex flex-col justify-center items-center w-[48%] h-[55%] space-y-[3%]">
                    {/*Flowers */}
                    <div className="relative w-[100%] h-[30%]">
                      <div className="flex flex-row justify-center items-center w-[100%] h-[100%]">
                  
                        <div className="relative w-[100%] h-[100%]">
                          <div className="relative w-[100%] h-[100%] top-[0] bg-[#e78324] rounded-[20px]">
                            <div className="flex md:flex-row flex-col md:justify-center items-center w-[100%] h-[90%] top-0 bg-[#FCB315] rounded-[17px] p-[2%]">
                              <div className="flex justify-center items-center w-[70%] h-[70%]">
                                <img
                                  className="w-[100%] h-[100%] md:shrink-0"
                                  alt="Frame"
                                  src="https://c.animaapp.com/NIGs1Y1e/img/frame-5.svg"
                                />
                              </div>
                              <div className="flex justify-center items-center relative w-[100%] h-[35%] top-[0] left-[0] [font-family:'lapsus',Helvetica] font-bold text-black text-[2.5vw] text-center tracking-[1.07px] leading-[normal] whitespace-nowrap">
                                  Flowers
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="w-[170%] h-[90%]">
                        <div className="flex flex-row justify-center items-center relative w-[100%] h-[100%] bg-white rounded-r-[24px] p-[3%] space-x-[10%]">
                          <div className="flex justify-center items-center w-[100%] h-[100%] left-[0] [font-family:'gillsans',Helvetica] font-normal text-black text-[10px] md:text-[13px] lg:text-[15px] xl:text-[17px] 2xl:text[20px] tracking-[0.21px] leading-[normal]">
                          Step into the enchanting world of flowers! This
                          interactive and enlightening game is created to nurture
                          children's curiosity about the diverse and beautiful
                          blooms that grace our planet.
                          </div>
                          <div className="flex justify-center items-center relative w-[30%] h-[100%]">
                            <button
                              onClick={() =>
                                passParams(
                                  "Flowers",
                                  "https://c.animaapp.com/NIGs1Y1e/img/frame-5.svg",
                                  "#FCB315",
                                  "flowers"
                                )
                              }
                            >
                              <img
                                className=""
                                alt="Frame"
                                src="https://c.animaapp.com/YStE9pzZ/img/frame-9.svg"
                              />
                          </button>
                        </div>
                        </div>
                        </div>
                      </div>
                    </div>
                    {/* Vege */}          
                    <div className="relative w-[100%] h-[30%]">
                      <div className="flex flex-row justify-center items-center w-[100%] h-[100%]">
                  
                        <div className="relative w-[100%] h-[100%]">
                          <div className="relative w-[100%] h-[100%] top-[0] bg-[#61588c] rounded-[20px]">
                            <div className="flex md:flex-row flex-col md:justify-center items-center w-[100%] h-[90%] top-0 bg-[#9784D6] rounded-[17px] p-[2%]">
                              <div className="flex justify-center items-center w-[70%] h-[70%]">
                                <img
                                  className="w-[100%] h-[100%] md:shrink-0"
                                  alt="Frame"
                                  src="https://c.animaapp.com/NIGs1Y1e/img/frame-7.svg"
                                />
                              </div>
                              <div className="flex justify-center items-center relative w-[100%] h-[35%] top-[0] left-[0] [font-family:'lapsus',Helvetica] font-bold text-black text-[2.5vw] text-center tracking-[1.07px] leading-[normal] whitespace-nowrap">
                                Fruits &amp;
                                <br />
                                Vegetables
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="w-[170%] h-[90%]">
                        <div className="flex flex-row justify-center items-center relative w-[100%] h-[100%] bg-white rounded-r-[24px] p-[3%] space-x-[10%]">
                          <div className="flex justify-center items-center w-[100%] h-[100%] left-[0] [font-family:'gillsans',Helvetica] font-normal text-black text-[10px] md:text-[13px] lg:text-[15px] xl:text-[17px] 2xl:text[20px] tracking-[0.21px] leading-[normal]">
                          Delve into the delectable realm of fruits and
                          vegetables! This fun and educational game is crafted to
                          help children discover the wide variety of fresh and
                          nutritious produce available.
                          </div>
                          <div className="flex justify-center items-center relative w-[30%] h-[100%]">
                            <button
                              onClick={() =>
                                passParams(
                                  "Fruits and Vegetables",
                                  "https://c.animaapp.com/NIGs1Y1e/img/frame-7.svg",
                                  "#9784D6",
                                  "vege"
                                )
                              }
                            >
                              <img
                                className=""
                                alt="Frame"
                                src="https://c.animaapp.com/YStE9pzZ/img/frame-9.svg"
                              />
                          </button>
                        </div>
                        </div>
                        </div>
                      </div>
                    </div>

                    <div className="relative w-[100%] h-[30%]">
                      <div className="flex flex-row justify-center items-center w-[100%] h-[100%]">
                  
                        <div className="relative w-[100%] h-[100%]">
                          <div className="relative w-[100%] h-[100%] top-[0] bg-[#67ac44] rounded-[20px]">
                            <div className="flex md:flex-row flex-col md:justify-center items-center w-[100%] h-[90%] top-0 bg-[#80C342] rounded-[17px] p-[2%]">
                              <div className="flex justify-center items-center w-[70%] h-[70%]">
                                <img
                                  className="w-[100%] h-[100%] md:shrink-0"
                                  alt="Frame"
                                  src="https://c.animaapp.com/NIGs1Y1e/img/frame-6.svg"
                                />
                              </div>
                              <div className="flex justify-center items-center relative w-[100%] h-[35%] top-[0] left-[0] [font-family:'lapsus',Helvetica] font-bold text-black text-[2.5vw] text-center tracking-[1.07px] leading-[normal] whitespace-nowrap">
                                Food
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="w-[170%] h-[90%]">
                        <div className="flex flex-row justify-center items-center relative w-[100%] h-[100%] bg-white rounded-r-[24px] p-[3%] space-x-[10%]">
                          <div className="flex justify-center items-center w-[100%] h-[100%] left-[0] [font-family:'gillsans',Helvetica] font-normal text-black text-[10px] md:text-[13px] lg:text-[15px] xl:text-[17px] 2xl:text[20px] tracking-[0.21px] leading-[normal]">
                          Savor the delightful world of food! This engaging and
                          mouthwatering game is designed to introduce children to
                          the different array of food categories, all while having
                          a great time.
                          </div>
                          <div className="flex justify-center items-center relative w-[30%] h-[100%]">
                            <button
                              onClick={() =>
                                passParams(
                                  "Food",
                                  "https://c.animaapp.com/NIGs1Y1e/img/frame-6.svg",
                                  "#80C342",
                                  "food"
                                )
                              }
                            >
                              <img
                                className=""
                                alt="Frame"
                                src="https://c.animaapp.com/NIGs1Y1e/img/frame-2.svg"
                              />
                          </button>
                        </div>
                        </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
          <div className="generatechooseplayer">
            <ReactAudioPlayer
                src="/assets/Homepage.mp3"
                autoPlay={true}
                controls
                loop
              />
          </div>
        </div>
      </div>
    </div>
  );
};
