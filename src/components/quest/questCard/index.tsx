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
        className={`relative flex flex-row items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover-bg-gray-700 pl-4 ${
          completed ? "opacity-50 pointer-events-none" : ""
        }`}
      >
        <div className="flex justify-start">
          <img
            className="object-cover w-48"
            src={item1}
            alt=""
          />
        </div>

        <div className="flex flex-col justify-between p-4 leading-normal w-full">
          <div className="flex justify-start mb-2">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mr-3">
              Category: {category}
            </h5>
          </div>

          <div className="flex justify-start">
            <p className="font-normal text-gray-700 dark:text-gray-400 w-3/5">
              {description}
            </p>
          </div>
        </div>

        <div className="flex justify-end">
          <FaCheckCircle size={50} color={completed ? "green" : "grey"} />
        </div>
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
