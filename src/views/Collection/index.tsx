import React, { useState } from "react";
import Modal from "react-modal";
import { UseAuthenticatedRoute } from "utils/authRoute";
import Navbar from "components/navBar";
import { CollectionCard } from "components/collection";
import { UseCollection } from "app/state/collection";
import "./Collection.css";
import ReactAudioPlayer from "react-audio-player";
import { Animation } from "components/animationComponent";

  //animation logic
 

const Collection = () => {
  UseAuthenticatedRoute();

  const collectionData = UseCollection();

  const [isModalOpen, setModalOpen] = useState(false);

  const closeModal = () => {
    setModalOpen(false);
  };

  const modalStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      overflow: "visibile",
    },
  };

  const animationComponents = [];

  for (let i = 0; i < 20; i++) {
    const delayValue = 0.0 + 2*i; // Increment delay by 1 second in each iteration
    animationComponents.push(<Animation key={i} 
    delay={delayValue} 
    location ={-500}
    minheight = {200}
    maxheight = {500}/>);
  }
  return (
    <div>
      <Navbar></Navbar>
      <div className="bg-transparent flex flex-row justify-center w-full h-full">
      <div className="overflow-hidden bg-[url(https://c.animaapp.com/dJl7E6OS/img/group.png)] bg-[100%_100%] w-[1920px] h-[1136.7px] relative"
           style = {{zIndex:0}}>
        {animationComponents}
        <div className="flex relative w-[100%] h-[75%] top-[100px] flex-row justify-center items-center">
          <div className="relative w-[80%] h-[100%] bg-white rounded-[74px] justify-center items-center">
            <div className="flex flex-col p-7 md:p-8 justify-start items-start relative w-[100%] h-[800px] bg-transparent rounded-[74px]">
              <div className="relative w-[460px] [font-family:'lapsus',Helvetica] font-bold text-black text-[40px] md:text-[48px] lg:text-[55px] tracking-[0] leading-[normal] whitespace-nowrap ">
                My collection
              </div>
              <div className="h-10">
                <p className="[font-family:'gillsans',Helvetica] font-normal text-black text-[16px] md:text-[25px] lg:text-[30px] tracking-[0] leading-[normal] whitespace-nowrap">
                  Collection of saved images and captions.
                </p>
              </div>
              <div className="h-[100%] w-[100%] overflow-y-scroll">
                  {/* saved images go here */}
                  {collectionData && (
                  <CollectionCard collectionData={collectionData}></CollectionCard>)}
              </div>

            </div>
          </div>
        </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={modalStyles}
        contentLabel="Collection Modal"
      >
        <div className="modal-content">
          {collectionData && (
            <CollectionCard collectionData={collectionData}></CollectionCard>
          )}
        </div>
        <button onClick={closeModal} className="btn-close-modal" >
          Close
        </button>
      </Modal>
      
      </div>
      <div className="collectionplayer">
        <ReactAudioPlayer
          src="/assets/Homepage3.mp3"
          autoPlay={true}
          controls
          loop
        />
      </div>
    </div>
    </div>
  );
};

export default Collection;
