import {
  UseAuthenticatedRoute,
  UseNonAuthenticatedRoute,
} from "utils/authRoute";
// import { UseProfile } from "app/state/profile/useProfile";
import { useSignOut } from "app/hooks/useCognitoAuth";
import Navbar from "components/navBar";
import { useEffect, useState } from "react";
import DragDrop from "components/dragAndDrop";
import { Link } from "react-router-dom";
import Collections from "components/slider";
import Footer from "components/footer";
import { useGenerateCaption } from "app/hooks/useGenerate";
import { useOpenAiCompletion } from "app/hooks/useOpenAiCompletion";
import TextToSpeech from "components/textToSpeech";

const Generate = () => {
  // Redirect user to profile if they are authenticate
  // const profile = UseProfile();
  UseAuthenticatedRoute();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [imageCaption, setImageCaption] = useState<string | null>(null);
  const [imageDescription, setImageDescription] = useState<string | null>(null);
  const { generate, caption, captionloading } = useGenerateCaption();
  const { completion, description, descriptionSuccess } = useOpenAiCompletion();

  const handleGenerateCaption = async () => {
    if (selectedImage) {
      await generate({ image: selectedImage });
    }
  };

  const handleSaveContent = async () => {
    if (selectedImage) {
    }
  };

  useEffect(() => {
    if (caption) {
      setImageCaption(caption.result);
      completion({ prompt: caption.result });
    }
  }, [caption, completion]);

  useEffect(() => {
    setImageDescription(description);
  }, [description]);

  return (
    <div className="h-fit flex-col justify-center align-middle">
      <Navbar />
      <div className="flex justify-center gap-6 container py-20">
        <div className="flex-initial w-full h-full overflow-hidden">
          {selectedImage ? (
            <img
              className="w-full h-full object-cover transition-all duration-300 rounded-lg cursor-pointer filter "
              src={selectedImage}
              alt="description"
            />
          ) : (
            <img
              className="w-full h-full object-cover transition-all duration-300 rounded-lg cursor-pointer filter  "
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
              alt="description"
            />
          )}

          <div className="pt-10">
            <h1 className="block mb-2 text-lg font-medium text-white dark:text-white ">
              Description
            </h1>
            <div className="text-black bg-white p-6 rounded-lg">
              {caption ? <p>{imageCaption}</p> : <p>Caption not generated.</p>}
            </div>
            <div className="text-black bg-white mt-6 p-6 rounded-lg">
              {imageDescription ? (
                <>
                  <p>{imageDescription}</p>
                  <TextToSpeech text={imageDescription} />
                </>
              ) : (
                <p>Description not generated.</p>
              )}
            </div>
          </div>
        </div>
        <div className="flex-initial w-full justify-center  ">
          <div className="flex flex-col border p-8 rounded-lg">
            <h1 className="block mb-2 text-lg font-medium text-white dark:text-white ">
              Select Image
            </h1>
            <DragDrop
              selectedImage={selectedImage}
              setSelectedImage={setSelectedImage}
            />
            <div className="mt-6 flex flex-col justify-center gap-6">
              <button
                className="hover:bg-violet-600 border-violet-600 bg-violet-600 text-white font-bold py-4 px-4 rounded-lg w-full"
                onClick={handleGenerateCaption}
              >
                Generate image
              </button>
              <button
                className="hover:bg-violet-600 border-violet-600 bg-violet-600 text-white font-bold py-4 px-4 rounded-lg w-full"
                onClick={handleSaveContent}
              >
                Save image
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center align-middle">
        <Footer />
      </div>
    </div>
  );
};
export default Generate;
