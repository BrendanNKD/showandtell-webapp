import item1 from "../../../assets/items/images.jpeg";
const QuestProfile = ({ stars, percentage, name }: IProps) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <button>
        <img className="rounded-t-lg" src={item1} alt="" />
      </button>
      <div className="p-5">
        <div className="flex justify-end">
          <button>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-right mr-2">
              Hello!, {name} !
            </h5>
          </button>
        </div>
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
        <div className="flex justify-center py-4">
          <div className="relative w-full h-4 bg-gray-200 rounded-full ">
            <div
              className="h-full bg-blue-500 rounded-full"
              style={{ width: `${45}%` }}
            ></div>
            <div className="absolute inset-0 flex items-center justify-center text-black">
              {"45"}%
            </div>
          </div>
        </div>
        {/* <div className="flex justify-end">
          <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            See Profile
            <svg
              className="w-3.5 h-3.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default QuestProfile;

interface IProps {
  stars: number;
  percentage: number;
  name: string;
}
