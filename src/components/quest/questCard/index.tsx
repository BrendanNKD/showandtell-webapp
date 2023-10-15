import item1 from "../../../assets/items/1.jpg";
import { FaCheckCircle } from "react-icons/fa";
export const QuestCard = ({
  category,
  description,
  award,
  completed,
}: IProps) => {
  return (
    <>
      <button
        className={`relative flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 pl-4 ${
          completed ? "opacity-50 pointer-events-none" : ""
        }`}
      >
        <FaCheckCircle size={50} color={completed ? "green" : "grey"} />
        <div className="flex flex-col justify-between p-4 leading-normal ">
          <div className="flex justify-end">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              200
            </h5>
            <svg
              className="w-8 h-8 text-yellow-300 mr-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
          </div>

          <div className="flex justify-end">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white mr-3">
              Category : {"car"}
            </h5>
          </div>
          <div className="flex justify-end">
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 mr-3 w-3/5 text-right">
              Find an image of a vehicle and upload to complete the quest
            </p>
          </div>
        </div>
        <img
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-r-lg"
          src={item1}
          alt=""
        />
      </button>
    </>
  );
};

interface IProps {
  category: string;
  description: string;
  award: number;
  completed: boolean;
}
