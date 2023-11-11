import React, { useState } from 'react';
import Modal from 'react-modal';
import { UseAuthenticatedRoute } from 'utils/authRoute';
import Navbar from 'components/navBar';
import { CollectionCard } from 'components/collection';
import { UseCollection } from 'app/state/collection';
import './Collection.css';
import ReactAudioPlayer from 'react-audio-player';


const Collection = () => {
  UseAuthenticatedRoute();

  const collectionData = UseCollection();

  const [isModalOpen, setModalOpen] = useState(false);

  const closeModal = () => {
    setModalOpen(false);
  };

  const modalStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      overflow              : 'visibile'
    }
  };
  return (
    <div>
      <Navbar></Navbar>
      <div className="bg-transparent flex flex-row justify-center w-full h-full">
      <div className="overflow-hidden bg-[url(https://c.animaapp.com/dJl7E6OS/img/group.png)] bg-[100%_100%] w-[1920px] h-[1136.7px] relative">
        <div className="relative w-1440 h-1000 top-[10%] left-[10%] rounded-[74px] flex-row justify-center alignItems-center">
          <div className="relative w-[75%] h-[100%] bg-white rounded-[74px] justify-center items-center">
            <div className="flex flex-col p-8 justify-start items-start relative w-[95%] h-[800px] top-[0px] left-0 bg-transparent rounded-[74px] overflow-y-scroll">
              <div className="relative w-[460px] [font-family:'lapsus',Helvetica] font-bold text-black text-[40px] md:text-[48px] lg:text-[55px] tracking-[0] leading-[normal] whitespace-nowrap ">
                My collection
              </div>
              <div className="h-10">
                <p className="[font-family:'gillsans',Helvetica] font-normal text-black text-[16px] md:text-[25px] lg:text-[30px] tracking-[0] leading-[normal] whitespace-nowrap">
                  Collection of saved images and captions.
                </p>
              </div>
              <div className="">
                  {/* saved images go here */}
                  {collectionData && (
                  <CollectionCard collectionData={collectionData}></CollectionCard>)}
              </div>
            </div>
          </div>
        </div>
        {/*<div className="container">
        <div className="flex justify-center align-middle pb-20 pt-10">
          <div className="collection-container">
            <h1>Collection</h1>
            <button onClick={openModal} className="btn-display-collection">
              <h1>My collection 1 </h1>
              <div className="button-info">
                <p>Collection of images</p>
                <p>More details</p>
              </div>
            </button>
          </div>
        </div>
        </div>*/}
      

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
