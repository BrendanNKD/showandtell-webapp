import ProfileSelectionProps from "domain/types/profileSelection";
import { SetStateAction } from "react";
import { defaultPics } from "utils/profilePic";

export const ProfileSelectionCard = ({
  object,
  index,
}: ProfileSelectionProps) => {
  return (
    <>
      <div key={index}>
        <button
          className="flex flex-col items-center group gap-2 w-32 h-32"
          // onClick={handleProfileClick}
        >
          <img
            className="rounded border-2 border-transparent group-hover:border-2 group-hover:border-gray-300"
            src={defaultPics[object.profilePic].url}
            alt={`Profile ${index + 1}`}
          />
          <p className="text-black group-hover:text-gray-300">
            {object.firstName}
          </p>
        </button>
      </div>
    </>
  );
};
interface IProps {
  images: Array<any>;
  selectedImage: React.Dispatch<SetStateAction<any>>;
}
export const ProfilePicSelectionCard: React.FC<IProps> = ({
  images,
  selectedImage,
}) => {
  const handleChange = (e: React.MouseEvent<HTMLImageElement>) => {
    e.preventDefault();
    const { id } = e.currentTarget;
    selectedImage(id);
  };

  return (
    <>
      {images.map((item: any, index: number) => (
        <button className="relative" key={index}>
          <img
            className="w-20 h-20 rounded-full"
            src={item.url}
            alt={item.label}
            id={String(index)} // Convert index to string
            onClick={handleChange}
          />
        </button>
      ))}
    </>
  );
};
