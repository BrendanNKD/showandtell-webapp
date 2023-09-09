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
import Collections from "components/collection";
import Footer from "components/footer";
import { useGenerateCaption } from "app/hooks/useGenerate";
import { useOpenAiCompletion } from "app/hooks/useOpenAiCompletion";

const Generate = () => {
  // Redirect user to profile if they are authenticate
  // const profile = UseProfile();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [imageCaption, setImageCaption] = useState<string | null>(null);
  const [imageDescription, setImageDescription] = useState<string | null>(null);
  const { generate, caption } = useGenerateCaption();
  const { completion, description, descriptionSuccess } = useOpenAiCompletion();

  const handleGenerateImage = async () => {
    if (selectedImage) {
      await generate({ image: selectedImage });
    }
    setTimeout(async () => {
      if (imageCaption) await completion({ prompt: imageCaption });
    }, 500);
  };

  useEffect(() => {
    if (caption) {
      setImageCaption(caption.result);
    }
  }, [caption]);

  useEffect(() => {
    setImageDescription(description);
  }, [description]);

  return (
    <div className="h-fit flex-col justify-center align-middle">
      <Navbar></Navbar>
      <div className="flex justify-center align-middle">
        <h1 className="mb-10 text-4xl font-extrabold leading-none tracking-tigh md:text-5xl lg:text-6xl dark:text-white text-white">
          Caption Your Image
        </h1>
      </div>

      <div className="grid gap-4 grid-cols-2 py-20">
        {selectedImage ? (
          <>
            <div className="flex justify-end">
              <div className="w-2/4">
                <img src={selectedImage} alt="Uploaded" />
                <div className="text-black bg-white mt-6 p-6 rounded-lg">
                  {caption ? (
                    <p>{imageCaption}</p>
                  ) : (
                    <p>Caption not generated.</p>
                  )}
                </div>

                <div className="text-black bg-white mt-6 p-6 rounded-lg">
                  {imageDescription ? (
                    <p>{imageDescription}</p>
                  ) : (
                    <p>Description not generated.</p>
                  )}
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="flex justify-end">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/800px-No-Image-Placeholder.svg.png"
              alt="Uploaded"
            />
          </div>
        )}
        <div className="flex flex-col">
          <div className="w-3/4">
            <DragDrop
              selectedImage={selectedImage}
              setSelectedImage={setSelectedImage}
            />
          </div>
          <div className="mt-10 w-3/4">
            <div className="flex justify-end">
              <button
                className="hover:bg-violet-600 border-violet-600 bg-violet-600  text-white font-bold py-2 px-4 rounded-lg"
                onClick={handleGenerateImage}
              >
                Caption image
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center align-middle">
        <Footer></Footer>
      </div>
    </div>
  );
};
export default Generate;
