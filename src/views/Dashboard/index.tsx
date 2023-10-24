import { UseProfile, UseProfileIndex } from "app/state/profile/useProfile";
import Navbar from "components/navBar";
import { setAccount } from "features/accountSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  useGetAccountQuery,
  useGetLevelQuery,
} from "services/account/accountApi";
import { useGetProfileQuestQuery } from "services/quest";
import { defaultPics } from "utils/profilePic";
import ConfirmOtp from "views/ConfirmOtp";
import { useNavigate, createSearchParams } from "react-router-dom";
const Dashboard = () => {
  const { data: levelData } = useGetLevelQuery();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [nextLimit, setNextLimit] = useState<number | null>(null);
  const [quests, setQuests] = useState<any>(null);
  const currentprofile: any = UseProfile();

  const { data: quest } = useGetProfileQuestQuery(String(currentprofile._id));
  
 
  const passQuestParams = (
    category: string,
    caption: string
    ) => {
    
    var categoryValues = {
        'animals': {title: category , image:"https://c.animaapp.com/YStE9pzZ/img/frame-2.svg", color:"#F177AE"},
        'shapes': {title: category , image:"https://c.animaapp.com/YStE9pzZ/img/frame.svg", color:"#FAE55A"},
        'vege': {title: "Fruits and Vegetables" , image:"https://c.animaapp.com/NIGs1Y1e/img/frame-7.svg", color:"#9784D6"},
    }
    
    navigate({
      pathname: "/generate",
      search: createSearchParams({
      title: categoryValues[category as keyof typeof categoryValues].title,
      image: categoryValues[category as keyof typeof categoryValues].image,
      color: categoryValues[category as keyof typeof categoryValues].color,
      category: category,
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
  
  
  return (
    <div className="bg-transparent flex flex-row justify-center w-full">
      <div className="overflow-hidden bg-[url(https://c.animaapp.com/keKAQgUJ/img/group.png)] bg-[100%_100%] w-[1920px] h-[1136.7px] relative">
        <Navbar></Navbar>
        <div className="absolute w-[1225px] h-[785px] top-[152px] left-[375px]">
          <div className="absolute w-[1225px] h-[785px] top-0 left-0">
            <div className="relative w-[1223px] h-[785px] bg-white rounded-[52px]">
              <div className="absolute w-[523px] top-[58px] left-[72px] font-lapsus font-bold text-black text-[56px] tracking-[0.56px] leading-[normal] whitespace-nowrap">
                Dashboard
              </div>
              <div className="absolute w-[1057px] h-[59px] top-[344px] left-[84px]">
                <div className="relative w-[1055px] h-[59px] bg-[#e2e3e4] rounded-[29.5px]">
                  <div className="absolute w-[701px] h-[43px] top-[8px] left-[20px] bg-[#84c455] rounded-[29.5px]" />
                  <div className="absolute w-[217px] top-[5px] left-[403px] font-lapsus font-bold text-black text-[47px] tracking-[0] leading-[normal] whitespace-nowrap">
                    {currentprofile?.stars} /{nextLimit}
                  </div>
                </div>
              </div>
              <div className="absolute w-[749px] h-[147px] top-[170px] left-[86px]">
                <div className="absolute w-[377px] top-0 left-[160px] font-lapsus font-bold text-black text-[60px] tracking-[0] leading-[normal] whitespace-nowrap">
                  {currentprofile?.firstName}
                </div>
                <div className="absolute w-[167px] top-0 left-[578px] font-lapsus font-bold text-black text-[60px] tracking-[0] leading-[normal] whitespace-nowrap">
                  Level 1
                </div>
                <div className="absolute w-[209px] h-[59px] top-[72px] left-[160px]">
                  <img
                    className="absolute w-[68px] h-[65px] top-[-3px] left-[-3px]"
                    alt="Vector"
                    src="https://c.animaapp.com/keKAQgUJ/img/vector-1.svg"
                  />
                  <div className="w-[127px] top-0 left-[80px] text-[57px] tracking-[0.57px] absolute font-lapsus font-bold text-black leading-[normal] whitespace-nowrap">
                    {currentprofile?.stars}
                  </div>
                </div>
                {currentprofile && (
                  <img
                    className="absolute w-[136px] h-[136px] top-[11px] left-0 rounded-full"
                    alt="Frame"
                    src={defaultPics[currentprofile.profilePic].url}
                  />
                )}
              </div>
              <div className="absolute w-[173px] h-[60px] top-[445px] left-[85px]">
                <div className="absolute w-[171px] top-0 left-0 font-lapsus font-bold text-black text-[49px] tracking-[0.49px] leading-[normal]">
                  Next up:
                </div>
              </div>
            </div>
          </div>
          <div
            className="absolute w-[925px] h-[142px] top-[532px] left-[150px]"
            onClick={() => passQuestParams(quests.category, quests.caption)}
          >
            <div className="relative w-[929px] h-[142px]">
              <div className="absolute w-[929px] h-[142px] top-0 left-0">
                <div className="relative w-[925px] h-[142px]">
                  <div className="absolute w-[925px] h-[129px] top-[13px] left-0 bg-[#facd0a] rounded-[24px]" />
                  <div className="absolute w-[925px] h-[129px] top-0 left-0 bg-[#fae55a] rounded-[24px]" />
                  <img
                    className="absolute w-[95px] h-[61px] top-[35px] left-[17px]"
                    alt="Frame"
                    src="https://c.animaapp.com/keKAQgUJ/img/frame.svg"
                  />
                  <div className="absolute w-[258px] top-[22px] left-[159px] font-lapsus font-bold text-black text-[31px] tracking-[0] leading-[normal] whitespace-nowrap">
                    {quests && quests.category}
                  </div>
                  <p className="absolute w-[597px] top-[58px] left-[158px] font-lapsus font-normal text-black text-[25px] tracking-[0] leading-[normal]">
                    {quests && quests.description}
                  </p>
                </div>
              </div>
              <div className="absolute w-[142px] h-[62px] top-[43px] left-[772px]">
                <div className="relative w-[140px] h-[62px] bg-white rounded-[14px]">
                  <img
                    className="absolute w-[38px] h-[37px] top-[12px] left-[19px]"
                    alt="Vector"
                    src="https://c.animaapp.com/keKAQgUJ/img/vector.svg"
                  />
                  <div className="w-[50px] top-[15px] left-[70px] text-[31px] tracking-[0] absolute font-lapsus font-bold text-black leading-[normal] whitespace-nowrap">
                    200
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

export default Dashboard;
