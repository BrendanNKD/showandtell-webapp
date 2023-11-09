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
import ReactAudioPlayer from 'react-audio-player';

const Quest = () => {
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

  return (
    <>
      <div className="h-fit flex-col justify-center align-middle">
        <div className="bg-[url(https://c.animaapp.com/FtCx5vJL/img/group.png)] bg-[100%_100%] w-[1920px] h-[1136.7px] relative">
          <Navbar></Navbar>
          <div className="absolute h-[750px] w-[800px] top-[0px] left-[550px] justifyContent-center alignItems-center">
            <div className="justify-center">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col justify-start">
                  <div className="flex flex-col p-7 absolute h-[650px] w-[800px] top-[200px] left-[100px] justifyContent-center alignItems-center bg-white rounded-[27px]">
                    {/* Toggle between "Achievement" and "Leaderboard" tabs */}
                    <div className="space-x-3">
                      <button
                        className={`tab-button ${
                          activeTab === "achievement" ? "active" : ""
                        }`}
                        onClick={() => setActiveTab("achievement")}
                        style={
                          activeTab === "achievement" ? activeTabStyle : {}
                        }
                      >
                        <span
                          className="[font-family:'lapsus',Helvetica] text-[35px] m-4"
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
                        style={
                          activeTab === "leaderboard" ? activeTabStyle : {}
                        }
                      >
                        <span
                          className="[font-family:'lapsus',Helvetica] text-[35px]"
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
                            />
                          ))}
                      </div>
                    )}
                    {activeTab === "leaderboard" && (
                      // Render the "Leaderboard" content when the tab is active
                      <div className="space-y-3 overflow-y-scroll">
                        <ScoreBoard />
                      </div>
                    )}
                  </div>
                </div>

                {/*<div className="flex flex-col justify-left gap-6">
                <QuestProfile
                  stars={200}
                  percentage={45}
                  name={profileName ? profileName : ""}
                />
                {/*<ProgressBar bgcolor="#84c455" progress={currentprofile?.stars} max={nextLimit} height={60} />
              </div>*/}
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
        </div>
      </div>
    </>
  );
};

export default Quest;
