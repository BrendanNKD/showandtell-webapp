import React from "react";
import Navbar from "components/navBar";
import Footer from "components/footer";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
//import 'swiper/css/navigation';

//import './styles.css';

// import required modules
import { Navigation, Pagination} from 'swiper/modules';



export const GenerateChoose = (): JSX.Element => {

  const swiperStyle = {
    width: '100%',
    height: '100%',
  };

  const swiperSlideStyle = {
    //textAlign: 'center',
    fontSize: '18px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const swiperSlideImgStyle = {
    display: 'block',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };



  const navigate = useNavigate();

  return (
    <div className="h-fit flex-col justify-center align-middle">
      <Navbar />
      <div className="bg-transparent flex flex-row justify-center w-full ">
        <div className="overflow-hidden bg-[url(https://c.animaapp.com/YStE9pzZ/img/group.png)] bg-[100%_100%] w-[1920px] h-[1136.7px] relative">
          <div className="absolute w-[259px] top-[161px] left-[486px] [font-family:'lapsus',Helvetica] font-bold text-black text-[71px] tracking-[0.71px] leading-[normal] whitespace-nowrap">
            Generate
          </div>
          <Swiper navigation={{
                  prevEl: '.prev',
                  nextEl: '.next',
                  }} 
                  pagination={{clickable: true,
                               el: `swiper-container swiper-container-testClass`,
                               bulletClass: `swiper-pagination-bullet swiper-pagination-testClass`}}
                  modules={[Navigation, Pagination]} 
                  style={swiperStyle} 
                  className="mySwiper" 
                  preventClicks = {false}
                  preventClicksPropagation = {false}
                  touchStartPreventDefault={false}
                  watchSlidesProgress = {true}>
            <div> 
              <SwiperSlide style={swiperSlideStyle} >
                <div>
                <button className="next">
                <img src="https://c.animaapp.com/YStE9pzZ/img/frame-5.svg"
                 alt="Frame"
                 className="absolute w-[77px] h-[83px] top-[527px] left-[1468px]"
                 />
                 </button>
                  <div className="absolute w-[922px] h-[181px] top-[259px] left-[475px]">
                    <div className="absolute w-[652px] h-[168px] top-[7px] left-[270px] bg-[url(https://c.animaapp.com/YStE9pzZ/img/vector-2.svg)] bg-[100%_100%]">
                      <p className="absolute w-[411px] top-[25px] left-[111px] [font-family:'gillsans',Helvetica] font-normal text-black text-[21px] tracking-[0.21px] leading-[normal]">
                        Learn about the world of animals and the creatures around you! This educational and entertaining game is
                        designed to help children learn about animals from all around the world while having loads of fun.
                      </p>
                      <button onClick = {() => {navigate("/temp");}}>
                      <img
                        className="absolute w-[77px] h-[83px] top-[43px] left-[543px]"
                        alt="Frame"
                        src="https://c.animaapp.com/YStE9pzZ/img/frame-9.svg"
                      />
                      </button>
                    </div>
                    <div className="absolute w-[353px] h-[181px] top-0 left-0">
                      <div className="relative w-[351px] h-[181px]">
                        <div className="w-[351px] h-[163px] top-[18px] bg-[#ef59a1] rounded-[20px] absolute left-0" />
                        <div className="w-[351px] h-[163px] top-0 bg-[#f177ae] rounded-[17px] absolute left-0" />

                        <img
                          className="absolute w-[105px] h-[92px] top-[44px] left-[23px]"
                          alt="Frame"
                          src="https://c.animaapp.com/YStE9pzZ/img/frame-2.svg"
                        />
                        
                        <div className="absolute w-[157px] top-[69px] left-[151px] [font-family:'lapsus',Helvetica] font-bold text-black text-[43px] text-center tracking-[1.07px] leading-[normal] whitespace-nowrap">
                          Animals
                        </div>
                      </div>
                    </div>

                  </div>



                  <div className="absolute w-[922px] h-[181px] top-[466px] left-[475px]">
                    <div className="absolute w-[652px] h-[168px] top-[9px] left-[270px] bg-[url(https://c.animaapp.com/YStE9pzZ/img/vector-2.svg)] bg-[100%_100%]">
                      <p className="absolute w-[411px] top-[25px] left-[111px] [font-family:'gillsans',Helvetica] font-normal text-black text-[21px] tracking-[0.21px] leading-[normal]">
                        Learn about the world of animals and the creatures around you! This educational and entertaining game is
                        designed to help children learn about animals from all around the world while having loads of fun.
                      </p>
                      <img
                        className="absolute w-[77px] h-[83px] top-[43px] left-[543px]"
                        alt="Frame"
                        src="https://c.animaapp.com/YStE9pzZ/img/frame-8.svg"
                      />
                    </div>
                    <div className="absolute w-[353px] h-[181px] top-0 left-0">
                      <div className="relative w-[351px] h-[181px]">
                        <div className="w-[351px] h-[163px] top-[18px] bg-[#facd0a] rounded-[20px] absolute left-0" />
                        <div className="w-[351px] h-[163px] top-0 bg-[#fae55a] rounded-[17px] absolute left-0" />
                        <div className="absolute w-[164px] top-[43px] left-[151px] [font-family:'lapsus',Helvetica] font-bold text-black text-[43px] text-center tracking-[1.07px] leading-[normal]">
                          Shapes &amp; Colors
                        </div>
                        <img
                          className="absolute w-[120px] h-[77px] top-[51px] left-[14px]"
                          alt="Frame"
                          src="https://c.animaapp.com/YStE9pzZ/img/frame.svg"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="absolute w-[922px] h-[181px] top-[678px] left-[475px]">
                    <div className="absolute w-[652px] h-[168px] top-[6px] left-[270px] bg-[url(https://c.animaapp.com/YStE9pzZ/img/vector-2.svg)] bg-[100%_100%]">
                      <p className="absolute w-[411px] top-[25px] left-[111px] [font-family:'gillsans',Helvetica] font-normal text-black text-[21px] tracking-[0.21px] leading-[normal]">
                        Learn about the world of animals and the creatures around you! This educational and entertaining game is
                        designed to help children learn about animals from all around the world while having loads of fun.
                      </p>
                      <img
                        className="absolute w-[77px] h-[83px] top-[43px] left-[543px]"
                        alt="Frame"
                        src="https://c.animaapp.com/YStE9pzZ/img/frame-7.svg"
                      />
                    </div>
                    <div className="absolute w-[353px] h-[181px] top-0 left-0">
                      <div className="relative w-[351px] h-[181px]">
                        <div className="w-[351px] h-[163px] top-[18px] bg-[#491d6f] rounded-[20px] absolute left-0" />
                        <div className="w-[351px] h-[163px] top-0 bg-[#885fa8] rounded-[17px] absolute left-0" />
                        <img
                          className="absolute w-[123px] h-[69px] top-[55px] left-[21px]"
                          alt="Frame"
                          src="https://c.animaapp.com/YStE9pzZ/img/frame-1.svg"
                        />
                        <div className="absolute w-[164px] top-[61px] left-[151px] [font-family:'lapsus',Helvetica] font-bold text-black text-[43px] text-center tracking-[1.07px] leading-[normal] whitespace-nowrap">
                          Vehicles
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide style={swiperSlideStyle}>
                <div>
                <button className="prev">
                <img src="https://c.animaapp.com/qxMy52EW/img/frame-3.svg"
                 alt="Frame"
                 className="absolute w-[77px] h-[83px] top-[527px] left-[349px]"
                />
                </button>

                  <div className="absolute w-[911px] h-[181px] top-[259px] left-[486px]">
                    <div className="absolute w-[652px] h-[168px] top-[7px] left-[259px] bg-[url(https://c.animaapp.com/NIGs1Y1e/img/vector-2.svg)] bg-[100%_100%]">
                      <p className="absolute w-[411px] top-[25px] left-[111px] [font-family:'gillsans',Helvetica] font-normal text-black text-[21px] tracking-[0.21px] leading-[normal]">
                        Learn about the world of animals and the creatures around you! This educational and entertaining game is
                        designed to help children learn about animals from all around the world while having loads of fun.
                      </p>
                      <img
                        className="absolute w-[77px] h-[83px] top-[43px] left-[543px]"
                        alt="Frame"
                        src="https://c.animaapp.com/NIGs1Y1e/img/frame.svg"
                      />

                    </div>
                    <div className="absolute w-[353px] h-[181px] top-0 left-0">
                      <div className="relative w-[351px] h-[181px]">
                        <div className="w-[351px] h-[163px] top-[18px] bg-[#e78324] rounded-[20px] absolute left-0" />
                        <div className="w-[351px] h-[163px] top-0 bg-[#fcb315] rounded-[17px] absolute left-0" />
                        <img
                          className="absolute w-[108px] h-[108px] top-[27px] left-[23px]"
                          alt="Frame"
                          src="https://c.animaapp.com/NIGs1Y1e/img/frame-5.svg"
                        />
                        <div className="absolute w-[157px] top-[69px] left-[151px] [font-family:'lapsus',Helvetica] font-bold text-black text-[43px] text-center tracking-[1.07px] leading-[normal] whitespace-nowrap">
                          Flowers
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute w-[911px] h-[181px] top-[466px] left-[486px]">
                    <div className="absolute w-[652px] h-[168px] top-[9px] left-[259px] bg-[url(https://c.animaapp.com/NIGs1Y1e/img/vector-2.svg)] bg-[100%_100%]">
                      <p className="absolute w-[411px] top-[25px] left-[111px] [font-family:'gillsans',Helvetica] font-normal text-black text-[21px] tracking-[0.21px] leading-[normal]">
                        Learn about the world of animals and the creatures around you! This educational and entertaining game is
                        designed to help children learn about animals from all around the world while having loads of fun.
                      </p>
                      <img
                        className="absolute w-[77px] h-[83px] top-[43px] left-[543px]"
                        alt="Frame"
                        src="https://c.animaapp.com/NIGs1Y1e/img/frame-1.svg"
                      />
                    </div>
                    <div className="absolute w-[353px] h-[181px] top-0 left-0">
                      <div className="relative w-[351px] h-[181px]">
                        <div className="w-[351px] h-[163px] top-[18px] bg-[#61588c] rounded-[20px] absolute left-0" />
                        <div className="w-[351px] h-[163px] top-0 bg-[#9784d6] rounded-[17px] absolute left-0" />
                        <div className="absolute w-[200px] top-[43px] left-[131px] [font-family:'lapsus',Helvetica] font-bold text-black text-[43px] text-center tracking-[1.07px] leading-[normal]">
                          Fruits &amp;
                          <br />
                          Vegetables
                        </div>
                        <img
                          className="absolute w-[106px] h-[99px] top-[41px] left-[21px]"
                          alt="Frame"
                          src="https://c.animaapp.com/NIGs1Y1e/img/frame-7.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="absolute w-[911px] h-[181px] top-[678px] left-[486px]">
                    <div className="absolute w-[652px] h-[168px] top-[6px] left-[259px] bg-[url(https://c.animaapp.com/NIGs1Y1e/img/vector-2.svg)] bg-[100%_100%]">
                      <p className="absolute w-[411px] top-[25px] left-[111px] [font-family:'gillsans',Helvetica] font-normal text-black text-[21px] tracking-[0.21px] leading-[normal]">
                        Learn about the world of animals and the creatures around you! This educational and entertaining game is
                        designed to help children learn about animals from all around the world while having loads of fun.
                      </p>
                      <img
                        className="absolute w-[77px] h-[83px] top-[43px] left-[543px]"
                        alt="Frame"
                        src="https://c.animaapp.com/NIGs1Y1e/img/frame-2.svg"
                      />
                    </div>
                    <div className="absolute w-[353px] h-[181px] top-0 left-0">
                      <div className="relative w-[351px] h-[181px]">
                        <div className="w-[351px] h-[163px] top-[18px] bg-[#67ac44] rounded-[20px] absolute left-0" />
                        <div className="w-[351px] h-[163px] top-0 bg-[#80c342] rounded-[17px] absolute left-0" />
                        <img
                          className="absolute w-[102px] h-[112px] top-[24px] left-[39px]"
                          alt="Frame"
                          src="https://c.animaapp.com/NIGs1Y1e/img/frame-6.svg"
                        />
                        <div className="absolute w-[164px] top-[61px] left-[151px] [font-family:'lapsus',Helvetica] font-bold text-black text-[43px] text-center tracking-[1.07px] leading-[normal] whitespace-nowrap">
                          Food
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
          <div className= "absolute w-[77px] h-[33px] top-[893px] left-[946px]">
            {/*alt="Frame"
                  src="https://c.animaapp.com/YStE9pzZ/img/frame-6.svg"*/}
          </div>
        
          {/*<img 
          className="absolute w-[77px] h-[83px] top-[527px] left-[1468px]"
          alt="Frame"
          src="https://c.animaapp.com/YStE9pzZ/img/frame-5.svg"
        />*/}

          {/*<div className="absolute w-[1920px] h-[96px] -top-px left-px bg-white">
          <img
            className="absolute w-[81px] h-[81px] top-[8px] left-[1776px]"
            alt="Frame"
            src="https://c.animaapp.com/YStE9pzZ/img/frame-4.svg"
          />
          <img
            className="absolute w-[38px] h-[48px] top-[30px] left-[1701px]"
            alt="Group"
            src="https://c.animaapp.com/YStE9pzZ/img/group-1@2x.png"
          />
          <div className="absolute w-[238px] h-[59px] top-[25px] left-[492px]">
            <div className="relative w-[236px] h-[59px]">
              <div className="w-[236px] h-[53px] top-[6px] bg-[#66ae45] rounded-[13px] absolute left-0" />
              <div className="w-[236px] h-[53px] top-0 bg-[#84c455] rounded-[13px] absolute left-0" />
              <div className="absolute w-[207px] top-[6px] left-[14px] [font-family:'lapsus',Helvetica] font-bold text-black text-[43px] text-center tracking-[1.07px] leading-[normal] whitespace-nowrap">
                Dashboard
              </div>
            </div>
          </div>
          <div className="absolute w-[238px] h-[59px] top-[25px] left-[1039px]">
            <div className="relative w-[236px] h-[59px]">
              <div className="w-[236px] bg-[#facd0a] absolute h-[53px] top-[6px] left-0 rounded-[13px]" />
              <div className="w-[236px] bg-[#fae55a] absolute h-[53px] top-0 left-0 rounded-[13px]" />
              <div className="absolute w-[207px] top-[6px] left-[14px] [font-family:'lapsus',Helvetica] font-bold text-black text-[43px] text-center tracking-[1.07px] leading-[normal] whitespace-nowrap">
                Collection
              </div>
            </div>
          </div>
          <div className="absolute w-[238px] h-[59px] top-[25px] left-[1326px]">
            <div className="relative w-[236px] h-[59px]">
              <div className="w-[236px] bg-[#e78324] absolute h-[53px] top-[6px] left-0 rounded-[13px]" />
              <div className="w-[236px] bg-[#fcb315] absolute h-[53px] top-0 left-0 rounded-[13px]" />
              <div className="absolute w-[207px] top-[6px] left-[14px] [font-family:'lapsus',Helvetica] font-bold text-black text-[43px] text-center tracking-[1.07px] leading-[normal] whitespace-nowrap">
                Playground
              </div>
            </div>
          </div>
          <div className="absolute w-[207px] h-[59px] top-[25px] left-[781px]">
            <div className="relative w-[205px] h-[59px]">
              <div className="w-[205px] bg-[#53c2ef] absolute h-[53px] top-[6px] left-0 rounded-[13px]" />
              <div className="w-[205px] bg-[#9cdcf9] absolute h-[53px] top-0 left-0 rounded-[13px]" />
              <div className="absolute w-[180px] top-[6px] left-[12px] [font-family:'lapsus',Helvetica] font-bold text-black text-[43px] text-center tracking-[1.07px] leading-[normal] whitespace-nowrap">
                Generate
              </div>
            </div>
        </div>
          <img
            className="absolute w-[219px] h-[37px] top-[41px] left-[70px]"
            alt="Frame"
            src="https://c.animaapp.com/YStE9pzZ/img/frame-3.svg"
          />
        </div>*/}

        </div>
      </div>
      <Footer />
    </div>
  );
};
