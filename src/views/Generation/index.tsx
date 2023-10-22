import { UseAuthenticatedRoute } from "utils/authRoute";
// import { UseProfile } from "app/state/profile/useProfile";
import Navbar from "components/navBar";
import { useEffect, useState } from "react";
import DragDrop from "components/dragAndDrop";
import Footer from "components/footer";
import { useGenerateCaption } from "app/hooks/useGenerate";
import { useOpenAiCompletion } from "app/hooks/useOpenAiCompletion";
import TextToSpeech from "components/textToSpeech";
import { useSaveCollection } from "app/hooks/useCollection";
import { UseProfile, UseProfileIndex } from "app/state/profile/useProfile";
import { useSearchParams } from "react-router-dom";
const Generate = () => {
  // Redirect user to profile if they are authenticate
  // const profile = UseProfile();
  const [searchparams] = useSearchParams();
  console.log(searchparams.get("category"));
  UseAuthenticatedRoute();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [imageCaption, setImageCaption] = useState<string | null>(null);
  const [imageDescription, setImageDescription] = useState<string | null>(null);
  const profile = UseProfile();
  const profileIndex = UseProfileIndex();
  const { generate, caption, captionloading } = useGenerateCaption();
  const { update, updateDataloading } = useSaveCollection();
  const { completion, description, descriptionloading } = useOpenAiCompletion();

  const handleGenerateCaption = async () => {
    if (selectedImage) {
      await generate({ image: selectedImage });
    }
  };

  const handleSaveContent = async () => {
    if (
      selectedImage &&
      imageCaption &&
      profileIndex !== null &&
      profile &&
      imageDescription
    ) {
      await update({
        image: selectedImage,
        caption: imageCaption,
        profile: profile?.firstName,
        profileIndex: profileIndex,
        description: imageDescription,
        avatar: profile.profilePic,
      });
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
      <div className="container mt-16">
        <h1 className="font-extrabold leading-none tracking-tigh md:text-3xl lg:text-4xl dark:text-black text-gray-700">
          Captioning
        </h1>
        <div className="flex justify-center gap-6 pb-20 pt-10">
          <div className="flex-initial w-full h-full overflow-hidden">
            {selectedImage ? (
              <img
                className="w-full h-full object-cover transition-all duration-300 rounded-lg cursor-pointer filter"
                src={selectedImage}
                alt="description"
              />
            ) : (
              <img
                className="w-full h-full object-cover transition-all duration-300 rounded-lg cursor-pointer filter"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
                alt="description"
              />
            )}

            <div className="pt-10">
              <h1 className="block mb-2 text-lg font-medium text-white dark:text-white ">
                Description
              </h1>
              <div className="text-black bg-gray-200 p-6 rounded-lg">
                {caption ? (
                  <>
                    <div className="flex flex-row">
                      <p>{imageCaption}</p>
                    </div>
                  </>
                ) : (
                  <p>Caption not generated.</p>
                )}
              </div>
              <div className="text-black bg-gray-200 mt-6 p-6 rounded-lg">
                {imageDescription ? (
                  <>
                    <div className="flex flex-col">
                      <p>{imageDescription}</p>
                      <div className="flex flex-row justify-center pt-6">
                        <TextToSpeech text={imageDescription} />
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <p>Description not generated.</p>
                  </>
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
                  disabled={
                    descriptionloading || captionloading || updateDataloading
                  }
                >
                  {descriptionloading || captionloading ? (
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
                    <>Generate Caption</>
                  )}
                </button>

                <button
                  className="hover:bg-violet-600 border-violet-600 bg-violet-600 text-white font-bold py-4 px-4 rounded-lg w-full"
                  onClick={handleSaveContent}
                  disabled={
                    descriptionloading || captionloading || updateDataloading
                  }
                >
                  {updateDataloading ? (
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
                    <>Save</>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};
export default Generate;
