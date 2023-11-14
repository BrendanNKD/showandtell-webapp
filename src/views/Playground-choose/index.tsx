import React from "react";
import Navbar from "components/navBar";
import { useNavigate } from "react-router-dom";
import ReactAudioPlayer from 'react-audio-player';

const PlaygroundChoose = () => {
    const navigate = useNavigate();
  return (
    <div className="h-fit flex-col justify-center items-center align-middle">
      <Navbar />
      <div className="bg-transparent flex flex-row justify-center items-center w-full">
        <div className="overflow-hidden bg-[url(https://c.animaapp.com/YStE9pzZ/img/group.png)] bg-[100%_100%] w-[1920px] h-[1136.7px] relative pt-20 px-3 md:px-20">
        <div className="bg-transparent flex flex-col justify-center items-center w-full space-y-5">
          <div className="[font-family:'lapsus',Helvetica] font-bold text-black text-[56px] tracking-[0.71px] leading-[normal] whitespace-nowrap">
                Playground
          </div>
            <div className="">
              <div className="flex flex-row justify-center items-center w-[100%] space-x-[2%]">                  
                <div className="flex flex-col justify-start items-center w-[100%] h-[500px] lg:w-[70%] lg:h-[550px] xl:w-[60%] xl:h-[700px] space-y-[3%]">
                  {/*game*/}
                  <div className="relative w-[100%] h-[30%]">
                    <div className="flex flex-row justify-center items-center w-[100%] h-[100%]">
                      <div className="relative w-[100%] h-[100%]">
                        <div className="relative w-[100%] h-[100%] top-[0] bg-[#509f9b] rounded-[20px]">
                          <div className="flex md:flex-row flex-col md:justify-center items-center w-[100%] h-[90%] top-0 bg-[#6dcfb4] rounded-[17px] p-[2%]">
                            <div className="flex justify-center items-center w-[70%] h-[70%]">
                              <img
                                className="w-[100%] h-[100%]"
                                alt="Frame"
                                src="https://c.animaapp.com/tZB0JjG7/img/frame.svg"
                              />
                            </div>
                            <div className="flex justify-center items-center relative w-[100%] h-[35%] top-[0] left-[0] [font-family:'lapsus',Helvetica] font-bold text-black text-xl lg:text-2xl xl:text-[40px] text-center tracking-[1.07px] leading-[normal] whitespace-nowrap">
                              Jigsaw puzzle <br/> game
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[170%] h-[90%]">
                        <div className="flex flex-row justify-center items-center relative w-[100%] h-[100%] bg-white rounded-r-[24px] p-[3%] space-x-[10%]">
                          <div className="overflow-hidden flex justify-center items-center w-[100%] h-[100%] left-[0] [font-family:'gillsans',Helvetica] font-normal text-black text-[10px] md:text-[13px] lg:text-[15px] xl:text-[17px] 2xl:text[20px] tracking-[0.21px] leading-[normal]">
                            Welcome to our world of kid-friendly jigsaw puzzles! Our delightful collection of puzzles is designed to
                            captivate young minds, offering hours of creative play while honing problem-solving skills.
                          </div>
                          <div className="flex justify-center items-center relative w-[30%] h-[100%]">
                            <button onClick={()=> navigate('/gaming')}>
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
                  {/*create art*/}
                  <div className="relative w-[100%] h-[30%]">
                    <div className="flex flex-row justify-center items-center w-[100%] h-[100%]">
                      <div className="relative w-[100%] h-[100%]">
                        <div className="relative w-[100%] h-[100%] top-[0] bg-[#5b5d8f] rounded-[20px]">
                          <div className="flex md:flex-row flex-col md:justify-center items-center w-[100%] h-[90%] top-0 bg-[#929acd] rounded-[17px] p-[2%]">
                            <div className="flex justify-center items-center w-[70%] h-[70%]">
                              <img
                                className="md:w-[100%] md:h-[100%] w-[90px] h-[70px]"
                                alt="Frame"
                                src="https://c.animaapp.com/tZB0JjG7/img/group-1@2x.png"
                              />
                            </div>
                            <div className="flex justify-center items-center relative w-[100%] h-[35%] top-[0] left-[0] [font-family:'lapsus',Helvetica] font-bold text-black text-xl lg:text-2xl xl:text-[40px] text-center tracking-[1.07px] leading-[normal] whitespace-nowrap">
                              Create art
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[170%] h-[90%]">
                        <div className="flex flex-row justify-center items-center relative w-[100%] h-[100%] bg-white rounded-r-[24px] p-[3%] space-x-[10%]">
                          <div className="overflow-hidden flex justify-center items-center w-[100%] h-[100%] left-[0] [font-family:'gillsans',Helvetica] font-normal text-black text-[10px] md:text-[13px] lg:text-[15px] xl:text-[17px] 2xl:text[20px] tracking-[0.21px] leading-[normal]">
                            Step into the realm of creativity and artistry with our image creation platform. Unleash your imagination
                            and craft stunning visual masterpieces with ease. Dive into a world of color, shapes, and innovation.
                          </div>
                          <div className="flex justify-center items-center relative w-[30%] h-[100%]">
                            <button onClick={()=> navigate('/playground')}>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PlaygroundChoose;