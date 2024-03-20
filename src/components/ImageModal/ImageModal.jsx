import React from 'react';
import Modal from 'react-modal';
import css from './ImageModal.module.css'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const ImageModal = ({ isOpen, image, onCloseModal }) => {


  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onCloseModal}
      contentLabel="Image Modal"
      style={customStyles}
    >
      <div>
        <img className={css.image} src={image.urls.regular} alt={image.title} />
        <button onClick={onCloseModal}>Close</button>
      </div>
    </Modal>
  );
}

export default ImageModal;
