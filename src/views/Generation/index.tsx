import { UseAuthenticatedRoute } from "utils/authRoute";
// import { UseProfile } from "app/state/profile/useProfile";
import Navbar from "components/navBar";
import { ChangeEvent, useEffect, useState } from "react";
import DragDrop from "components/dragAndDrop";
import { useGenerateCaption, useReportIssue } from "app/hooks/useGenerate";
import { useCheck, useOpenAiCompletion } from "app/hooks/useOpenAiCompletion";
import TextToSpeech from "components/textToSpeech";
import { UseProfile, UseProfileIndex } from "app/state/profile/useProfile";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Modal } from "components/modal";
import { useAddProfile, useAddStars } from "app/hooks/useAccount";
import { useSaveCollection } from "app/hooks/useCollection";
import { useCompleteQuestMutation } from "services/quest";
import toast, { Toaster } from "react-hot-toast";
import { Animation } from "components/animationComponent";

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
  const { addProfileLoading } = useAddProfile();
  const { completion, description, descriptionloading } = useOpenAiCompletion();
  const { checkAnswer, answer } = useCheck();
  const { updateStars, newStarsData } = useAddStars();
  const [completeQuest] = useCompleteQuestMutation();
  const [selectedIssues, setSelectedIssues] = useState<string[]>([]);
  const [otherIssue, setOtherIssue] = useState<string>("");
  const { reportIssue, reported, reportLoading } = useReportIssue();

  const handleCancelModal = () => {
    setShowQuest(false);
    // Navigate to a different route
    navigate("/dashboard");
    // Refresh the page after navigation
    navigate(0);
  };

  const handleGenerateCaption = async () => {
    console.log(String(searchParams.get("category")));
    if (selectedImage) {
      await generate({
        image: selectedImage,
        category: String(searchParams.get("category")),
      });
    }
  };

  const submitReport = async () => {
    console.log(selectedIssues);
    if (
      selectedImage &&
      imageCaption &&
      imageDescription &&
      selectedIssues.length !== 0
    ) {
      const data = {
        image: selectedImage,
        caption: imageCaption,
        description: imageDescription,
        issues: selectedIssues,
        otherIssues: otherIssue,
      };
      await reportIssue(data);
    }
  };

  useEffect(() => {
    if (reported) {
      toast.success("Issue Successfully Reported!");
      setShowModal(false);
    }
  }, [reported]);

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
    if (description && searchParams.get("caption") != null) {
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
  }, [answer, profile._id, updateStars]);

  useEffect(() => {
    if (newStarsData) {
      completeQuest({
        profileId: profile._id,
        questIndex: String(searchParams.get("index")),
      });
    }
  }, [newStarsData, completeQuest, profile._id, searchParams]);

  //report function stuff
  const [showModal, setShowModal] = useState(false);
  //success pop-up
  const [showSuccess, setShowSuccess] = useState(false);
  //quest complete popup
  const [showQuest, setShowQuest] = useState(false);
  console.log(String(searchParams.get("questIndex")));

  //animation logic
  const animationComponents = [];

  for (let i = 0; i < 20; i++) {
    const delayValue = 0.0 + 2 * i; // Increment delay by 1 second in each iteration
    animationComponents.push(<Animation key={i} delay={delayValue} />);
  }

  return (
    <div className="bg-transparent flex flex-row justify-center w-full h-fit">
      <Navbar />

      <Toaster position="top-center" reverseOrder={false} />
      <div className="bg-transparent flex flex-row justify-center items-center w-full">
        <div
          className="overflow-hidden bg-[url(https://c.animaapp.com/xYMQ48TT/img/group.png)] bg-[100%_100%] w-[1920px] h-[1136.7px] relative p-20"
          style={{ zIndex: 0 }}
        >
          <div className="flex flex-row items-start h-[100%] lg:pt-5">
            {/*testing animation*/}
            {animationComponents}

            <button
              onClick={() => {
                navigate("/GenerateChoose");
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
                <div
                  className="flex flex-row justify-center items-center w-[100%] h-[60px] p-5 rounded-t-3xl space-x-5 md:space-x-8"
                  style={{ backgroundColor: searchParams.get("color")! }}
                >
                  <div className="w-10">
                    <img alt="Frame" src={searchParams.get("image")!} />
                  </div>
                  <div className=" flex justify-center items-center  [font-family:'lapsus',Helvetica] font-bold text-black text-[28px] md:text-[32px] tracking-[1.23px] leading-[normal] whitespace-nowrap">
                    {searchParams.get("title")}
                  </div>
                </div>
                <div className="w-[100%] h-[180px] md:h-[320px] lg-h:[440px] xl:h-[400px] bg-white p-[2%]">
                  {/*Selected image box*/}
                  <div className="w-[100%] h-[100%] top-0 left-0 bg-[#e2e3e4]">
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

                {/*Caption box*/}
                <div className="w-[100%] h-[55px] md:h-[70px] bg-white px-2 md:px-5">
                  <div className="flex justify-start items-start w-[100%] h-[100%] bg-[#e2e3e4] p-3 rounded-[10px]">
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
                </div>
                {/*Description box*/}
                <div className="w-[100%] h-[220px] md:h-[250px] bg-white px-2 pt-1 md:px-5">
                  <div className="flex justify-start items-start w-[100%] h-[100%] bg-[#e2e3e4] p-3 rounded-[10px] min-h-fit">
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
                {/* buttons */}
                <div className="flex flex-row justify-evenly items-center w-[100%] h-[80px] md:h-[150px]">
                  {/*save button*/}
                  <Modal
                    title="Save to Collection"
                    setShowModal={setShowSuccess}
                    showModal={showSuccess}
                    buttonFn={() => {}}
                    cbuttonFn={() => {
                      setShowQuest(false);
                      // Navigate to a different route
                      navigate("/collection");
                    }}
                    loading={addProfileLoading}
                    cancelBnt={true}
                    element={
                      <>
                        <div className="flex flex-col py-2 [font-family:'lapsus',Helvetica] text-[75px] tracking-[0.82px]">
                          Success!
                        </div>
                      </>
                    }
                  ></Modal>
                  <button
                    className=" "
                    onClick={function (event) {
                      handleSaveContent();
                    }}
                    disabled={
                      descriptionloading || captionloading || updateDataloading
                    }
                  >
                    <div className="relative w-[80px] h-[40px] lg:w-[160px] lg:h-[60px] m-2">
                      <div className="w-[100%] h-[100%] top-10 left-0 bg-[#56c0ee] rounded-[17px]">
                        <div className="flex justify-center items-center relative w-[100%] h-[90%] top-0 left-0 bg-[#9cdbf8] rounded-[17px]">
                          <div className="[font-family:'lapsus',Helvetica] font-bold text-black text-[26px] lg:text-[40px] text-center tracking-[0.82px] leading-[normal] whitespace-nowrap">
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
                      </div>
                    </div>
                  </button>
                  <Modal
                    title="Congrats"
                    setShowModal={setShowQuest}
                    showModal={showQuest}
                    buttonFn={() => {}}
                    cbuttonFn={handleCancelModal}
                    loading={addProfileLoading}
                    cancelBnt={true}
                    element={
                      <>
                        <div className="flex flex-col py-2 [font-family:'lapsus',Helvetica] text-[75px] tracking-[0.82px]">
                          Quest complete!
                        </div>
                      </>
                    }
                  ></Modal>

                  {/*report problem button*/}
                  <Modal
                    title="Report problem"
                    setShowModal={setShowModal}
                    showModal={showModal}
                    buttonFn={submitReport}
                    cbuttonFn={() => {
                      setShowModal(false);
                    }}
                    cancelBnt={true}
                    confirmButton={true}
                    loading={reportLoading}
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
                    className="rounded-lg p-4 cursor-pointer flex flex-col align-middle justify-center items-center"
                    onClick={() => {
                      setShowModal((prevShowModal) => !prevShowModal); // Toggle the state
                    }}
                  >
                    <img
                      className="w-8 lg:w-10"
                      alt="Frame"
                      src="https://c.animaapp.com/NcdooYZJ/img/frame-4.svg"
                    />
                    <div className="[font-family:'gillsans',Helvetica] font-normal text-black text-[14px] lg:text-[20px] text-center tracking-[0] leading-[normal]">
                      Report problem
                    </div>
                  </button>
                </div>
              </div>

              {/*right side image square*/}
              <div className="flex w-[100%] h-[70%] lg:h-[90%] md:justify-center md:items-center">
                <div className="flex flex-col justify-start w-[100%] h-[330px] lg:h-[400px] bg-[#ffffff] rounded-lg">
                  <DragDrop
                    selectedImage={selectedImage}
                    setSelectedImage={setSelectedImage}
                  />
                  {/*generate button*/}
                  <div className="flex justify-center items-center w-[100%] h-[30%]">
                    <button
                      onClick={handleGenerateCaption}
                      disabled={
                        descriptionloading ||
                        captionloading ||
                        updateDataloading
                      }
                    >
                      <div>
                        <div className="w-[180px] h-[53px] lg:w-[250px] lg:h-[60px] xl:w-[320px] xl:h-[70px] left-0 bg-[#53c2ef] rounded-[13px]">
                          <div className="flex justify-center items-center w-[180px] h-[45px] lg:w-[250px] lg:h-[50px] xl:w-[320px] xl:h-[60px] top-0 left-0 bg-[#9cdcf9] rounded-[13px]">
                            <div className="[font-family:'lapsus',Helvetica] font-bold text-black text-[35px] text-center tracking-[1.07px] leading-[normal] whitespace-nowrap">
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
