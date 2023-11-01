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

const Quest = () => {
  const profileName = UseProfileName();
  const currentprofile: any = UseProfile();
  const [activeTab, setActiveTab] = useState("achievement"); // Initialize the active tab state
  const [nextLimit, setNextLimit] = useState<number | null>(null);
  const [quests, setQuests] = useState<any>(null);
  const dispatch = useDispatch();
  const { data: levelData } = useGetLevelQuery();

  const tabButtonStyle = {
    backgroundColor: '#e4e4e4',
    border: '1px solid #d4d4d4',
    borderRadius: '5px',
    padding: '10px 20px',
    marginRight: '10px', // Add margin between buttons
    cursor: 'pointer',
    fontSize: '18px',
    fontWeight: 'bold',
  };

  const backgroundStyle = {
    backgroundImage: 'url(https://c.animaapp.com/eyIjESUi/img/group.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '100vh', // Adjust the height as needed
  };

  const activeTabStyle = {
    backgroundColor: '#E2E3E4',
    color: 'black',
    borderRadius: '5px',
    padding: '8px',
  };

  const tabText = {
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "center", // Center horizontally
    alignItems: "center",    // Center vertically
    height: "100vh",         // Center content vertically
  };

  const whiteBoxStyle = {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '10px', // Add rounded corners
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)', // Add a shadow for depth
  };

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
  }, [levelData, currentprofile, quest, dispatch]
  );
  
  if(quest)
  {console.log("quest structure")
   console.log(quest.quests[0].category)}

   function loadQuestCards() {
  
    return (
      <div>
      
      </div>
    );
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
                    className= {`tab-button ${
                      activeTab === "achievement" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("achievement")}
                    //style={{ ...tabButtonStyle, marginRight: '10px' }}
                    style={activeTab === "achievement" ? activeTabStyle : {}}
                  >
                    <span className ="[font-family:'lapsus',Helvetica] text-[35px] m-4" style={tabText}>Achievement</span>
                  </button>
                  <button
                    className={`tab-button ${
                      activeTab === "leaderboard" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("leaderboard")}
                    style={activeTab === "leaderboard" ? activeTabStyle : {}}
                  >
                    <span className ="[font-family:'lapsus',Helvetica] text-[35px]" style={tabText}>Leaderboard</span>
                  </button>
                </div>
                {activeTab === "achievement" && (
                  // Render the "Achievement" content when the tab is active
                  <div className = "space-y-3 overflow-y-scroll">
                    {loadQuestCards()}
                    {/*
                    <QuestCard
                      category="animals"
                      description="Find an image of an animal and upload to complete the quest"
                      award={100}
                      completed={true}
                    />
                    <QuestCard
                      category="shapes"
                      description="Find an image of a red square and upload to complete the quest!"
                      award={100}
                      completed={false}
                    />
                    <QuestCard
                      category="vehicle"
                      description="Find an image of a car and upload to complete the quest!"
                      award={100}
                      completed={false}
                    />
                    <QuestCard
                      category="flowers"
                      description="Find an image of a sunflower and upload to complete the quest!"
                      award={100}
                      completed={false}
                    />
                    <QuestCard
                      category="flowers"
                      description="Find an image of a sunflower and upload to complete the quest!"
                      award={100}
                      completed={false}
                    />
                */}
                  </div>
                )}
                {activeTab === "leaderboard" && (
                  // Render the "Leaderboard" content when the tab is active
                  <ScoreBoard />
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Quest;
