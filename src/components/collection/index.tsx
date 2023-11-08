import React from "react";
import { Link } from "react-router-dom";
import { CollectionProp } from "domain/types/collection/collection";
import { defaultPics } from "utils/profilePic";
import truncateText from "utils/truncate";
import { FaTrash } from "react-icons/fa";
import { useDeleteCollection } from "app/hooks/useCollection";
interface IProps {
  collectionData: CollectionProp[];
}
export const CollectionCard: React.FC<IProps> = ({ collectionData }) => {
  const title = "Collection";

  const { deleteCol, deleteDataErr, deleteDataloading } = useDeleteCollection();

  const handleDeleteItem = async (id: string | undefined) => {
    console.log(id);
    deleteCol({ profileId: id });
  };

  return (
    <>
      <div className="container">
        {/*<h1 className="font-extrabold leading-none tracking-tigh md:text-3xl lg:text-4xl dark:text-white text-gray-700">
          Collection
        </h1>
        */}
        <div
          className={`grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px] ${
            title !== undefined ? "mt-12" : ""
          }`}
        >
          {collectionData &&
            collectionData.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden bg-violet-600 bg-opacity-10 dark:bg-slate-900 rounded-lg p-3 shadow hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-800 hover:scale-105 ease-in-out duration-500"
              >
                <img src={item.image} className="rounded-lg" alt="" />

                <div className="relative p-4 -mt-14">
                  <div className="relative inline-block">
                    <img
                      src={defaultPics[item.avatar].url}
                      className="h-16 rounded-md shadow-md dark:shadow-gray-800"
                      alt=""
                    />
                  </div>

                  <div className="mt-3">
                    <Link
                      to="/explore-one"
                      className="font-semibold block text-[18px] hover:text-violet-600 text-gray-700"
                    >
                      {item.caption}
                    </Link>
                    <span className="text-slate-400 mt-1 text-sm">
                      <span className="italic">by</span>{" "}
                      <Link
                        to="/creator-profile"
                        className="text-violet-600 font-medium"
                      >
                        {item.profile}
                      </Link>
                    </span>
                    <span className="text-slate-400 block text-[16px] mt-1">
                      {truncateText(item.description, 20)}
                    </span>
                    <button
                      className="bottom-2 right-2 flex items-center bg-red-300 p-2 rounded"
                      onClick={() => handleDeleteItem(item._id)}
                    >
                      <FaTrash
                        style={{ color: "red", cursor: "pointer" }}
                        // onClick={() => handleDeleteItem(item._id)} // Replace handleDeleteItem with your delete logic
                      />
                      <span
                        className="text-red-600 ml-1"
                        //onClick={() => handleDeleteItem(item._id)}
                      >
                        Delete
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};
