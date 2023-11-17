import { UseAuthenticatedRoute } from "utils/authRoute";
// import { UseProfile } from "app/state/profile/useProfile";
import Navbar from "components/navBar";
import { useEffect, useState } from "react";
import { useGenerateImage } from "app/hooks/useGenerate";
import { useNavigate } from "react-router-dom";
import { Animation } from "components/animationComponent";

const Playground = () => {
  UseAuthenticatedRoute();
  // const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [generatedOutput, setGeneratedOutput] = useState<string[]>([]);
  const [text, setText] = useState<string>(""); // Initialize with an empty string
  const { generate, images, imagesloading } = useGenerateImage();

  const [selectedImageId, setSelectedImageId] = useState<number | null>(null);
  // Define a function to handle textarea input changes
  const handleTextareaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setText(event.target.value); // Update the 'text' state with the textarea value
  };

  // const query = async (data: Input) => {
  //   console.log(data);
  //   const response = await fetch(
  //     "https://api-inference.huggingface.co/models/Gustavosta/MagicPrompt-Stable-Diffusion",
  //     {
  //       headers: {
  //         Authorization: "Bearer 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",
  //       },
  //       method: "POST",
  //       body: JSON.stringify(data),
  //     }
  //   );
  //   const result = await response.json();
  //   return result;
  // };

  const handleGenerateImage = async () => {
    // if (text)
    //   await query({ inputs: text }).then((response) => {
    //     generate({ prompt: response[0].generated_text });
    //   });

    // if (text)
    // await query({ inputs: text }).then((response) => {
    generate({ prompt: text });
    // });
  };

  const handleSaveSelectedImage = async () => {
    console.log(selectedImageId);
    // const base64 = await fetch("https://i.imgur.com/gBi0yjr.png")
    //   .then((response) => response.blob())
    //   .then((blob) => {
    //     const reader = new FileReader();
    //     reader.readAsDataURL(blob);
    //     return new Promise((res) => {
    //       reader.onloadend = () => {
    //         res(reader.result);
    //       };
    //     });
    //   });
  };

  const handleImageClick = (index: number) => {
    setSelectedImageId((prevSelectedImageId) =>
      prevSelectedImageId === index ? null : index
    );
  };

  const navigate = useNavigate();

  useEffect(() => {
    console.log(images);
    setGeneratedOutput(images);
  }, [images]);

  const animationComponents = [];

  for (let i = 0; i < 20; i++) {
    const delayValue = 0.0 + 2 * i; // Increment delay by 1 second in each iteration
    animationComponents.push(
      <Animation
        key={i}
        delay={delayValue}
        location={-500}
        minheight={200}
        maxheight={500}
      />
    );
  }

  return (
    <div className="bg-transparent flex flex-row justify-center w-full">
      <Navbar></Navbar>
      <div className="bg-transparent flex flex-row justify-center items-center w-full">
        <div
          className="overflow-hidden bg-[url(https://c.animaapp.com/xYMQ48TT/img/group.png)] bg-[100%_100%] w-[1920px] h-[1136.7px] relative p-20"
          style={{ zIndex: 0 }}
        >
          <div className="flex flex-row items-start h-[100%] lg:pt-5">
            {animationComponents}
            <button
              onClick={() => {
                navigate("/PlaygroundChoose");
              }}
            >
              <img
                className="w-10 md:w-16"
                alt="Frame"
                src="https://c.animaapp.com/xYMQ48TT/img/frame.svg"
              />
            </button>
            <div className="flex flex-col justify-start items-start lg:flex-row p-3 w-[100%] h-[100%] space-y-6 lg:space-x-10">
              {/*left side image square*/}
              <div className="flex flex-col items-center w-[100%] h-[70%] md:h-[70%] lg:w-[150%] lg:h-[90%] bg-white rounded-3xl">
                <div className="flex flex-row justify-center items-center w-[100%] h-[60px] p-5 bg-[#929acd] rounded-t-3xl space-x-5 md:space-x-8">
                  <div className="w-10">
                    <img
                      alt="Frame"
                      src="https://c.animaapp.com/tZB0JjG7/img/group-1@2x.png"
                    />
                  </div>
                  <div className="flex justify-center items-center  [font-family:'lapsus',Helvetica] font-bold text-black text-[28px] md:text-[32px] tracking-[1.23px] leading-[normal] whitespace-nowrap">
                    Create Art
                  </div>
                </div>
                <div className="flex justify-center items-center w-[100%] h-[100%]">
                  {generatedOutput ? (
                    generatedOutput.map((imageUrl, index) => (
                      <div
                        key={index}
                        className={`relative w-1/3 box-border transition-opacity duration-300 cursor-pointer ${
                          selectedImageId === null
                            ? ""
                            : selectedImageId === index
                            ? ""
                            : "opacity-50"
                        }`}
                        onClick={() => handleImageClick(index)}
                      >
                        <div
                          className={`absolute top-2 right-2 w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center ${
                            selectedImageId === index ? "block" : "hidden"
                          }`}
                        >
                          ✓
                        </div>
                        <img
                          src={imageUrl}
                          alt={`Generated ${index}`}
                          className="w-full"
                        />
                        {selectedImageId !== null &&
                          selectedImageId !== index && (
                            <div className="absolute inset-0 bg-black opacity-60"></div>
                          )}
                      </div>
                    ))
                  ) : (
                    <div className="text-black [font-family:'gillsans',Helvetica] text-[20px]">
                      <p>No recent generated output</p>
                    </div>
                  )}
                </div>
                <div className="mb-4">
                  <button onClick={handleSaveSelectedImage}>
                    <div>
                      <div className="w-[180px] h-[53px] lg:w-[250px] lg:h-[60px] xl:w-[320px] xl:h-[70px] left-0 bg-[#53c2ef] rounded-[13px]">
                        <div className="flex justify-center items-center w-[180px] h-[45px] lg:w-[250px] lg:h-[50px] xl:w-[320px] xl:h-[60px] top-0 left-0 bg-[#9cdcf9] rounded-[13px]">
                          <div className="[font-family:'lapsus',Helvetica] font-bold text-black text-[35px] text-center tracking-[1.07px] leading-[normal] whitespace-nowrap">
                            {imagesloading ? (
                              <>
                                <svg
                                  aria-hidden="true"
                                  role="status"
                                  className="inline w-4 h-4 mr-3 text-gray-200 animate-spin dark:text-gray-600"
                                  viewBox="0 0 100 101"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                    fill="#1C64F2"
                                  />
                                </svg>
                                loading...
                              </>
                            ) : (
                              <>Generate</>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
              {/*right side image square*/}
              <div className="flex w-[100%] h-[70%] lg:h-[90%] md:justify-center md:items-center">
                <div className="flex flex-col justify-start w-[100%] h-[330px] lg:h-[400px] bg-[#ffffff] rounded-lg p-3">
                  <div className="[font-family:'lapsus',Helvetica] font-bold text-black text-[39px] tracking-[0] leading-[normal]">
                    Prompt:
                  </div>
                  <textarea
                    rows={10}
                    cols={50}
                    className="rounded-lg p-4 text-lg bg-[#e2e3e4]"
                    value={text} // Bind the 'text' state to the textarea value
                    onChange={handleTextareaChange} // Call the handler function on input change
                  ></textarea>
                  {/*generate button*/}
                  <div className="flex justify-center items-center w-[100%] h-[30%] mt:[5px]">
                    <button onClick={handleGenerateImage}>
                      <div>
                        <div className="w-[180px] h-[53px] lg:w-[250px] lg:h-[60px] xl:w-[320px] xl:h-[70px] left-0 bg-[#53c2ef] rounded-[13px]">
                          <div className="flex justify-center items-center w-[180px] h-[45px] lg:w-[250px] lg:h-[50px] xl:w-[320px] xl:h-[60px] top-0 left-0 bg-[#9cdcf9] rounded-[13px]">
                            <div className="[font-family:'lapsus',Helvetica] font-bold text-black text-[35px] text-center tracking-[1.07px] leading-[normal] whitespace-nowrap">
                              {imagesloading ? (
                                <>
                                  <svg
                                    aria-hidden="true"
                                    role="status"
                                    className="inline w-4 h-4 mr-3 text-gray-200 animate-spin dark:text-gray-600"
                                    viewBox="0 0 100 101"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                      fill="#1C64F2"
                                    />
                                  </svg>
                                  loading...
                                </>
                              ) : (
                                <>Generate</>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Playground;
