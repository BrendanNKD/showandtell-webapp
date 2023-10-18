import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { UseAuthenticatedRoute } from 'utils/authRoute';
import Navbar from 'components/navBar';
import { CollectionCard } from 'components/collection';
import Footer from 'components/footer';
import { UseCollection } from 'app/state/collection';
import './Collection.css';

const backgroundStyle = {
  backgroundImage: 'url(https://c.animaapp.com/eyIjESUi/img/group.png)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  width: '100%',
  height: '100vh',
};

const Collection = () => {
  UseAuthenticatedRoute();

  const collectionData = UseCollection();

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

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
const buttonStyles = {
  position: "absolute",
  top: "10px",
  right: "10px"
};

  return (
    <div className="h-fit flex-col justify-center align-middle" style={backgroundStyle}>
      <Navbar></Navbar>
      <div className="container">
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
      </div>
      <Footer></Footer>

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
  );
};

export default Collection;
