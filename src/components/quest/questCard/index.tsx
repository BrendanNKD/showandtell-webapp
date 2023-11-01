import item1 from "../../../assets/items/1.jpg";
import { FaCheckCircle } from "react-icons/fa";

const categoryValues = {
  'animals': {title: "Animals" , image:"https://c.animaapp.com/YStE9pzZ/img/frame-2.svg", color:"#F177AE"},
  'shapes': {title: "Shapes & Colors" , image:"https://c.animaapp.com/YStE9pzZ/img/frame.svg", color:"#FAE55A"},
  'vege': {title: "Fruits & Vegetables" , image:"https://c.animaapp.com/NIGs1Y1e/img/frame-7.svg", color:"#9784D6"},
  'vehicle': {title: "Vehicle" , image:"https://c.animaapp.com/YStE9pzZ/img/frame-1.svg", color:"#885FA8"},
  'flowers': {title: "Flowers" , image:"https://c.animaapp.com/NIGs1Y1e/img/frame-5.svg", color:"#FCB315"},
  'food': {title: "Food" , image:"https://c.animaapp.com/NIGs1Y1e/img/frame-6.svg", color:"#80C342"}
} 



export const QuestCard = ({
  category,
  description,
  award,
  completed,
}: IProps) => {
  const catColor = categoryValues[category as keyof typeof categoryValues].color!
  return (
    <>
      
      <button
        className={`h-[100px] w-[700px] top-[10px] overflow-y-hidden relative flex flex-row items-center border border-gray-200 rounded-xl shadow hover:bg-gray-200 p-4 ${
          completed ? "opacity-50 pointer-events-none" : ""
        }`
        }
        style={{ backgroundColor: categoryValues[category as keyof typeof categoryValues].color! }}
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
            src={categoryValues[category as keyof typeof categoryValues].image!}
          />
        </div>

        <div className="flex flex-col justify-between p-4 leading-normal w-full">
          <div className="flex justify-start m-1">
            <h5 className="text-[25px] tracking-[0.85px] [font-family:'lapsus',Helvetica] font-bold tracking-tight text-black">
              Category: {categoryValues[category as keyof typeof categoryValues].title!}
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
}
