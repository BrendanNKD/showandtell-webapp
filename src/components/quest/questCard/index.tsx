import { FaCheckCircle } from "react-icons/fa";
import categoryVal from "components/quest/categoryValues";
import { useNavigate, createSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const QuestCard = ({
  category,
  description,
  award,
  completed,
  caption,
  questindex
}: IProps) => {
  const navigate = useNavigate();
  const [questIndex, setQuestIndex] = useState<any>(null);

  const passQuestParams = (category: string, caption: string) => {
    navigate({
      pathname: "/generate",
      search: createSearchParams({
        title: categoryVal[category as keyof typeof categoryVal].title,
        image: categoryVal[category as keyof typeof categoryVal].image,
        color: categoryVal[category as keyof typeof categoryVal].color,
        category: category,
        caption: caption,
        index: questIndex,
      }).toString(),
    });
  };
  
  useEffect(() => {
    if (questindex !== -1 && questindex !== null) {
      setQuestIndex(questindex);
    }
  });

  return (
    <>
      <button
        className={`h-[100px] w-[700px] top-[10px] overflow-y-hidden relative flex flex-row items-center border border-gray-200 rounded-xl shadow hover:bg-gray-200 p-4 ${
          completed ? "opacity-50 pointer-events-none" : ""
        }`}
        style={{
          backgroundColor:
            categoryVal[category as keyof typeof categoryVal].color!,
        }}
        onClick={() => passQuestParams(category, caption)}
      >
        <div className="flex justify-start">
          {/*<img
            className="object-cover w-48"
            src={item1}
            alt=""
          />
          */}
          {/* model icon */}
          <img
            className="object-cover w-26"
            alt="Frame"
            src={categoryVal[category as keyof typeof categoryVal].image!}
          />
        </div>

        <div className="flex flex-col justify-between p-4 leading-normal w-full">
          <div className="flex justify-start m-1">
            <h5 className="text-[25px] tracking-[0.85px] [font-family:'lapsus',Helvetica] font-bold  text-black">
              Category:{" "}
              {categoryVal[category as keyof typeof categoryVal].title!}
            </h5>
          </div>

          <div className="flex justify-start m-1">
            <p className="[font-family:'gillsans',Helvetica] text-black">
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
  caption: string;
  questindex: number;
}
