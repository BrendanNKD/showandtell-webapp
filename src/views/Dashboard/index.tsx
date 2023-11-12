import { UseProfile } from "app/state/profile/useProfile";
import Navbar from "components/navBar";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useGetLevelQuery } from "services/account/accountApi";
import {
  useGetProfileQuestQuery,
  useRefreshQuestsMutation,
} from "services/quest";
import { defaultPics } from "utils/profilePic";
import { useNavigate, createSearchParams } from "react-router-dom";
import ProgressBar from "components/progressBar";
import categoryVal from "components/quest/categoryValues";
import ReactAudioPlayer from 'react-audio-player';

const Dashboard = () => {
  const { data: levelData } = useGetLevelQuery();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [nextLimit, setNextLimit] = useState<number | null>(null);
  const [quests, setQuests] = useState<any>(null);
  const [questIndex, setQuestIndex] = useState<any>(null);
  const currentprofile: any = UseProfile();
  // const categoryValues = categoryVal

  const { data: quest } = useGetProfileQuestQuery(String(currentprofile?._id), {
    skip: !currentprofile,
  });
  const [refreshQuests, { data: result }] = useRefreshQuestsMutation();
  const passQuestParams = (category: string, caption: string) => {
    navigate({
      pathname: "/generate",
      search: createSearchParams({
        title: categoryVal[category as keyof typeof categoryVal].title,
        image: categoryVal[category as keyof typeof categoryVal].image,
        color: categoryVal[category as keyof typeof categoryVal].color,
        category: category,
        caption: caption,
        index: questIndex,
      }).toString(),
    });
  };

  useEffect(() => {
    if (levelData && currentprofile && quest) {
      const nextLimit = levelData[0].rules[Number(currentprofile?.level) + 1];
      setNextLimit(nextLimit);
      const index = quest.quests.findIndex(
        (quest: any) => quest.completed === false
      );

      if (index !== -1) {
        // console.log(
        //   "Index of the first 'completed' element set to false:",
        //   index
        // );
        setQuests(quest.quests[index]);
        setQuestIndex(index);
      } else {
        //do here
        refreshQuests({ profileId: currentprofile._id });
      }
    }
  }, [levelData, currentprofile, quest, dispatch, refreshQuests]);

  useEffect(() => {
    if (result) {
      navigate(0);
    }
  }, [result, navigate]);

  return (
    <div className="bg-transparent flex flex-wrap flex-row justify-center w-full">
      <div className="overflow-hidden bg-[url(https://c.animaapp.com/keKAQgUJ/img/group.png)] bg-[100%_100%] w-[1920px] h-[1136.7px] relative">
        <Navbar></Navbar>
        <div className="flex flex-col relative w-[65%] h-[70%] left-[20%] top-[5%] flex-wrap bg-white rounded-[52px] xl:mt-[45px]">
          <div className="flex flex-col w-[100%] h-[55%] p-10">
            <div className="font-lapsus font-bold text-black text-[49px] tracking-[0.49px] leading-[normal]">
              <p>Dashboard</p>
            </div>
            {/* profile details */}
            <div className="bg-gray-200 flex flex-col justify-center items-center md:flex-row md:justify-start md:p-4 relative w-[100%] h-[55%] space-y-2 md:space-x-5 rounded-xl">
              <div className="w-16 md:w-24 lg:w-32 xl:w-32">
                {currentprofile && (
                  <img 
                    className="rounded-full"
                    alt="Frame"
                    src={defaultPics[currentprofile.profilePic].url}
                  />
                )}
              </div>
              <div>
                <div className="flex flex-col space-y-2">
                  <div className="flex justify-center w-36 md:w-48 lg:w-56 xl:w-64 display-block left-[0%] top-[0%] font-lapsus font-bold text-black text-[24px] sm:text-[34px] md:text-[40px] lg:text-[54px] xl:text-[54px] tracking-[0] leading-[normal] whitespace-nowrap">
                    <p className="truncate">{currentprofile?.firstName}</p>
                  </div>
                  <div className="flex flex-row justify-center items-center space-x-2 ">
                    <img
                      className="w-10"
                      alt="Vector"
                      src="https://c.animaapp.com/keKAQgUJ/img/vector-1.svg"
                    />
                    <div className="text-[32px] md:text-[40px] lg:text-[54px] xl:text-[56px] tracking-[0.57px] font-lapsus font-bold text-black leading-[normal] whitespace-nowrap">
                      {currentprofile?.stars}
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[50%] lg:h-[130px] xl:h-[134px]">
                <div className="flex h-full md:justify-end relative font-lapsus font-bold text-black text-[32px] md:text-[40px] lg:text-[54px] xl:text-[50px] tracking-[0] leading-[normal] whitespace-nowrap">
                  Level {currentprofile && currentprofile.level}
                </div>
              </div>
            </div>
            <div className="relative w-[100%] h-[20%] justify-center mt-3">
              <ProgressBar
                bgcolor="#84c455"
                progress={currentprofile?.stars}
                max={nextLimit}
                height={60}
              />
            </div>
            <div className="font-lapsus font-bold text-black text-[32px] md:text-[45px] xl:text-[50px] xl:ml-10 tracking-[0.49px] leading-[normal]">
                Next up:
            </div>
          </div>
          {/*Quest box*/}
          <div
            className="flex flex-col justify-center items-center p-4"
            onClick={() => passQuestParams(quests.category, quests.caption)}
          >
            <div
              className="w-64 h-60 md:w-[450px] lg:w-[600px] xl:w-[760px] rounded-t-[20px] font-lapsus p-4"
              style={{
                backgroundColor:
                  quests &&
                  categoryVal[quests.category as keyof typeof categoryVal]
                    .color!,
              }}
            >
              <div className="h-full flex flex-col space-y-2 md:flex-row items-center justify-center md:space-x-6">
                {/*model icon*/}
                <img
                  id="questImage"
                  className="w-16 lg:w-32"
                  alt="Frame"
                  src={
                    quests &&
                    categoryVal[quests.category as keyof typeof categoryVal]
                      .image
                  }
                />
                <div className="flex flex-col justify-center items-center w-full h-15 md:h-[200px] font-lapsus font-normal text-black text-[16px] md:text-[20px] lg:text-[26px] xl:text-[30px] md:space-y-5">
                  <div className="w-full flex justify-center md:justify-start items-center">{quests && quests.category}</div>
                  <div className="w-full flex justify-center items-center">{quests && quests.description}</div>
                </div>
                {/*Quest box star reward*/}
                <div className="flex flex-row space-x-2 items-center relative w-50 h-10 md:w-[250px] lg:w-[300px] lg:h-[100px] bg-white rounded-[14px] p-4">
                  <div>
                    <img
                      className="relative w-[80%]"
                      alt="Vector"
                      src="https://c.animaapp.com/keKAQgUJ/img/vector.svg"
                    />
                  </div>
                  <div className="text-[20px] lg:text-[45px] tracking-[0] font-lapsus font-bold text-black leading-[normal] whitespace-nowrap">
                    200
                  </div>
                </div>
              </div>
            </div>
            <div
              className="w-64 h-10 md:w-[450px] lg:w-[600px] xl:w-[760px] bg-[#facd0a] rounded-b-[15px]"
              style={{
                backgroundColor:
                  quests &&
                  categoryVal[quests.category as keyof typeof categoryVal]
                    .darkcolor!,
              }}
            ></div>
            <div className="dashboardplayer">
            <ReactAudioPlayer
                src="/assets/Homepage1.mp3"
                autoPlay={true}
                controls
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
