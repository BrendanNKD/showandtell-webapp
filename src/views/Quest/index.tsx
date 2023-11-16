/* eslint-disable @typescript-eslint/no-unused-vars */
import { UseProfileName } from "app/state/profile/useProfile";
import QuestProfile from "components/quest/profile";
import { QuestCard } from "components/quest/questCard";
import ScoreBoard from "components/quest/scoreboard";
import Navbar from "components/navBar";
import ProgressBar from "components/progressBar";
import { useGetProfileQuestQuery } from "services/quest";
import { UseProfile, UseProfileIndex } from "app/state/profile/useProfile";
import { useEffect, useState } from "react";
import {
  useGetAccountQuery,
  useGetLevelQuery,
} from "services/account/accountApi";
import { useDispatch } from "react-redux";
import ReactAudioPlayer from "react-audio-player";
import { UseAuthenticatedRoute } from "utils/authRoute";
import { Animation } from "components/animationComponent";

const Quest = () => {
  UseAuthenticatedRoute();
  const currentprofile: any = UseProfile();
  const [activeTab, setActiveTab] = useState("achievement"); // Initialize the active tab state
  const [nextLimit, setNextLimit] = useState<number | null>(null);
  const [quests, setQuests] = useState<any>(null);
  const dispatch = useDispatch();
  const { data: levelData } = useGetLevelQuery();

  const activeTabStyle = {
    backgroundColor: "#E2E3E4",
    color: "black",
    borderRadius: "5px",
    padding: "8px",
  };

  const tabText = {};

  const { data: quest } = useGetProfileQuestQuery(String(currentprofile._id));

  useEffect(() => {
    if (levelData && currentprofile && quest) {
      const nextLimit = levelData[0].rules[Number(currentprofile?.level) + 1];
      setNextLimit(nextLimit);
      const index = quest.quests.findIndex(
        (quest: any) => quest.completed === false
      );

      if (index !== -1) {
        console.log(
          "Index of the first 'completed' element set to false:",
          index
        );
        setQuests(quest.quests[index]);
      } else {
        console.log("No 'completed' element set to false found.");
      }
    }
  }, [levelData, currentprofile, quest, dispatch]);

  if (quest) {
    console.log("quest structure");
    console.log(quest.quests);
  }

  //animation logic
  const animationComponents = [];

      for (let i = 0; i < 20; i++) {
        const delayValue = 0.0 + 2*i; // Increment delay by 1 second in each iteration
        animationComponents.push(<Animation key={i} 
          delay={delayValue} 
          location ={-1300}
          minheight = {100}
          maxheight = {400}/>);
    }

  return (
    <>
      <div className="bg-transparent flex flex-wrap flex-row justify-center w-full">
        <div className="overflow-hidden bg-[url(https://c.animaapp.com/keKAQgUJ/img/group.png)] bg-[100%_100%] w-[1920px] h-[1136.7px] relative"
             style = {{ zIndex: 0 }}>
          <Navbar></Navbar>
          <div className="flex flex-col relative w-[65%] h-[60%] left-[20%] top-[5%] flex-wrap bg-white rounded-[52px] mt-[10px] md:mt-[20px] lg:mt-[45px]">
            <div className="flex flex-col w-[100%] h-[100%] justify-center items-center">
              <div className="flex flex-col p-5 space-y-5 h-[100%] w-[100%] justify-start items-center bg-white rounded-[27px]">
               {animationComponents}
                {/* Toggle between "Achievement" and "Leaderboard" tabs */}
                <div className="w-[100%] flex flex-row justify-start space-x-3">
                  <button
                    className={`tab-button ${
                      activeTab === "achievement" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("achievement")}
                    style={activeTab === "achievement" ? activeTabStyle : {}}
                  >
                    <span
                      className="[font-family:'lapsus',Helvetica] text-[18px] md:text-[28px] lg:text-[35px] p-1"
                      style={tabText}
                    >
                      Achievement
                    </span>
                  </button>
                  <button
                    className={`tab-button ${
                      activeTab === "leaderboard" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("leaderboard")}
                    style={activeTab === "leaderboard" ? activeTabStyle : {}}
                  >
                    <span
                      className="[font-family:'lapsus',Helvetica] text-[18px] md:text-[28px] lg:text-[35px]"
                      style={tabText}
                    >
                      Leaderboard
                    </span>
                  </button>
                </div>
                {activeTab === "achievement" && (
                  // Render the "Achievement" content when the tab is active
                  <div className="space-y-3 overflow-y-scroll">
                    {quest &&
                      quest.quests.map((item: any, index: any) => (
                        <QuestCard
                          category={item.category}
                          description={item.description}
                          award={100}
                          completed={item.completed}
                          caption={item.caption}
                          questindex={index}
                        />
                      ))}
                  </div>
                )}
                {activeTab === "leaderboard" && (
                  // Render the "Leaderboard" content when the tab is active
                  <div className="w-[100%] space-y-3 overflow-y-scroll ">
                    <ScoreBoard />
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="questplayer">
            <ReactAudioPlayer
              src="/assets/Homepage2.mp3"
              autoPlay={true}
              controls
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Quest;
