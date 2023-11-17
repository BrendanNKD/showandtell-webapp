// import { UseProfile } from "app/state/profile/useProfile";
import Navbar from "components/navBar";
import { useEffect, useState } from "react";

const Home = () => {
  // Redirect user to profile if they are authenticate
  // const profile = UseProfile();
  // const audio = new Audio("/assets/homepage.mp3");
  //Function to forcefully click a button
  //Function to forcefully click a button
  function Test(editButton: any) {
    const element: any = document.getElementById("tst");

    if (editButton) {
      element.click();
    }
  }

  //Run the Function after some effect
  const [editButton] = useState(false);
  useEffect(() => {
    Test(editButton);
    console.log("test:", editButton);
  }, [editButton]);

  //Button click Function to play audio
  // const onClicked = () => {
  //   console.log("CLICKED");
  //   audio.play();
  // };

  return (
    <div className="h-fit flex-col justify-center align-middle">
      <Navbar></Navbar>
      <div className="bg-white w-[100%] h-[3100px] pt-30 relative">
        <div className="flex flex-col items-center w-[100%] h-[100%] rounded-[16px] space-y-10">
          <div className="flex flex-col items-center w-[90%] h-[350px] bg-[#9cdbf8] rounded-[16px] mt-[90px] space-y-0">
            <div className="w-[90%] h-[100%] flex flex-col lg:flex-row items-center justify-center"> 
              <div className="flex flex-row items-center justify-evenly space-x-1">
                <img
                  className="w-[80px] h-[50px] top-0"
                  alt="Frame"
                  src="https://c.animaapp.com/dNKToy8N/img/frame-8.svg"
                />
                <div className="w-[300px] h-[140px] lg:w-[450px] xl:w-[550px] flex justify-center items-center [font-family:'gillsans',Helvetica] font-normal text-black text-[24px] md:text-[30px] lg:text-[33px] tracking-[2.30px] leading-[normal] text-center spacing-tighter">
                  Where learning meets imagination
                </div>
                <img
                  className="w-[60px] h-[50px] top-0"
                  alt="Frame"
                  src="https://c.animaapp.com/dNKToy8N/img/frame-9.svg"
                />
            </div>
            
            <div className="flex lg:h-[260px] justify-center items-center px-7 lg:px-20 flex flex-col items-start gap-[2px] md:h-[100px]">
                  <div className="[font-family:'gillsans',Helvetica] font-normal text-black text-[12px] md:text-[16px] xl:text-[20px] text-center tracking-[0.49px]">
                    Introducing WhatEyeSee: Unlocking the Power of AI-Powered
                    Learning for Young Children!
                    <br />
                  </div>
  
                  <span className="[font-family:'gillsans',Helvetica] font-normal text-black text-[12px] md:text-[12px] xl:text-[16px] text-center tracking-[0.49px]">
                    Are you ready to revolutionize the way your little ones learn
                    and grow? We&#39;re  thrilled to introduce our groundbreaking
                    educational website designed to captivate young minds and
                    inspire a love for learning. Say hello to WhatEyeSee, where the
                    future of child education begins!
                  </span>
            </div>
            </div>
            <div className=" w-[100%] h-[100%] md:h-[100px] rounded-[16px] left-0 bg-[#84c455]">
              <div className= "flex flex-row justify-between items-center w-[100%] h-[100%]"> 
                <div className="flex justify-center items-center w-[100px] h-[100px]">
                  <img
                    className="w-[30px] h-[30px] top-0"
                    alt="Frame"
                    src="https://c.animaapp.com/dNKToy8N/img/frame-7.svg"
                  />
                </div>
                <div className="flex justify-end items-end w-[100px] h-[90px]">
                  <img
                    className="w-[30px] h-[30px] top-0"
                    alt="Group"
                    src="https://c.animaapp.com/dNKToy8N/img/group-4@2x.png"
                  />
                </div>
                <div className="flex justify-center items-start w-[100px] h-[90px]">
                  <img
                    className="w-[50px] h-[70px] top-0"
                    alt="Group"
                    src="https://c.animaapp.com/dNKToy8N/img/group@2x.png"
                  />
                </div>
              </div>
            </div>  
          </div>
        
          {/* first header */}
          <div className="bg-gray-200 flex flex-col w-[90%] h-[1000px] md:h-[600px] lg:h-[900px] xl:h-[800px] items-center space-y-2">
            <div className="mt-[10px] [font-family:'lapsus',Helvetica] font-bold text-black text-[32px] lg:text-[40px] tracking-[0.50px] leading-[normal] whitespace-nowrap">
              Why choose WhatEyeSee?
            </div>
            <div className="flex justify-center items-center w-[100%] p-4">
              <p className="w-[80%] [font-family:'gillsans',Helvetica] font-normal text-black text-[14px] lg:text-[20px] text-center tracking-[0.20px] leading-[normal]">
                At WhatEyeSee, we believe that every child deserves a bright future
                filled with knowledge and creativity. Join us in this extraordinary
                journey of discovery and learning. Watch your child&#39;s eyes light
                up as they explore the world through captivating images and
                AI-generated captions. Unlock the potential of AI-powered learning for
                your child today! Join us and embark on a voyage of imagination and
                education. Together, we&#39;ll shape the next generation of young
                learners!
              </p>
            </div>
            <div className="flex flex-col justify-center items-center w-[100%] space-y-1 xl:px-20">
              <div className="flex flex-col w-[80%] xl:w-[70%] md:flex-row items-center md:space-x-1">
                <div className="w-[160px] md:w-[160px] md:h-[70px] lg:w-[260px] flex justify-center items-center">
                  <img
                    className=""
                    alt="Group"
                    src="https://c.animaapp.com/dNKToy8N/img/group-1@2x.png"
                  />
                </div>
                <div className="flex flex-col p-5 justify-center">
                  <div className="[font-family:'gillsans',Helvetica] font-normal text-black text-[19px] lg:text-[24px] tracking-[0.33px] leading-[normal] text-center md:text-left">
                    AI-Powered Learning
                  </div>
                  <p className="[font-family:'gillsans',Helvetica] font-normal text-black text-[12px] lg:text-[20px] tracking-[0.20px] leading-[normal] text-center md:text-left">
                    Harness the power of AI-generated captions to foster language
                    development and visual recognition in young
                    children.&nbsp;&nbsp;AI-driven learning isn&#39;t just efficient;
                    it&#39;s also incredibly effective. Our platform helps children
                    accelerate their language development and visual recognition skills,
                    giving them a head start in their educational journey.
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center w-[80%] xl:w-[70%] space-y-2 md:space-x-1">
                <div className="w-[160px] h-[100%] md:w-[160px] md:h-[70px] lg:w-[260px] flex justify-center items-center">
                  <img
                    className="md:w-[80px] md:h-[60px]"
                    alt="Group"
                    src="https://c.animaapp.com/dNKToy8N/img/frame.svg"
                  />
                </div>
                <div className="flex flex-col p-5">
                  <div className="[font-family:'gillsans',Helvetica] font-normal text-black text-[19px] lg:text-[24px] tracking-[0.33px] leading-[normal] text-center md:text-left">
                    Learning Through Play
                  </div>
                  <p className="[font-family:'gillsans',Helvetica] font-normal text-black text-[12px] lg:text-[20px] tracking-[0.20px] leading-[normal] text-center md:text-left">
                    Parents and caregivers can easily upload images that are familiar and
                    captivating to their children. Once the image is uploaded, our
                    AI-powered system springs into action, generating descriptive captions
                    that help children understand what they&#39;re seeing. It&#39;s like
                    having a personalized virtual storyteller at your fingertips!
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center space-y-2 w-[80%] xl:w-[70%] md:space-x-1">
                <div className="w-[160px] h-[100%] md:w-[160px] md:h-[70px] lg:w-[260px] flex justify-center items-center">
                  <img
                    className="md:w-[80px] md:h-[60px]"
                    alt="Group"
                    src="https://c.animaapp.com/dNKToy8N/img/vector.svg"
                  />
                </div>
                <div className="flex flex-col p-5">
                  <div className="[font-family:'gillsans',Helvetica] font-normal text-black text-[19px] lg:text-[24px] tracking-[0.33px] leading-[normal] text-center md:text-left">
                    Achievements and Quests
                  </div>
                  <p className="[font-family:'gillsans',Helvetica] font-normal text-black text-[12px] lg:text-[20px] tracking-[0.20px] leading-[normal] text-center md:text-left">
                    What sets WhatEyeSee apart is our unique system of achievements and
                    quests. As your child engages with the platform, they can complete
                    quests and unlock achievements. These quests are designed to be both
                    entertaining and educational, providing a sense of accomplishment that
                    fuels their enthusiasm to learn.
                  </p>
                </div>
              </div>
            </div> 
          </div>
          {/* our services */}
          <div className="flex flex-col justify-center items-center w-[90%]">
            <div className="[font-family:'lapsus',Helvetica] font-bold text-black text-[32px] lg:text-[56px] tracking-[0.56px] leading-[normal]">
              Our Services
            </div>
            <div className="flex flex-col space-y-4 lg:flex-row">
                <div className="flex flex-col justify-center items-center space-y-1">
                    <div className="flex justify-center items-center  w-[125px] h-[125px] lg:w-[160px] lg:h-[160px]">
                      <div className="bg-[#53c2ef] rounded-full h-[100%] w-[100%]">
                        <div className="flex justify-center items-center bg-[#81d2f5] h-[90%] w-[100%] rounded-full">
                          <div className="[font-family:'lapsus',Helvetica] font-bold text-[#020202] text-[48px] text-center tracking-[0.48px] leading-[normal]">
                            CC
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-[260px] left-0 [font-family:'gillsans',Helvetica] font-normal text-[#020202] text-[20px] lg:text-[33px] text-center tracking-[0.33px] leading-[normal]">
                      AI based
                      <br />
                      Captioning
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center space-y-1">
                  <div className="flex justify-center items-center w-[125px] h-[125px] lg:w-[160px] lg:h-[160px]">
                    <img
                      className=""
                      alt="Group"
                      src="https://c.animaapp.com/dNKToy8N/img/group-59@2x.png"
                    />
                  </div>
                    <div className="w-[260px] left-0 [font-family:'gillsans',Helvetica] font-normal text-[#020202] text-[20px] lg:text-[33px] text-center tracking-[0.33px] leading-[normal]">
                      One account, <br />
                      multiple profiles
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center space-y-1">
                    <div className="flex justify-center items-center w-[125px] h-[125px] lg:w-[160px] lg:h-[160px]">
                      <img
                        className=""
                        alt="Group"
                        src="https://c.animaapp.com/dNKToy8N/img/group-66@2x.png"
                      />
                    </div>
                    <div className="w-[260px] left-0 [font-family:'gillsans',Helvetica] font-normal text-[#020202] text-[20px] lg:text-[33px] text-center tracking-[0.33px] leading-[normal]">
                      Different learning
                      <br />
                      Categories
                    </div>

                </div>
                <div className="flex flex-col justify-center items-center space-y-1">
                    <div className="flex justify-center items-center w-[125px] h-[125px] lg:w-[160px] lg:h-[160px]">
                      <img
                          className=""
                          alt="Group"
                          src="https://c.animaapp.com/dNKToy8N/img/frame-6.svg"
                        />
                    </div>
                    <div className="w-[260px] left-0 [font-family:'gillsans',Helvetica] font-normal text-[#020202] text-[20px] lg:text-[33px] text-center tracking-[0.33px] leading-[normal]">
                      Save to <br />
                      Collection
                    </div>
                </div>
            </div>
          </div>
          {/* How it works */}
          <div className="flex flex-col items-center w-[90%] h-[450px] space-y-2">
            <div className="[font-family:'lapsus',Helvetica] font-bold text-black text-[32px] md:text-[50px] tracking-[0.50px] leading-[normal] whitespace-nowrap">
              How it works
            </div>
            <div className="flex flex-col items-center justify-center w-[90%] h-[350px] space-y-5">
              <div className="flex flex-row w-[90%] md:w-[55%] lg:w-[40%]">
                <div className="[font-family:'gillsans',Helvetica] font-normal text-black text-[56px] tracking-[2.80px] leading-[normal] whitespace-nowrap">
                  1.
                </div>
                <div className="flex flex-col">
                  <p className="text-[33px] tracking-[0.33px] whitespace-nowrap [font-family:'gillsans',Helvetica] font-normal text-[#020202] leading-[normal]">
                    Upload
                  </p>
                  <p className="text-[20px] tracking-[0.20px] [font-family:'gillsans',Helvetica] font-normal text-[#020202] leading-[normal]">
                    Upload an image to the generate page
                  </p>
                </div>
              </div>
              <div className="flex flex-row w-[90%] md:w-[55%] lg:w-[40%]">
                <div className="[font-family:'gillsans',Helvetica] font-normal text-black text-[56px] tracking-[2.80px] leading-[normal] whitespace-nowrap">
                  2.
                </div>
                <div className="flex flex-col">
                  <p className="text-[33px] tracking-[0.33px] whitespace-nowrap [font-family:'gillsans',Helvetica] font-normal text-[#020202] leading-[normal]">
                    Generate
                  </p>
                  <p className="text-[20px] tracking-[0.20px] [font-family:'gillsans',Helvetica] font-normal text-[#020202] leading-[normal]">
                    Click on the generate button to generate a caption
                  </p>
                </div>
              </div>
              <div className="flex flex-row w-[90%] md:w-[55%] lg:w-[40%]">
                <div className="[font-family:'gillsans',Helvetica] font-normal text-black text-[56px] tracking-[2.80px] leading-[normal] whitespace-nowrap">
                  3.
                </div>
                <div className="flex flex-col">
                  <p className="text-[33px] tracking-[0.33px] whitespace-nowrap [font-family:'gillsans',Helvetica] font-normal text-[#020202] leading-[normal]">
                    Learn
                  </p>
                  <p className="text-[20px] tracking-[0.20px] [font-family:'gillsans',Helvetica] font-normal text-[#020202] leading-[normal]">
                    Play, learn or save the captioned image to your collection, the
                    <br />
                    possibilities are endless!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center w-[90%]">
          <div className="[font-family:'lapsus',Helvetica] font-bold text-black text-[32px] lg:text-[56px] tracking-[0.56px] leading-[normal]">Subscription Plans</div>
          </div>
          {/* pricing */}
          <div className="flex flex-col items-center justify-evenly lg:flex-row lg:space-x-10 lg:justify-center lg:items-start w-[100%] h-[830px] lg:h-[400px]">
            <div className="flex flex-col space-y-2 items-center bg-gray-300 w-[300px] h-[400px] rounded-[27px] p-5">
              <div className="[font-family:'gillsans',Helvetica] font-bold text-black text-[40px] tracking-[0.56px] leading-[normal]">
                Monthly
              </div>
              <div>
                <span className="[font-family:'gillsans',Helvetica] font-normal text-black text-[63px] tracking-[2.21px]">
                  $19
                </span>
                <span className="text-[20px] tracking-[0.70px]"> / Year</span>
              </div>
              <div className="flex items-center w-[90%] h-[60px] space-x-5">
                <img
                  className="w-[36px] h-[26px] top-0 left-0"
                  alt="Vector"
                  src="https://c.animaapp.com/dNKToy8N/img/vector-6.svg"
                />
                <div className="top-0 left-0 [font-family:'gillsans',Helvetica] font-normal text-black text-[17px] tracking-[0.17px] leading-[normal]">
                  One account, multiple profiles
                </div>
              </div>
              <div className="flex items-center w-[90%] h-[60px] space-x-5">
                <img
                  className="w-[36px] h-[26px] top-0 left-0"
                  alt="Vector"
                  src="https://c.animaapp.com/dNKToy8N/img/vector-6.svg"
                />
                <div className="top-0 left-0 [font-family:'gillsans',Helvetica] font-normal text-black text-[17px] tracking-[0.17px] leading-[normal]">
                  Unlimited Uploads
                </div>
              </div>
              <div className="w-[162px] h-[59px]">
                <div className="relative w-[160px] h-[59px] bg-[#67ac44] rounded-[18px]">
                  <div className="flex justify-center items-center w-[160px] h-[50px] top-0 rounded-[18px] left-0 bg-[#84c455]">
                    <div className="w-[115px] [font-family:'gillsans',Helvetica] font-normal text-black text-[20px] tracking-[0.70px] leading-[normal] whitespace-nowrap">
                      Choose Plan
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-2 items-center bg-gray-300 w-[300px] h-[400px] rounded-[27px] p-5">
              <div className="[font-family:'gillsans',Helvetica] font-bold text-black text-[40px] tracking-[0.56px] leading-[normal]">
                Yearly
              </div>
              <div>
                <span className="[font-family:'gillsans',Helvetica] font-normal text-black text-[63px] tracking-[2.21px]">
                  $199
                </span>
                <span className="text-[20px] tracking-[0.70px]"> / Year</span>
              </div>
              <div className="flex items-center w-[90%] h-[60px] space-x-5">
                <img
                  className="w-[36px] h-[26px] top-0 left-0"
                  alt="Vector"
                  src="https://c.animaapp.com/dNKToy8N/img/vector-6.svg"
                />
                <div className="top-0 left-0 [font-family:'gillsans',Helvetica] font-normal text-black text-[17px] tracking-[0.17px] leading-[normal]">
                  One account, multiple profiles
                </div>
              </div>
              <div className="flex items-center w-[90%] h-[60px] space-x-5">
                <img
                  className="w-[36px] h-[26px] top-0 left-0"
                  alt="Vector"
                  src="https://c.animaapp.com/dNKToy8N/img/vector-6.svg"
                />
                <div className="top-0 left-0 [font-family:'gillsans',Helvetica] font-normal text-black text-[17px] tracking-[0.17px] leading-[normal]">
                  Unlimited Uploads
                </div>
              </div>
              <div className="w-[162px] h-[59px]">
                <div className="relative w-[160px] h-[59px] bg-[#67ac44] rounded-[18px]">
                  <div className="flex justify-center items-center w-[160px] h-[50px] top-0 rounded-[18px] left-0 bg-[#84c455]">
                    <div className="w-[115px] [font-family:'gillsans',Helvetica] font-normal text-black text-[20px] tracking-[0.70px] leading-[normal] whitespace-nowrap">
                      Choose Plan
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* team details */}
          <div className="flex flex-col justify-center items-center w-[90%]"> 
            <div className="[font-family:'lapsus',Helvetica] font-bold text-black text-[56px] tracking-[0.56px] leading-[normal]">
              Our Team
            </div>
            <div className="flex flex-col space-y-2 lg:flex-row lg:space-x-2">
              <div className="flex flex-col justify-center items-center">
                <img
                  className="w-[147px] h-[147px]"
                  alt="Frame"
                  src="https://c.animaapp.com/dNKToy8N/img/frame-1.png"
                />
                <div className="w-[180px] [font-family:'gillsans',Helvetica] font-normal text-black text-[24px] text-center tracking-[0.24px] leading-[normal]">
                  Brendan Ng
                  <br />
                  Kun Deng
                </div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img
                  className="w-[147px] h-[147px]"
                  alt="Frame"
                  src="https://c.animaapp.com/dNKToy8N/img/frame-5.svg"
                />
                <div className="w-[180px] [font-family:'gillsans',Helvetica] font-normal text-black text-[24px] text-center tracking-[0.24px] leading-[normal]">
                  Chew <br />
                  Zhi Hui
                </div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img
                  className="w-[147px] h-[147px]"
                  alt="Frame"
                  src="https://c.animaapp.com/dNKToy8N/img/frame-4.svg"
                />
                <div className="w-[180px] [font-family:'gillsans',Helvetica] font-normal text-black text-[24px] text-center tracking-[0.24px] leading-[normal]">
                  Choong
                  <br />
                  Kit Wen
                </div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img
                  className="w-[147px] h-[147px]"
                  alt="Frame"
                  src="https://c.animaapp.com/dNKToy8N/img/frame-3.svg"
                />
                <div className="w-[180px] [font-family:'gillsans',Helvetica] font-normal text-black text-[24px] text-center tracking-[0.24px] leading-[normal]">
                  Dominic Wong De Ming
                </div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img
                  className="w-[147px] h-[147px]"
                  alt="Frame"
                  src="https://c.animaapp.com/dNKToy8N/img/frame-2.svg"
                />
                <div className="w-[180px] [font-family:'gillsans',Helvetica] font-normal text-black text-[24px] text-center tracking-[0.24px] leading-[normal]">
                  Kim
                  <br />
                  Wei Hao
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
