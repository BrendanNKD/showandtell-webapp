import { UseAccount } from "app/state/account/useAccount";
import item1 from "../../../assets/items/1.jpg";
import { useEffect, useState } from "react";
import { ProfileResponseModel } from "domain/types/profile/Profile";
const ScoreBoard = () => {
  const [profileSorted, setProfileSorted] = useState<
    ProfileResponseModel[] | null
  >(null);
  const { profiles } = UseAccount();

  // Sorting the profiles by totalStars
  useEffect(() => {
    if (profiles) {
      const sortedProfiles = [...profiles]; // Create a new array to avoid mutating the original
      sortedProfiles.sort((a, b) => b.totalStars - a.totalStars);
      setProfileSorted(sortedProfiles);
    }
  }, [profiles]);

  return (
    <div className="w-full p-4 bg-white rounded-lg sm:p-8 dark:bg-gray-800 ">
      <div className="flex items-center justify-between mb-4"></div>
      <div className="flow-root">
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {profileSorted &&
            profileSorted.map((item: any, index: any) => (
              <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                  <h5 className="text-[20px] md:text-[48px] dark:text-white font-lapsus text-gray-900 pr-4">
                    # {index + 1}
                  </h5>
                  <div className="flex-shrink-0">
                    <img
                      className="w-16 h-16 rounded-full"
                      src={item1}
                      alt="Neil"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className=" text-gray-900 dark:text-white font-lapsus text-[20px] md:text-[48px]">
                      {item.firstName}
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    <div className="flex justify-end">
                      <h5 className="mb-2 text-[20px] md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {item.totalStars}
                      </h5>
                      <svg
                        className="w-10 h-10 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                    </div>
                  </div>
                </div>
                {/* <hr className="my-6 border-gray-200" /> */}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default ScoreBoard;
