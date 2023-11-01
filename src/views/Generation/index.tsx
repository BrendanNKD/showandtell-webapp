import { UseAuthenticatedRoute } from "utils/authRoute";
// import { UseProfile } from "app/state/profile/useProfile";
import Navbar from "components/navBar";
import { ChangeEvent, useEffect, useState } from "react";
import DragDrop from "components/dragAndDrop";
import Footer from "components/footer";
import { useGenerateCaption } from "app/hooks/useGenerate";
import { useCheck, useOpenAiCompletion } from "app/hooks/useOpenAiCompletion";
import TextToSpeech from "components/textToSpeech";

import { UseProfile, UseProfileIndex } from "app/state/profile/useProfile";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Modal } from "components/modal";
import {
  useAddProfile,
  useAddStars,
  useSetProfile,
} from "app/hooks/useAccount";
import { useSaveCollection } from "app/hooks/useCollection";

export const GenerateEmpty = () => {
  // Redirect user to profile if they are authenticate
  // const profile = UseProfile();
  const profile: any = UseProfile();
  const profileIndex = UseProfileIndex();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  UseAuthenticatedRoute();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [imageCaption, setImageCaption] = useState<string | null>(null);
  const [imageDescription, setImageDescription] = useState<string | null>(null);
  const { generate, caption, captionloading } = useGenerateCaption();
  const { update, updateDataloading } = useSaveCollection();
  const { addNewProfile, addProfileLoading, isaddProfileSuccess } =
    useAddProfile();
  const { completion, description, descriptionloading } = useOpenAiCompletion();
  const { checkAnswer, answer, answerSuccess, answerloading } = useCheck();
  const { updateStars, newStarsData, isnewStarsSuccess, newStarsLoading } =
    useAddStars();

  const [selectedIssues, setSelectedIssues] = useState<string[]>([]);
  const [otherIssue, setOtherIssue] = useState<string>("");

  const handleGenerateCaption = async () => {
    console.log(String(searchParams.get("category")));
    if (selectedImage) {
      await generate({
        image: selectedImage,
        category: String(searchParams.get("category")),
      });
    }
  };

  const emptyClick = async () => {
    console.log(selectedIssues);
    console.log(otherIssue);
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
      setShowSuccess((prevShowModal) => !prevShowModal);
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
    if (description) {
      checkAnswer({
        caption: imageCaption,
        sentence: String(searchParams.get("caption")),
      });
    }
  }, [description, searchParams, checkAnswer, imageCaption]);

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;

    if (checked) {
      setSelectedIssues([...selectedIssues, name]);
    } else {
      setSelectedIssues(selectedIssues.filter((item) => item !== name));
    }
  };

  const handleOtherIssueChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setOtherIssue(event.target.value);
  };
  useEffect(() => {
    if (String(answer).includes("True")) {
      console.log("You are correct!");
      setShowQuest(true);
      updateStars({
        awardStars: 200,
        profileId: profile._id,
      });
    }
  }, [answer, updateStars, profile._id]);

  //report function stuf
  const [showModal, setShowModal] = useState(false);
  //success pop-up
  const [showSuccess, setShowSuccess] = useState(false);
  //quest complete popup
  const [showQuest, setShowQuest] = useState(false);

  return (
    <div className="bg-transparent flex flex-row justify-center w-full">
      <div className="h-fit flex-col justify-center align-middle">
        <Navbar />
        <div className="overflow-hidden bg-[url(https://c.animaapp.com/xYMQ48TT/img/group.png)] bg-[100%_100%] w-[1920px] h-[1136.7px] relative">
          <button
            onClick={() => {
              navigate("/GenerateChoose");
            }}
          >
            <img
              className="absolute w-[77px] h-[83px] top-[145px] left-[48px]"
              alt="Frame"
              src="https://c.animaapp.com/xYMQ48TT/img/frame.svg"
            />
          </button>
          {/*left side image square*/}
          <div className="absolute w-[1034px] h-[821px] top-[145px] left-[166px] bg-[url(https://c.animaapp.com/xYMQ48TT/img/vector-4.svg)] bg-[100%_100%]">
            <div
              className="absolute w-[1034px] h-[92px] top-0 left-0 p-5 rounded-t-3xl"
              style={{ backgroundColor: searchParams.get("color")! }}
            >
              <div className=" flex justify-center items-center  [font-family:'lapsus',Helvetica] font-bold text-black text-[49px] tracking-[1.23px] leading-[normal] whitespace-nowrap">
                {searchParams.get("title")}
              </div>
              <img
                className="absolute w-[64px] h-[56px] top-[20px] left-[35px]"
                alt="Frame"
                src={searchParams.get("image")!}
              />
            </div>
            {/*Caption box*/}
            <div className="absolute w-[674px] h-[55px] top-[505px] left-[180px] top-0 left-0 bg-[#e2e3e4] p-3 rounded-[10px]">
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
            <Modal
              title="Report problem"
              setShowModal={setShowQuest}
              showModal={showQuest}
              buttonFn={emptyClick}
              loading={addProfileLoading}
              element={
                <>
                  <div className="flex flex-col py-2 [font-family:'lapsus',Helvetica] text-[75px] tracking-[0.82px]">
                    Quest complete!
                  </div>
                </>
              }
            ></Modal>
            {/*Description box*/}
            <div className="absolute w-[674px] top-[571px] left-[180px] bg-[#e2e3e4] p-3 rounded-[10px] min-h-fit max-h-225px">
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
            <div className="absolute w-[674px] h-[382px] top-[109px] left-[180px]">
              {/*Selected image box*/}
              <div className="absolute w-[674px] h-[382px] top-0 left-0 bg-[#e2e3e4]">
                {selectedImage ? (
                  <img
                    className="w-full h-full object-contain transition-all duration-300 rounded-lg cursor-pointer filter"
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
              </div>
            </div>

            {/*save button*/}
            <Modal
              title="Save to Collection"
              setShowModal={setShowSuccess}
              showModal={showSuccess}
              buttonFn={emptyClick}
              loading={addProfileLoading}
              element={
                <>
                  <div className="flex flex-col py-2 [font-family:'lapsus',Helvetica] text-[75px] tracking-[0.82px]">
                    Success!
                  </div>
                </>
              }
            ></Modal>
            <button
              className="absolute w-[115px] h-[70px] top-[727px] left-[875px]"
              onClick={function (event) {
                handleSaveContent();
              }}
              disabled={
                descriptionloading || captionloading || updateDataloading
              }
            >
              <div className="relative w-[113px] h-[70px]">
                <div className="absolute w-[113px] h-[61px] top-[9px] left-0 bg-[#56c0ee] rounded-[17px]" />
                <div className="absolute w-[113px] h-[61px] top-0 left-0 bg-[#9cdbf8] rounded-[17px]" />
                <div className="absolute w-[67px] top-[14px] left-[23px] [font-family:'lapsus',Helvetica] font-bold text-black text-[33px] text-center tracking-[0.82px] leading-[normal] whitespace-nowrap">
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
                </div>
              </div>
            </button>
            {/*report problem button*/}
            <Modal
              title="Report problem"
              setShowModal={setShowModal}
              showModal={showModal}
              buttonFn={emptyClick}
              loading={addProfileLoading}
              element={
                <>
                  <div className="flex flex-col py-2">
                    <form>
                      <label
                        style={{ fontSize: 32, letterSpacing: 0.2 }}
                        className="[font-family:'gillsans',Helvetica]"
                      >
                        <span> Check all that apply: </span>
                        <br />
                      </label>

                      <label>
                        <input
                          type="checkbox"
                          name="inaccurateCaptions"
                          onChange={handleCheckboxChange}
                        />
                        <span> Inaccurate captions </span>
                        <br />
                      </label>
                      <label>
                        <input
                          type="checkbox"
                          name="soundProblem"
                          onChange={handleCheckboxChange}
                        />
                        <span> Sound problem </span>
                        <br />
                      </label>
                      <label>
                        <input
                          type="checkbox"
                          name="somethingElse"
                          onChange={handleCheckboxChange}
                        />
                        <span> Something else: </span>
                        <br />
                      </label>

                      <textarea
                        value={otherIssue}
                        onChange={handleOtherIssueChange}
                        rows={5}
                        cols={35}
                        placeholder={"Let us know what's wrong"}
                      />
                    </form>
                  </div>
                </>
              }
            ></Modal>
            <button
              className="rounded-lg p-4 cursor-pointer flex flex-col align-middle justify-center mb-10"
              onClick={() => {
                setShowModal((prevShowModal) => !prevShowModal); // Toggle the state
              }}
            >
              <img
                className="absolute w-[51px] h-[48px] top-[134px] left-[907px]"
                alt="Frame"
                src="https://c.animaapp.com/NcdooYZJ/img/frame-4.svg"
              />
            </button>
            <div className="absolute w-[93px] top-[184px] left-[886px] [font-family:'Inter',Helvetica] font-normal text-black text-[16px] text-center tracking-[0] leading-[normal]">
              Report problem
            </div>
          </div>

          {/*right side image square*/}
          <div className="absolute w-[460px] h-[337px] top-[431px] left-[1374px]">
            <div className="absolute w-[460px] h-[337px] top-0 left-0 bg-[#ffffff] rounded-[15px] bg-[100%_100%]">
              <DragDrop
                selectedImage={selectedImage}
                setSelectedImage={setSelectedImage}
              />
              {/*generate button*/}
              <button
                className="absolute w-[207px] h-[59px] top-[265px] left-[128px]"
                onClick={handleGenerateCaption}
                disabled={
                  descriptionloading || captionloading || updateDataloading
                }
              >
                <div className="relative w-[205px] h-[59px]">
                  <div className="absolute w-[205px] h-[53px] top-[6px] left-0 bg-[#53c2ef] rounded-[13px]" />
                  <div className="absolute w-[205px] h-[53px] top-0 left-0 bg-[#9cdcf9] rounded-[13px]" />
                  <div className="absolute w-[180px] top-[6px] left-[12px] [font-family:'lapsus',Helvetica] font-bold text-black text-[43px] text-center tracking-[1.07px] leading-[normal] whitespace-nowrap">
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
                      <>Generate</>
                    )}
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
