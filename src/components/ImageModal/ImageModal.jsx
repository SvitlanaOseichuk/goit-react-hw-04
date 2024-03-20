import React from 'react';
import Modal from 'react-modal';

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
        {/* Зображення великого формату */}
        <img src={image.urls.regular} alt={image.title} />
        {/* Кнопка для закриття модального вікна */}
        <button onClick={onCloseModal}>Close</button>
      </div>
    </Modal>
  );
}

export default ImageModal;
