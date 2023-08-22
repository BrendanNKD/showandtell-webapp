import { ProfileResponseModel } from "domain/types/profile/Profile";

interface ProfileSelectionProps {
  object: ProfileResponseModel;
  index: number;
}

export const profileSelectionCard = ({
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
