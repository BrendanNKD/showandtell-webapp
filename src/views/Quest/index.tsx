import { UseProfileName } from "app/state/profile/useProfile";
import QuestProfile from "components/quest/profile";
import { QuestCard } from "components/quest/questCard";
import ScoreBoard from "components/quest/scoreboard";

const Quest = () => {
  const profileName = UseProfileName();
  return (
    <>
      <div className="flex justify-center">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col justify-start">
            <QuestCard
              category="car"
              description="car"
              award={100}
              completed={true}
            ></QuestCard>{" "}
            <QuestCard
              category="car"
              description="car"
              award={100}
              completed={true}
            ></QuestCard>{" "}
            <QuestCard
              category="car"
              description="car"
              award={100}
              completed={true}
            ></QuestCard>{" "}
            <QuestCard
              category="car"
              description="car"
              award={100}
              completed={false}
            ></QuestCard>
          </div>

          <div className="flex flex-col justify-center gap-6">
            <QuestProfile
              stars={200}
              percentage={45}
              name={profileName ? profileName : ""}
            ></QuestProfile>
            <ScoreBoard></ScoreBoard>
          </div>
        </div>
      </div>
    </>
  );
};

export default Quest;
