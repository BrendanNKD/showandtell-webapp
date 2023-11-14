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
  questindex,
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
  }, [questindex]);

  return (
    <>
      <button
        className={`h-[200px] w-[250px] md:h-[150px] md:w-[400px] lg:h-[150px] lg:w-[600px] xl:h-[150px] xl:w-[750px] top-[10px] overflow-y-hidden relative flex flex-row items-center border border-gray-200 rounded-xl shadow hover:bg-gray-200 p-4 ${
          completed ? "opacity-50 pointer-events-none" : ""
        }`}
        style={{
          backgroundColor:
            categoryVal[category as keyof typeof categoryVal].color!,
        }}
        onClick={() => passQuestParams(category, caption)}
      >
        <div className="flex flex-col md:flex-row md:space-x-4 justify-center items-center space-y-2">
          {/*<img
            className="object-cover w-48"
            src={item1}
            alt=""
          />
          */}
          {/* model icon */}
          <img
            className="object-cover w-12 md:w-20"
            alt="Frame"
            src={categoryVal[category as keyof typeof categoryVal].image!}
          />
          <div className="flex flex-col justify-center leading-normal w-full">
            <div className="flex justify-center items-center md:justify-start md:items-center">
              <h5 className="text-[16px] md:text-[23px] lg:text-[28px] xl:text-[32px] tracking-[0.85px] [font-family:'lapsus',Helvetica] font-bold text-black">
                Category:{" "}
                {categoryVal[category as keyof typeof categoryVal].title!}
              </h5>
            </div>

            <div className="lg:w-[400px] xl:w-[550px] flex justify-center items-center lg:justify-start">
              <p className="[font-family:'gillsans',Helvetica] text-black text-[12.6px] md:text-[16px] xl:text-[20px] text-center md:text-left">
                {description}
              </p>
            </div>
          </div>

          <div className="flex justify-end">
            <FaCheckCircle size={50} color={completed ? "green" : "grey"} />
          </div>
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
