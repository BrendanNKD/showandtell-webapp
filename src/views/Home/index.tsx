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
      <div className="bg-white w-[1920px] h-[3870px] relative">
        <div className="absolute w-[1845px] h-[566px] top-[104px] left-[38px] rounded-[16px]">
          <div className="absolute w-[1845px] h-[566px] top-0 left-0 bg-[#9cdbf8] rounded-[16px]">
            <div className="absolute w-[1845px] h-[210px] top-[356px] left-0">
              <div className="w-[1845px] h-[119px] top-[91px] rounded-[16px] absolute left-0 bg-[#84c455]" />
              <img
                className="absolute w-[96px] h-[133px] top-0 left-[1605px]"
                alt="Group"
                src="https://c.animaapp.com/dNKToy8N/img/group@2x.png"
              />
              <img
                className="absolute w-[56px] h-[49px] top-[125px] left-[162px]"
                alt="Frame"
                src="https://c.animaapp.com/dNKToy8N/img/frame-7.svg"
              />
              <img
                className="absolute w-[54px] h-[59px] top-[115px] left-[1507px]"
                alt="Group"
                src="https://c.animaapp.com/dNKToy8N/img/group-4@2x.png"
              />
            </div>
            <div className="absolute w-[449px] h-[191px] top-[49px] left-[1353px]">
              <img
                className="absolute w-[400px] h-[179px] top-0 left-0"
                alt="Vector"
                src="https://c.animaapp.com/dNKToy8N/img/vector-7.svg"
              />
              <img
                className="absolute w-[184px] h-[106px] top-[85px] left-[265px]"
                alt="Frame"
                src="https://c.animaapp.com/dNKToy8N/img/frame-9.svg"
              />
            </div>
            <img
              className="absolute w-[162px] h-[93px] top-[49px] left-[98px]"
              alt="Frame"
              src="https://c.animaapp.com/dNKToy8N/img/frame-8.svg"
            />
          </div>
          <div className="flex flex-col items-start gap-[2px] absolute w-[597px] h-[70px] top-[251px] left-[633px]">
            <p className="relative self-stretch [font-family:'gillsans',Helvetica] font-normal text-black text-[14px] text-center tracking-[0.49px] leading-[normal]">
              <span className="[font-family:'gillsans',Helvetica] font-normal text-black text-[14px] tracking-[0.49px]">
                Introducing WhatEyeSee: Unlocking the Power of AI-Powered
                Learning for Young Children!
                <br />
              </span>
            </p>
            <p className="relative self-stretch [font-family:'gillsans',Helvetica] font-normal text-black text-[14px] text-center tracking-[0.49px] leading-[normal]">
              <span className="[font-family:'gillsans',Helvetica] font-normal text-black text-[14px] tracking-[0.49px]">
                Are you ready to revolutionize the way your little ones learn
                and grow? We&#39;re thrilled to introduce our groundbreaking
                educational website designed to captivate young minds and
                inspire a love for learning. Say hello to WhatEyeSee, where the
                future of child education begins!
              </span>
            </p>
          </div>
          <div className="absolute w-[736px] top-[165px] left-[570px] [font-family:'gillsans',Helvetica] font-normal text-black text-[46px] tracking-[2.30px] leading-[normal]">
            Where learning meets imagination
          </div>
        </div>
        <div className="w-[225px] top-[3399px] left-[848px] absolute [font-family:'lapsus',Helvetica] font-bold text-black text-[56px] tracking-[0.56px] leading-[normal]">
          Our Team
        </div>
        <div className="absolute w-[262px] h-[351px] top-[1592px] left-[999px]">
          <div className="absolute w-[260px] top-[261px] left-0 [font-family:'gillsans',Helvetica] font-normal text-[#020202] text-[33px] text-center tracking-[0.33px] leading-[normal]">
            Different learning
            <br />
            Categories
          </div>
          <img
            className="absolute w-[191px] h-[195px] top-0 left-[31px]"
            alt="Group"
            src="https://c.animaapp.com/dNKToy8N/img/group-66@2x.png"
          />
        </div>
        <div className="w-[291px] top-[1480px] left-[826px] absolute [font-family:'lapsus',Helvetica] font-bold text-black text-[56px] tracking-[0.56px] leading-[normal]">
          Our Services
        </div>
        <div className="absolute w-[262px] h-[265px] top-[1678px] left-[1303px]">
          <div className="w-[260px] top-[175px] left-0 text-[33px] text-center tracking-[0.33px] absolute [font-family:'gillsans',Helvetica] font-normal text-[#020202] leading-[normal]">
            Save to <br />
            Collection
          </div>
          <img
            className="absolute w-[108px] h-[117px] top-0 left-[75px]"
            alt="Frame"
            src="https://c.animaapp.com/dNKToy8N/img/frame-6.svg"
          />
        </div>
        <img
          className="absolute w-[147px] h-[147px] top-[3506px] left-[686px]"
          alt="Frame"
          src="https://c.animaapp.com/dNKToy8N/img/frame-5.svg"
        />
        <div className="absolute w-[180px] top-[3666px] left-[669px] [font-family:'gillsans',Helvetica] font-normal text-black text-[24px] text-center tracking-[0.24px] leading-[normal]">
          Chew <br />
          Zhi Hui
        </div>
        <img
          className="absolute w-[147px] h-[147px] top-[3506px] left-[890px]"
          alt="Frame"
          src="https://c.animaapp.com/dNKToy8N/img/frame-4.svg"
        />
        <div className="absolute w-[180px] top-[3666px] left-[873px] [font-family:'gillsans',Helvetica] font-normal text-black text-[24px] text-center tracking-[0.24px] leading-[normal]">
          Choong
          <br />
          Kit Wen
        </div>
        <img
          className="absolute w-[147px] h-[147px] top-[3506px] left-[1094px]"
          alt="Frame"
          src="https://c.animaapp.com/dNKToy8N/img/frame-3.svg"
        />
        <div className="absolute w-[180px] top-[3666px] left-[1077px] [font-family:'gillsans',Helvetica] font-normal text-black text-[24px] text-center tracking-[0.24px] leading-[normal]">
          Dominic Wong De Ming
        </div>
        <img
          className="absolute w-[147px] h-[147px] top-[3506px] left-[1298px]"
          alt="Frame"
          src="https://c.animaapp.com/dNKToy8N/img/frame-2.svg"
        />
        <div className="absolute w-[180px] top-[3666px] left-[1281px] [font-family:'gillsans',Helvetica] font-normal text-black text-[24px] text-center tracking-[0.24px] leading-[normal]">
          Kim
          <br />
          Wei Hao
        </div>
        <div className="absolute w-[180px] top-[3666px] left-[465px] [font-family:'gillsans',Helvetica] font-normal text-black text-[24px] text-center tracking-[0.24px] leading-[normal]">
          Brendan Ng
          <br />
          Kun Deng
        </div>
        <img
          className="absolute w-[147px] h-[147px] top-[3509px] left-[481px]"
          alt="Frame"
          src="https://c.animaapp.com/dNKToy8N/img/frame-1.png"
        />
        <p className="absolute w-[1222px] top-[810px] left-[377px] [font-family:'gillsans',Helvetica] font-normal text-black text-[20px] tracking-[0.20px] leading-[normal]">
          At WhatEyeSee, we believe that every child deserves a bright future
          filled with knowledge and creativity. Join us in this extraordinary
          journey of discovery and learning. Watch your child&#39;s eyes light
          up as they explore the world through captivating images and
          AI-generated captions. Unlock the potential of AI-powered learning for
          your child today! Join us and embark on a voyage of imagination and
          education. Together, we&#39;ll shape the next generation of young
          learners!
        </p>
        <img
          className="absolute w-[77px] h-[83px] top-[957px] left-[474px]"
          alt="Frame"
          src="https://c.animaapp.com/dNKToy8N/img/frame.svg"
        />
        <div className="absolute w-[758px] h-[605px] top-[2655px] left-[592px]">
          <div className="absolute w-[323px] h-[480px] top-[125px] left-0 bg-[#d9d9d9] rounded-[64px]">
            <div className="absolute w-[138px] top-[45px] left-[92px] [font-family:'gillsans',Helvetica] font-normal text-black text-[40px] tracking-[0.40px] leading-[normal]">
              Monthly
            </div>
            <div className="absolute w-[162px] h-[59px] top-[375px] left-[82px]">
              <div className="relative w-[160px] h-[59px] bg-[#67ac44] rounded-[18px]">
                <div className="w-[160px] h-[50px] top-0 rounded-[18px] absolute left-0 bg-[#84c455]" />
                <div className="absolute w-[115px] top-[16px] left-[23px] [font-family:'gillsans',Helvetica] font-normal text-black text-[20px] tracking-[0.70px] leading-[normal] whitespace-nowrap">
                  Choose Plan
                </div>
              </div>
            </div>
            <p className="absolute w-[191px] top-[128px] left-[66px] [font-family:'gillsans',Helvetica] font-normal text-black text-[63px] tracking-[2.21px] leading-[normal] whitespace-nowrap">
              <span className="[font-family:'gillsans',Helvetica] font-normal text-black text-[63px] tracking-[2.21px]">
                $19
              </span>
              <span className="text-[20px] tracking-[0.70px]"> / Month</span>
            </p>
            <div className="absolute w-[36px] h-[26px] top-[241px] left-[49px] bg-[url(https://c.animaapp.com/dNKToy8N/img/vector-6.svg)] bg-[100%_100%]">
              <img
                className="absolute w-[36px] h-[26px] top-0 left-0"
                alt="Vector"
                src="https://c.animaapp.com/dNKToy8N/img/vector-6.svg"
              />
            </div>
            <div className="absolute w-[164px] h-[37px] top-[241px] left-[104px]">
              <div className="absolute w-[164px] top-0 left-0 [font-family:'gillsans',Helvetica] font-normal text-black text-[17px] tracking-[0.17px] leading-[normal]">
                One account, multiple profiles
              </div>
              <div className="absolute w-[164px] top-0 left-0 [font-family:'gillsans',Helvetica] font-normal text-black text-[17px] tracking-[0.17px] leading-[normal]">
                One account, multiple profiles
              </div>
            </div>
            <div className="absolute w-[36px] h-[26px] top-[302px] left-[49px] bg-[url(https://c.animaapp.com/dNKToy8N/img/vector-6.svg)] bg-[100%_100%]">
              <img
                className="absolute w-[36px] h-[26px] top-0 left-0"
                alt="Vector"
                src="https://c.animaapp.com/dNKToy8N/img/vector-6.svg"
              />
            </div>
            <div className="absolute w-[164px] h-[15px] top-[308px] left-[104px]">
              <div className="absolute w-[164px] top-0 left-0 [font-family:'gillsans',Helvetica] font-normal text-black text-[17px] tracking-[0.17px] leading-[normal] whitespace-nowrap">
                Unlimited Uploads
              </div>
              <div className="absolute w-[164px] top-0 left-0 [font-family:'gillsans',Helvetica] font-normal text-black text-[17px] tracking-[0.17px] leading-[normal] whitespace-nowrap">
                Unlimited Uploads
              </div>
            </div>
          </div>
          <div className="absolute w-[321px] h-[480px] top-[125px] left-[415px] bg-[#d9d9d9] rounded-[64px]">
            <div className="absolute w-[111px] top-[45px] left-[105px] [font-family:'gillsans',Helvetica] font-normal text-black text-[40px] tracking-[0.40px] leading-[normal]">
              Yearly
            </div>
            <div className="absolute w-[162px] h-[59px] top-[375px] left-[84px]">
              <div className="relative w-[160px] h-[59px] bg-[#67ac44] rounded-[18px]">
                <div className="w-[160px] h-[50px] top-0 rounded-[18px] absolute left-0 bg-[#84c455]" />
                <div className="absolute w-[115px] top-[16px] left-[23px] [font-family:'gillsans',Helvetica] font-normal text-black text-[20px] tracking-[0.70px] leading-[normal] whitespace-nowrap">
                  Choose Plan
                </div>
              </div>
            </div>
            <p className="absolute w-[201px] top-[128px] left-[64px] [font-family:'gillsans',Helvetica] font-normal text-black text-[63px] tracking-[2.21px] leading-[normal] whitespace-nowrap">
              <span className="[font-family:'gillsans',Helvetica] font-normal text-black text-[63px] tracking-[2.21px]">
                $199
              </span>
              <span className="text-[20px] tracking-[0.70px]"> / Year</span>
            </p>
            <img
              className="absolute w-[36px] h-[26px] top-[241px] left-[51px]"
              alt="Vector"
              src="https://c.animaapp.com/dNKToy8N/img/vector-6.svg"
            />
            <div className="absolute w-[164px] top-[241px] left-[106px] [font-family:'gillsans',Helvetica] font-normal text-black text-[17px] tracking-[0.17px] leading-[normal]">
              One account, multiple profiles
            </div>
            <img
              className="absolute w-[36px] h-[26px] top-[302px] left-[51px]"
              alt="Vector"
              src="https://c.animaapp.com/dNKToy8N/img/vector-6.svg"
            />
            <div className="absolute w-[164px] top-[308px] left-[106px] [font-family:'gillsans',Helvetica] font-normal text-black text-[17px] tracking-[0.17px] leading-[normal] whitespace-nowrap">
              Unlimited Uploads
            </div>
          </div>
          <div className="absolute w-[421px] top-0 left-[158px] [font-family:'lapsus',Helvetica] font-bold text-black text-[56px] tracking-[0.56px] leading-[normal]">
            Subscription Plans
          </div>
        </div>
        <div className="absolute w-[262px] h-[342px] top-[1603px] left-[695px]">
          <div className="w-[260px] top-[249px] left-0 text-[33px] text-center tracking-[0.33px] absolute [font-family:'gillsans',Helvetica] font-normal text-[#020202] leading-[normal]">
            One account, <br />
            multiple profiles
          </div>
          <img
            className="absolute w-[214px] h-[170px] top-0 left-[19px]"
            alt="Group"
            src="https://c.animaapp.com/dNKToy8N/img/group-59@2x.png"
          />
        </div>
        <div className="w-[260px] top-[1852px] left-[391px] text-[33px] text-center tracking-[0.33px] absolute [font-family:'gillsans',Helvetica] font-normal text-[#020202] leading-[normal]">
          AI based
          <br />
          Captioning
        </div>
        <div className="absolute w-[110px] h-[117px] top-[1678px] left-[466px]">
          <div className="relative w-[108px] h-[117px]">
            <img
              className="absolute w-[108px] h-[108px] top-[9px] left-0"
              alt="Vector"
              src="https://c.animaapp.com/dNKToy8N/img/vector-2.svg"
            />
            <img
              className="absolute w-[108px] h-[108px] top-0 left-0"
              alt="Vector"
              src="https://c.animaapp.com/dNKToy8N/img/vector-1.svg"
            />
            <div className="absolute w-[99px] top-[30px] left-[5px] [font-family:'lapsus',Helvetica] font-bold text-[#020202] text-[48px] text-center tracking-[0.48px] leading-[normal]">
              CC
            </div>
          </div>
        </div>
        <div className="absolute w-[548px] h-[108px] top-[2188px] left-[778px]">
          <div className="w-[263px] top-0 left-0 text-[33px] tracking-[0.33px] whitespace-nowrap absolute [font-family:'gillsans',Helvetica] font-normal text-[#020202] leading-[normal]">
            Upload
          </div>
          <p className="w-[543px] top-[51px] left-px text-[20px] tracking-[0.20px] absolute [font-family:'gillsans',Helvetica] font-normal text-[#020202] leading-[normal]">
            Upload an image to the generate page
          </p>
        </div>
        <div className="top-[2195px] left-[695px] absolute w-[47px] [font-family:'gillsans',Helvetica] font-normal text-black text-[56px] tracking-[2.80px] leading-[normal] whitespace-nowrap">
          1.
        </div>
        <div className="absolute w-[889px] h-[107px] top-[2296px] left-[695px]">
          <div className="w-[804px] top-0 left-[79px] text-[33px] tracking-[0.33px] absolute [font-family:'gillsans',Helvetica] font-normal text-[#020202] leading-[normal]">
            Generate
          </div>
          <p className="w-[543px] top-[50px] left-[84px] text-[20px] tracking-[0.20px] absolute [font-family:'gillsans',Helvetica] font-normal text-[#020202] leading-[normal]">
            Click on the generate button to generate a caption
          </p>
          <div className="top-[6px] left-0 absolute w-[47px] [font-family:'gillsans',Helvetica] font-normal text-black text-[56px] tracking-[2.80px] leading-[normal] whitespace-nowrap">
            2.
          </div>
        </div>
        <div className="absolute w-[890px] h-[107px] top-[2403px] left-[695px]">
          <div className="absolute w-[809px] h-[107px] top-0 left-[83px]">
            <div className="w-[804px] top-0 left-px text-[33px] tracking-[0.33px] absolute [font-family:'gillsans',Helvetica] font-normal text-[#020202] leading-[normal]">
              Learn
            </div>
            <p className="w-[543px] top-[50px] left-0 text-[20px] tracking-[0.20px] absolute [font-family:'gillsans',Helvetica] font-normal text-[#020202] leading-[normal]">
              Play, learn or save the captioned image to your collection, the
              <br />
              possibilities are endless!
            </p>
          </div>
          <div className="top-[26px] left-0 absolute w-[47px] [font-family:'gillsans',Helvetica] font-normal text-black text-[56px] tracking-[2.80px] leading-[normal] whitespace-nowrap">
            3.
          </div>
        </div>
        <div className="absolute w-[509px] top-[729px] left-[706px] [font-family:'lapsus',Helvetica] font-bold text-black text-[50px] tracking-[0.50px] leading-[normal] whitespace-nowrap">
          Why choose WhatEyeSee?
        </div>
        <img
          className="absolute w-[153px] h-[97px] top-[1112px] left-[423px]"
          alt="Group"
          src="https://c.animaapp.com/dNKToy8N/img/group-1@2x.png"
        />
        <p className="absolute w-[960px] top-[1155px] left-[618px] [font-family:'gillsans',Helvetica] font-normal text-black text-[20px] tracking-[0.20px] leading-[normal]">
          Parents and caregivers can easily upload images that are familiar and
          captivating to their children. Once the image is uploaded, our
          AI-powered system springs into action, generating descriptive captions
          that help children understand what they&#39;re seeing. It&#39;s like
          having a personalized virtual storyteller at your fingertips!
        </p>
        <div className="absolute top-[1107px] left-[618px] [font-family:'gillsans',Helvetica] font-normal text-black text-[33px] tracking-[0.33px] leading-[normal]">
          Learning Through Play
        </div>
        <img
          className="absolute w-[93px] h-[89px] top-[1277px] left-[462px]"
          alt="Vector"
          src="https://c.animaapp.com/dNKToy8N/img/vector.svg"
        />
        <p className="absolute w-[960px] top-[1315px] left-[618px] [font-family:'gillsans',Helvetica] font-normal text-black text-[20px] tracking-[0.20px] leading-[normal]">
          What sets WhatEyeSee apart is our unique system of achievements and
          quests. As your child engages with the platform, they can complete
          quests and unlock achievements. These quests are designed to be both
          entertaining and educational, providing a sense of accomplishment that
          fuels their enthusiasm to learn.
        </p>
        <div className="absolute top-[1267px] left-[618px] [font-family:'gillsans',Helvetica] font-normal text-black text-[33px] tracking-[0.33px] leading-[normal]">
          Achievements and Quests
        </div>
        <div className="absolute top-[950px] left-[618px] [font-family:'gillsans',Helvetica] font-normal text-black text-[33px] tracking-[0.33px] leading-[normal]">
          AI-Powered Learning
        </div>
        <p className="absolute w-[960px] top-[998px] left-[618px] [font-family:'gillsans',Helvetica] font-normal text-black text-[20px] tracking-[0.20px] leading-[normal]">
          Harness the power of AI-generated captions to foster language
          development and visual recognition in young
          children.&nbsp;&nbsp;AI-driven learning isn&#39;t just efficient;
          it&#39;s also incredibly effective. Our platform helps children
          accelerate their language development and visual recognition skills,
          giving them a head start in their educational journey.
        </p>
        <div className="absolute w-[271px] top-[2076px] left-[842px] [font-family:'lapsus',Helvetica] font-bold text-black text-[50px] tracking-[0.50px] leading-[normal] whitespace-nowrap">
          How it works
        </div>
      </div>
    </div>
  );
};
export default Home;
