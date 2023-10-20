import {
  UseAuthenticatedRoute,
} from "utils/authRoute";
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
import { useNavigate } from "react-router-dom";
import { Modal } from "components/modal";
import { useAddProfile, useSetProfile } from "app/hooks/useAccount";

export const GenerateEmpty = () => {
  // Redirect user to profile if they are authenticate
  // const profile = UseProfile();
  UseAuthenticatedRoute();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [imageCaption, setImageCaption] = useState<string | null>(null);
  const [imageDescription, setImageDescription] = useState<string | null>(null);
  const profile = UseProfile();
  const profileIndex = UseProfileIndex();
  const { generate, caption, captionloading } = useGenerateCaption();
  const { update, updateDataloading } = useSaveCollection();
  const { completion, description, descriptionloading } =
    useOpenAiCompletion();
  
  const navigate = useNavigate();

  const { addNewProfile, addProfileLoading, isaddProfileSuccess } =
    useAddProfile();

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

  const emptyClick = () => {
    // console.log(index);
    // dispatch(setProfile(index));
  };



  //report function stuf
  const [showModal, setShowModal] = useState(false);
  

  return (
    <div className="bg-transparent flex flex-row justify-center w-full">
      <div className="h-fit flex-col justify-center align-middle">
      <Navbar />
      <div className="overflow-hidden bg-[url(https://c.animaapp.com/xYMQ48TT/img/group.png)] bg-[100%_100%] w-[1920px] h-[1136.7px] relative">
         <button onClick = {() => {navigate("/GenerateChoose");}}>
        <img
          className="absolute w-[77px] h-[83px] top-[145px] left-[48px]"
          alt="Frame"
          src="https://c.animaapp.com/xYMQ48TT/img/frame.svg"
        />
        </button>
        {/*left side image square*/}
        <div className="absolute w-[1034px] h-[821px] top-[145px] left-[166px] bg-[url(https://c.animaapp.com/xYMQ48TT/img/vector-4.svg)] bg-[100%_100%]">
          <div className="absolute w-[1034px] h-[92px] top-0 left-0 bg-[#F078AE] p-3 rounded-t-3xl">
            <div className="absolute w-[162px] top-[19px] left-[436px] [font-family:'lapsus',Helvetica] font-bold text-black text-[49px] tracking-[1.23px] leading-[normal] whitespace-nowrap">
              Animals
            </div>
            <img
              className="absolute w-[64px] h-[56px] top-[20px] left-[35px]"
              alt="Frame"
              src="https://c.animaapp.com/xYMQ48TT/img/frame-4.svg"
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
          {/*Description box*/}
          <div className="absolute w-[674px] h-[130px] top-[571px] left-[180px] bg-[#e2e3e4] p-3 rounded-[10px]">
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
          </div>
          </div>
          {/*text to speech button*/}
          <img
            className="absolute w-[77px] h-[83px] top-[722px] left-[537px]"
            alt="Group"
            src="https://c.animaapp.com/xYMQ48TT/img/group-2@2x.png"
          />
          {/*save button*/}
          <button 
            className="absolute w-[115px] h-[70px] top-[727px] left-[386px]"
            onClick={handleSaveContent}
            disabled={
              descriptionloading || captionloading || updateDataloading
            }>
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
            title ="Report problem"
            setShowModal={setShowModal}
            showModal={showModal}
            buttonFn={emptyClick}
            loading={addProfileLoading}
            element={
             <>
                  
                  <div className="flex flex-col py-2">
                  <form>
                   <label style={{ fontSize: 32, letterSpacing:0.2}} className = "[font-family:'gillsans',Helvetica]">
                   <span> Check all that apply: </span>
                   <br />
                   </label>

                    <label style={{ fontSize: 32, letterSpacing:0.2}} className = "[font-family:'gillsans',Helvetica]">
                      <input type="checkbox"
                       className="
                       peer relative appearance-none shrink-0 w-6 h-6 border-2 border-blue-200 rounded-sm mt-1 bg-white
                       focus:outline-none focus:ring-offset-0 focus:ring-1 focus:ring-blue-100
                       checked:bg-blue-500 checked:border-0
                       disabled:border-steel-400 disabled:bg-steel-400
                       [font-family:'gillsans',Helvetica]"
                       
                       name="inaccurate captions" />
                       <span> Inaccurate captions </span>
                    <br />
                    </label>
                    <label style={{ fontSize: 32, letterSpacing:0.2 }} className = "[font-family:'gillsans',Helvetica]">
                      <input type="checkbox"
                       className="
                       peer relative appearance-none shrink-0 w-6 h-6 border-2 border-blue-200 rounded-sm mt-1 bg-white
                       focus:outline-none focus:ring-offset-0 focus:ring-1 focus:ring-blue-100
                       checked:bg-blue-500 checked:border-0
                       disabled:border-steel-400 disabled:bg-steel-400
                       [font-family:'gillsans',Helvetica]"
                       name="sound problem" />
                        <span> Sound problem </span> 
                       <br />
                    </label>
                    <label style={{ fontSize: 32, letterSpacing:0.2 }} className = "[font-family:'gillsans',Helvetica]">
                      <input type="checkbox"
                       className="
                       peer relative appearance-none shrink-0 w-6 h-6 border-2 border-blue-200 rounded-sm mt-1 bg-white
                       focus:outline-none focus:ring-offset-0 focus:ring-1 focus:ring-blue-100
                       checked:bg-blue-500 checked:border-0
                       disabled:border-steel-400 disabled:bg-steel-400
                       [font-family:'gillsans',Helvetica]"
                       name="sound problem" />
                       <span> Something else: </span>
                       <br />
                    </label>
                    
                    <textarea 
                      className="
                      appearance-none shrink-0 w-150 h-70 border-2 border-blue-200 rounded-sm mt-1 bg-white
                      disabled:border-steel-400 disabled:bg-steel-400
                      [font-family:'gillsans',Helvetica] "
                      rows={5} 
                      cols={35}
                      placeholder={"Let us know what's wrong"}
                    />
                      
                  </form>
                  </div>
                  {/*

                  <div className="flex flex-col py-2">
                    <div className="relative w-[222px] h-[86px]">
                      <div className="absolute w-[222px] h-[78px] top-[7px] left-0 bg-[#67ac44] rounded-[30px]" />
                      <div className="absolute w-[222px] h-[78px] top-0 left-0 bg-[#84c455] rounded-[30px]" />
                      <div className="absolute w-[142px] top-[15px] left-[39px] [font-family:'Lapsus_Pro-Bold',Helvetica] font-bold text-black text-[48px] tracking-[1.68px] leading-[normal] whitespace-nowrap">
                        Submit
                      </div>
                    </div>
                  </div>

                    <div className="absolute w-[344px] top-[5px] left-[78px] [font-family:'Gill_Sans_Infant_Std-Regular',Helvetica] font-normal text-black text-[40px] tracking-[0.40px] leading-[normal] whitespace-nowrap">
                      Inaccurate captions
                    </div>
                  </div>
                  <div className="flex flex-col py-2">
                    <div className="absolute w-[50px] h-[50px] top-0 left-0 bg-[#d9d9d9]" />
                    <div className="absolute w-[344px] top-[5px] left-[78px] [font-family:'Gill_Sans_Infant_Std-Regular',Helvetica] font-normal text-black text-[40px] tracking-[0.40px] leading-[normal] whitespace-nowrap">
                      Sound problem
                    </div>
                  </div>
                  <div className="flex flex-col py-2">
                    <div className="absolute w-[50px] h-[50px] top-0 left-0 bg-[#d9d9d9]" />
                    <div className="absolute w-[344px] top-[5px] left-[78px] [font-family:'Gill_Sans_Infant_Std-Regular',Helvetica] font-normal text-black text-[40px] tracking-[0.40px] leading-[normal] whitespace-nowrap">
                      Something else:
                    </div>
                  </div>
                  <div className="flex flex-col py-2">
                    Check all that apply
                  </div>
                  <div className="flex flex-col bg-[#e2e3e4]" />
                  <p className="absolute w-[384px] top-[662px] left-[759px] [font-family:'Inter',Helvetica] font-normal text-black text-[21px] tracking-[0] leading-[normal]">
                    Let us know what’s going on
                  </p>
                  
                */}
                  </>
          } ></Modal>           
          < button 
              className="rounded-lg p-4 cursor-pointer flex flex-col align-middle justify-center mb-10"
              onClick={() => {
                setShowModal((prevShowModal) => !prevShowModal); // Toggle the state
              }}> 
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
              }>
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
            {/*
            <img
              className="absolute w-[72px] h-[51px] top-[89px] left-[194px]"
              alt="Frame"
              src="https://c.animaapp.com/xYMQ48TT/img/frame-5.svg"
            />
            <img
              className="w-[315px] h-[41px] top-[158px] left-[73px] absolute object-cover"
              alt="Image"
              src="https://c.animaapp.com/xYMQ48TT/img/image-64-1@2x.png"
            />
            */}
          </div>
        </div>
        {/*
        <div className="absolute w-[1920px] h-[96px] -top-px left-px bg-white">
          <img
            className="absolute w-[81px] h-[81px] top-[8px] left-[1776px]"
            alt="Frame"
            src="https://c.animaapp.com/xYMQ48TT/img/frame-3.svg"
          />
          <img
            className="absolute w-[38px] h-[48px] top-[30px] left-[1701px]"
            alt="Group"
            src="https://c.animaapp.com/xYMQ48TT/img/group-1@2x.png"
          />
          <div className="absolute w-[238px] h-[59px] top-[25px] left-[492px]">
            <div className="relative w-[236px] h-[59px]">
              <div className="bg-[#66ae45] absolute w-[236px] h-[53px] top-[6px] left-0 rounded-[13px]" />
              <div className="bg-[#84c455] absolute w-[236px] h-[53px] top-0 left-0 rounded-[13px]" />
              <div className="absolute w-[207px] top-[6px] left-[14px] [font-family:'lapsus',Helvetica] font-bold text-black text-[43px] text-center tracking-[1.07px] leading-[normal] whitespace-nowrap">
                Dashboard
              </div>
            </div>
          </div>
          <div className="absolute w-[238px] h-[59px] top-[25px] left-[1039px]">
            <div className="relative w-[236px] h-[59px]">
              <div className="bg-[#facd0a] absolute w-[236px] h-[53px] top-[6px] left-0 rounded-[13px]" />
              <div className="bg-[#fae55a] absolute w-[236px] h-[53px] top-0 left-0 rounded-[13px]" />
              <div className="absolute w-[207px] top-[6px] left-[14px] [font-family:'lapsus',Helvetica] font-bold text-black text-[43px] text-center tracking-[1.07px] leading-[normal] whitespace-nowrap">
                Collection
              </div>
            </div>
          </div>
          <div className="absolute w-[238px] h-[59px] top-[25px] left-[1326px]">
            <div className="relative w-[236px] h-[59px]">
              <div className="bg-[#e78324] absolute w-[236px] h-[53px] top-[6px] left-0 rounded-[13px]" />
              <div className="bg-[#fcb315] absolute w-[236px] h-[53px] top-0 left-0 rounded-[13px]" />
              <div className="absolute w-[207px] top-[6px] left-[14px] [font-family:'lapsus',Helvetica] font-bold text-black text-[43px] text-center tracking-[1.07px] leading-[normal] whitespace-nowrap">
                Playground
              </div>
            </div>
          </div>
          <div className="absolute w-[207px] h-[59px] top-[25px] left-[781px]">
            <div className="relative w-[205px] h-[59px]">
              <div className="absolute w-[205px] h-[53px] top-[6px] left-0 bg-[#53c2ef] rounded-[13px]" />
              <div className="absolute w-[205px] h-[53px] top-0 left-0 bg-[#9cdcf9] rounded-[13px]" />
              <div className="absolute w-[180px] top-[6px] left-[12px] [font-family:'lapsus',Helvetica] font-bold text-black text-[43px] text-center tracking-[1.07px] leading-[normal] whitespace-nowrap">
                Generate
              </div>
            </div>
          </div>
          <img
            className="absolute w-[219px] h-[37px] top-[41px] left-[70px]"
            alt="Frame"
            src="https://c.animaapp.com/xYMQ48TT/img/frame-2.svg"
          />
        </div>
  */}
      </div>
      <Footer />
      </div>
      
    </div>
  );
};