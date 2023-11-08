import { UseProfile } from "app/state/profile/useProfile";
import Navbar from "components/navBar";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  useGetLevelQuery,
} from "services/account/accountApi";
import {
  useGetProfileQuestQuery,
  useRefreshQuestsMutation,
} from "services/quest";
import { defaultPics } from "utils/profilePic";
import { useNavigate, createSearchParams } from "react-router-dom";
import ProgressBar from "components/progressBar";
import categoryVal from "components/quest/categoryValues";

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
  const [refreshQuests, { data: result }] =
    useRefreshQuestsMutation();
  const passQuestParams = (category: string, caption: string) => {
    // var catVal = category;
    // {/*terrible fix to fix the flower value, need to change some variable names in the backend*/}
    // if(category = "flower")
    // {catVal = "flowers"}
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
        <div className="flex flex-col relative w-[65%] h-[75%] left-[20%] top-[5%] flex-wrap bg-white rounded-[52px]">
          <div className="flex flex-col w-[100%] h-[55%] p-10">
            <div className="relative w-[100%] h-[20%] top-[0%] font-lapsus font-bold text-black text-[2.5vw] tracking-[0.56px] leading-[normal] whitespace-nowrap">
              <p>Dashboard</p>
            </div>
            {/* profile details */}
            <div className="flex flex-row relative w-[100%] h-[55%] space-x-5">
              <div className="relative w-[13%] top-[0%] m-[1%] pl-10">
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
                  <div className="relative w-[100%] left-[0%] top-[0%] font-lapsus font-bold text-black text-[2.5vw] tracking-[0] leading-[normal] whitespace-nowrap">
                    {currentprofile?.firstName}
                  </div>
                  <div className="flex flex-row space-x-2">
                    <img
                      className="relative w-[30%]"
                      alt="Vector"
                      src="https://c.animaapp.com/keKAQgUJ/img/vector-1.svg"
                    />
                    <div className="relative w-[100%] top-0 left-[0px] text-[2.5vw] tracking-[0.57px] absolute font-lapsus font-bold text-black leading-[normal] whitespace-nowrap">
                      {currentprofile?.stars}
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex justify-end relative w-[100%] font-lapsus font-bold text-black text-[2.5vw] tracking-[0] leading-[normal] whitespace-nowrap">
                  Level {currentprofile && currentprofile.level}
                </div>
              </div>
            </div>

            <div className="relative w-[100%] h-[20%] justify-center">
              <ProgressBar
                bgcolor="#84c455"
                progress={currentprofile?.stars}
                max={nextLimit}
                height={60}
              />
            </div>

            <div className="relative w-[100%] h-[5%] ml-[10%]">
              <div className="font-lapsus font-bold text-black text-[49px] tracking-[0.49px] leading-[normal]">
                Next up:
              </div>
            </div>
          </div>
          {/*Quest box*/}
          <div
            className="relative w-[100%] h-[30%] flex flex-col justify-center items-center p-4"
            onClick={() => passQuestParams(quests.category, quests.caption)}
          >
            <div
              className="relative w-[80%] h-[80%] top-[5%] left-0 rounded-t-[20px] font-lapsus p-4"
              style={{
                backgroundColor:
                  quests &&
                  categoryVal[quests.category as keyof typeof categoryVal]
                    .color!,
              }}
            >
              <div className="h-[90%] flex flex-row items-center space-x-6 ">
              {/*model icon*/}
              <img
                id="questImage"
                className="relative w-[10%]"
                alt="Frame"
                src={
                  quests &&
                  categoryVal[quests.category as keyof typeof categoryVal].image
                }
              />
              <div className="flex flex-col w-[70%] h-[80%] font-lapsus font-normal text-black text-[1.3vw]">
                <div>
                  {quests && quests.category}
                </div>
                <div className="relative w-[100%] font-lapsus font-normal text-black text-[1.3vw] tracking-[0] leading-[normal]">
                  {quests && quests.description}
                </div>
              </div>
              {/*Quest box star reward*/}
              <div className="flex flex-row space-x-2 items-center relative w-[15%] h-[50%] bg-white rounded-[14px] p-4">
                <div>
                  <img
                    className="relative w-[80%]"
                    alt="Vector"
                    src="https://c.animaapp.com/keKAQgUJ/img/vector.svg"
                  />
                </div>
                  <div className="relative w-[10%] text-[2vw] tracking-[0] absolute font-lapsus font-bold text-black leading-[normal] whitespace-nowrap">
                    200
                  </div>
              </div>
              </div>
            </div>
            <div
              className="relative w-[80%] h-[10%] bg-[#facd0a] rounded-b-[15px]"
              style={{
                backgroundColor:
                  quests &&
                  categoryVal[quests.category as keyof typeof categoryVal]
                    .darkcolor!,
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
