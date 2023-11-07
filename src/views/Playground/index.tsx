import { UseAuthenticatedRoute } from "utils/authRoute";
// import { UseProfile } from "app/state/profile/useProfile";
import Navbar from "components/navBar";
import { useEffect, useState } from "react";
import { useGenerateImage } from "app/hooks/useGenerate";
import { useNavigate } from "react-router-dom";

const Playground = () => {
  UseAuthenticatedRoute();
  // const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [generatedOutput, setGeneratedOutput] = useState<string[]>([]);
  const [text, setText] = useState<string>(""); // Initialize with an empty string
  const { generate, images } = useGenerateImage();

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

  const handleImageClick = (index: number) => {
    setSelectedImageId((prevSelectedImageId) =>
      prevSelectedImageId === index ? null : index
    );
  };

  const navigate = useNavigate();

  useEffect(() => {
    setGeneratedOutput(images);
  }, [images]);

  return (
    <div className="bg-transparent flex flex-row justify-center w-full">
      <div className="overflow-hidden bg-[url(https://c.animaapp.com/YjacsXJS/img/group.png)] bg-[100%_100%] w-[1920px] h-[1136.7px] relative">
        <Navbar></Navbar>
        <div className="flex-row justify-center absolute w-[1034px] h-[700px] top-[145px] left-[166px] rounded-3xl bg-white bg-[100%_100%]">
          <div className="absolute w-[1034px] h-[92px] top-0 left-0 rounded-t-3xl bg-[#F078AE] bg-[100%_100%]">
            <div className="absolute w-[238px] top-[19px] left-[418px] [font-family:'lapsus',Helvetica] font-bold text-black text-[49px] tracking-[1.23px] leading-[normal] whitespace-nowrap">
              Create Art
            </div>
          </div>
          <div className="flex flex-row justify-center py-24 absolute w-[490px] top-[150px] left-[0px] [font-family:'gillsans',Helvetica] font-normal text-black text-[39px] tracking-[0] leading-[normal]">
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
                  {selectedImageId !== null && selectedImageId !== index && (
                    <div className="absolute inset-0 bg-black opacity-60"></div>
                  )}
                </div>
              ))
            ) : (
              <div className="text-black [font-family:'gillsans',Helvetica]">
                <p>No recent generated output</p>
              </div>
            )}
          </div>
        </div>
        {/* return button */}
        <button onClick={() => navigate("/PlaygroundChoose")}>
          <img
            className="absolute w-[77px] h-[83px] top-[145px] left-[48px]"
            alt="Frame"
            src="https://c.animaapp.com/YjacsXJS/img/frame-3.svg"
          />
        </button>
        <div className="absolute w-[530px] h-[600px] top-[250px] left-[1303px] bg-white rounded-[24px] bg-[100%_100%]">
          <div className="absolute w-[459px] h-[350px] top-[75px] left-[38px] rounded-[24px] ">
            <textarea
              rows={10}
              cols={50}
              className="rounded-lg p-4 text-lg bg-[#e2e3e4]"
              value={text} // Bind the 'text' state to the textarea value
              onChange={handleTextareaChange} // Call the handler function on input change
            ></textarea>
          </div>
          <div className="absolute w-[144px] top-[27px] left-[32px] [font-family:'lapsus',Helvetica] font-bold text-black text-[39px] tracking-[0] leading-[normal]">
            Prompt:
          </div>
          <button onClick={handleGenerateImage}>
            <div className="absolute w-[207px] h-[59px] top-[500px] left-[165px]">
              <div className="relative w-[205px] h-[59px]">
                <div className="absolute w-[205px] h-[53px] top-[6px] left-0 bg-[#53c2ef] rounded-[13px]" />
                <div className="absolute w-[205px] h-[53px] top-0 left-0 bg-[#9cdcf9] rounded-[13px]" />
                <div className="absolute w-[180px] top-[6px] left-[12px] [font-family:'lapsus',Helvetica] font-bold text-black text-[43px] text-center tracking-[1.07px] leading-[normal] whitespace-nowrap">
                  Generate
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Playground;
