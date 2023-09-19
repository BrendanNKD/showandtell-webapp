import { ProfileResponseModel } from "domain/types/profile/Profile";
import ProfileSelectionProps from "domain/types/profileSelection";
import { defaultPics } from "utils/profilePic";

import item1 from "../../assets/avatar/1.jpg";
import item2 from "../../assets/avatar/2.jpg";
import item3 from "../../assets/avatar/3.jpg";
import item4 from "../../assets/avatar/4.jpg";

export const ProfileSelectionCard = ({
  object,
  index,
}: ProfileSelectionProps) => {
  return (
    <>
      <div key={index}>
        <button
          className="flex flex-col items-center group gap-2"
          // onClick={handleProfileClick}
        >
          <img
            className="rounded border-2 border-transparent group-hover:border-2 group-hover:border-gray-300 w-150 h-150"
            src="https://picsum.photos/seed/a/150/150"
            alt={`Profile ${index + 1}`}
          />
          <p className="text-gray-500 group-hover:text-gray-300">
            {object.firstName}
          </p>
        </button>
      </div>
    </>
  );
};

export const ProfilePicSelectionCard: React.FC = () => {
  return (
    <>
      {defaultPics.map((item, index) => (
        <div className="relative">
          <img
            className="w-20 h-20 rounded-full"
            src={item.url}
            alt={item.label}
          />
        </div>
      ))}
      {/* <div className="relative">
        <img className="w-20 h-20 rounded-full" src={item1} alt="" />
      </div>
      <div className="relative">
        <img className="w-20 h-20 rounded-full" src={item2} alt="" />
      </div>
      <div className="relative">
        <img className="w-20 h-20 rounded-full" src={item3} alt="" />
      </div>
      <div className="relative">
        <img className="w-20 h-20 rounded-full" src={item4} alt="" />
      </div> */}
    </>
  );
};
