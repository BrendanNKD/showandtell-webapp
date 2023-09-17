import {
  UseAuthenticatedRoute,
  UseNonAuthenticatedRoute,
} from "utils/authRoute";
// import { UseProfile } from "app/state/profile/useProfile";
import { useSignOut } from "app/hooks/useCognitoAuth";
import Navbar from "components/navBar";
import { useNavigate } from "react-router-dom";
import { CollectionCard } from "components/collection";
import Footer from "components/footer";
import { useEffect, useState } from "react";
import DragDrop from "components/dragAndDrop";
import { useGenerateImage } from "app/hooks/useGenerate";

import {
  generateCaptionRequest,
  generateImageRequest,
} from "domain/types/generate";
import { Input } from "domain/types/magicPrompt";

const Playground = () => {
  UseAuthenticatedRoute();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [generatedOutput, setGeneratedOutput] = useState<string[]>([]);
  const [text, setText] = useState<string>(""); // Initialize with an empty string
  const { generate, images, imagesloading } = useGenerateImage();

  const [selectedImageId, setSelectedImageId] = useState<number | null>(null);
  const navigate = useNavigate();
  // Define a function to handle textarea input changes
  const handleTextareaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setText(event.target.value); // Update the 'text' state with the textarea value
  };

  const query = async (data: Input) => {
    console.log(data);
    const response = await fetch(
      "https://api-inference.huggingface.co/models/Gustavosta/MagicPrompt-Stable-Diffusion",
      {
        headers: {
          Authorization: "Bearer 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",
        },
        method: "POST",
        body: JSON.stringify(data),
      }
    );
    const result = await response.json();
    return result;
  };

  const handleGenerateImage = async () => {
    if (text)
      await query({ inputs: text }).then((response) => {
        generate({ prompt: response[0].generated_text });
      });
  };

  const handleImageClick = (index: number) => {
    setSelectedImageId((prevSelectedImageId) =>
      prevSelectedImageId === index ? null : index
    );
  };

  useEffect(() => {
    setGeneratedOutput(images);
  }, [images]);

  return (
    <div className="h-fit flex-col justify-center align-middle ">
      <Navbar></Navbar>;
      <div className="flex justify-center align-middle pb-20 pt-10 ">
        <div className="grid grid-rows-3 grid-flow-col gap-6 w-3/5">
          <div className="row-span-3">
            <div className="pt-10">
              <figure className="relative max-w-lg transition-all duration-300 cursor-pointer filter  ">
                {selectedImage ? (
                  <img src={selectedImage} alt="Uploaded" />
                ) : (
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/800px-No-Image-Placeholder.svg.png"
                    alt="Uploaded"
                  />
                )}
                {/* <figcaption className="absolute px-4 text-lg text-black bottom-6">
                  <p>
                    Do you want to get notified when a new component is added to
                    Flowbite?
                  </p>
                </figcaption> */}
              </figure>
            </div>
          </div>
          <div className="col-span-2 ">
            <label className="block mb-2 text-lg font-medium text-white dark:text-white ">
              Prompt
            </label>
            <div className="flex flex-col gap-6">
              <textarea
                rows={8}
                cols={8}
                className="rounded-lg p-4 text-lg"
                value={text} // Bind the 'text' state to the textarea value
                onChange={handleTextareaChange} // Call the handler function on input change
              ></textarea>
            </div>
          </div>
          <div className="row-span-2 col-span-2">
            <label className="block mb-2 text-lg font-medium text-white dark:text-white ">
              Prompt
            </label>
            <DragDrop
              selectedImage={selectedImage}
              setSelectedImage={setSelectedImage}
            />
            <div className="mt-8 flex justify-end">
              <button
                className="hover:bg-violet-600 border-violet-600 bg-violet-600  text-white font-bold py-2 px-4 rounded-lg"
                onClick={handleGenerateImage}
              >
                Generate image
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row w-full py-24">
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
          <div className="flex justify-center w-full text-white">
            <p>No recent generated output</p>
          </div>
        )}
      </div>
      <Footer></Footer>
    </div>
  );
};
export default Playground;
