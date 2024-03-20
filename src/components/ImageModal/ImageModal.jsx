import React from 'react';
import Modal from 'react-modal';
import css from './ImageModal.module.css'


const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'black',
    border: 'none',
  },
};

const ImageModal = ({ isOpen, image, onCloseModal }) => {


  return (
    <Modal
      className={css.modal}
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
