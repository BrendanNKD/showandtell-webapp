import React, { useState } from 'react';
import Modal from 'react-modal';
import { UseAuthenticatedRoute } from 'utils/authRoute';
import Navbar from 'components/navBar';
import { CollectionCard } from 'components/collection';
import { UseCollection } from 'app/state/collection';
import './Collection.css';



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
      <div className="bg-transparent flex flex-row justify-center w-full">
      <div className="overflow-hidden bg-[url(https://c.animaapp.com/dJl7E6OS/img/group.png)] bg-[100%_100%] w-[1920px] h-[1136.7px] relative">
        <div className="absolute w-[1452px] h-[920px] top-[50px] left-[250px] rounded-[74px] flex-row justify-center alignItems-center">
          <div className="absolute w-[1452px] h-[920px] top-0 left-0 bg-white rounded-[74px]"/>
          <div className="relative w-[1400px] h-[800px] top-[50px] left-0 bg-transparent rounded-[74px] overflow-y-scroll">
          <div className="absolute w-[460px] top-[29px] left-[149px] [font-family:'lapsus',Helvetica] font-bold text-black text-[64px] tracking-[0] leading-[normal] whitespace-nowrap ">
            My collection
          </div>
          <p className="absolute w-[550px] top-[111px] left-[149px] [font-family:'gillsans',Helvetica] font-normal text-black text-[30px] tracking-[0] leading-[normal] whitespace-nowrap">
            Collection of saved images and captions.
          </p>
          <div className="absolute w-[1145px] h-[548px] top-[120px] left-[145px]">
              {/* saved images go here */}
              {collectionData && (
              <CollectionCard collectionData={collectionData}></CollectionCard>)}
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
    </div>
    </div>
  );
};

export default Collection;
