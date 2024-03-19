import React from 'react';


const ImageModal = ({ image, onCloseModal }) => {
  return (
    <div>
      {/* Зображення великого формату */}
      <img src={image.largeImageUrl} alt={image.title} />
      {/* Кнопка для закриття модального вікна */}
      <button onClick={onCloseModal}>Close</button>
    </div>
  );
}

export default ImageModal;
