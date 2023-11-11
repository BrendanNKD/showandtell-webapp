import React from "react";
import Navbar from "components/navBar";
import { useNavigate } from "react-router-dom";
import ReactAudioPlayer from 'react-audio-player';

const PlaygroundChoose = () => {
    const navigate = useNavigate();
  return (
    <div className="bg-transparent flex flex-row justify-center w-full">
      <div className="overflow-hidden bg-[url(https://c.animaapp.com/tZB0JjG7/img/group.png)] bg-[100%_100%] w-[1920px] h-[1136.7px] relative">
        <Navbar></Navbar>
        <div className="absolute w-[390px] top-[161px] left-[486px] [font-family:'lapsus',Helvetica] font-bold text-black text-[71px] tracking-[0.71px] leading-[normal] whitespace-nowrap">
          Playground
        </div>
        <div className="absolute w-[917px] h-[181px] top-[259px] left-[480px]">
          <div className="absolute w-[652px] h-[168px] top-[8px] left-[265px] bg-[url(https://c.animaapp.com/tZB0JjG7/img/vector-1.svg)] bg-[100%_100%]">
            <p className="absolute w-[411px] top-[25px] left-[111px] [font-family:'gillsans',Helvetica] font-normal text-black text-[21px] tracking-[0.21px] leading-[normal]">
              Welcome to our world of kid-friendly jigsaw puzzles! Our delightful collection of puzzles is designed to
              captivate young minds, offering hours of creative play while honing problem-solving skills.
            </p>
            <button onClick={()=> navigate('/gaming')}>
            <img
              className="absolute w-[77px] h-[83px] top-[43px] left-[543px]"
              alt="Frame"
              src="https://c.animaapp.com/tZB0JjG7/img/frame-4.svg"
            />
            </button>
          </div>
          <div className="absolute w-[353px] h-[181px] top-0 left-0">
            <div className="relative w-[351px] h-[181px]">
              <div className="w-[351px] h-[163px] top-[18px] bg-[#509f9b] rounded-[20px] absolute left-0" />
              <div className="w-[351px] h-[163px] top-0 bg-[#6dcfb4] rounded-[17px] absolute left-0" />
              <img
                className="absolute w-[109px] h-[109px] top-[25px] left-[34px]"
                alt="Frame"
                src="https://c.animaapp.com/tZB0JjG7/img/frame.svg"
              />
              <div className="absolute w-[157px] top-[31px] left-[159px] [font-family:'lapsus',Helvetica] font-bold text-black text-[41px] text-center tracking-[1.02px] leading-[36px]">
                Jigsaw puzzle game
              </div>
            </div>
          </div>
        </div>
        <div className="absolute w-[917px] h-[181px] top-[484px] left-[480px]">
          <div className="absolute w-[652px] h-[168px] top-[3px] left-[265px] bg-[url(https://c.animaapp.com/tZB0JjG7/img/vector-1.svg)] bg-[100%_100%]">
            <p className="absolute w-[411px] top-[25px] left-[111px] [font-family:'gillsans',Helvetica] font-normal text-black text-[21px] tracking-[0.21px] leading-[normal]">
              Step into the realm of creativity and artistry with our image creation platform. Unleash your imagination
              and craft stunning visual masterpieces with ease. Dive into a world of color, shapes, and innovation.
            </p>
            <button onClick={() => navigate('/playground')}>
                <img
                className="absolute w-[77px] h-[83px] top-[43px] left-[543px]"
                alt="Frame"
                src="https://c.animaapp.com/tZB0JjG7/img/frame-3.svg"
                />
            </button>
          </div>
          <div className="absolute w-[353px] h-[181px] top-0 left-0">
            <div className="relative w-[351px] h-[181px]">
              <div className="absolute w-[351px] h-[163px] top-[18px] left-0 bg-[#5b5d8f] rounded-[20px]" />
              <div className="absolute w-[351px] h-[163px] top-0 left-0 bg-[#929acd] rounded-[17px]" />
              <img
                className="absolute w-[115px] h-[115px] top-[30px] left-[28px]"
                alt="Group"
                src="https://c.animaapp.com/tZB0JjG7/img/group-1@2x.png"
              />
              <div className="absolute w-[157px] top-[54px] left-[159px] [font-family:'lapsus',Helvetica] font-bold text-black text-[41px] text-center tracking-[1.02px] leading-[36px]">
                Create
                <br />
                Art
              </div>
            </div>
          </div>
          <div className="playgroundchooseplayer">
            <ReactAudioPlayer
                src="/assets/Homepage4.mp3"
                autoPlay={true}
                controls
              />
          </div>
        </div>
      </div>
    </div>
  );
};
export default PlaygroundChoose;