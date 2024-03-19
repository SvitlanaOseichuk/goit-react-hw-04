import React from 'react';
import ImageCard from '../ImageCard/ImageCard';

const ImageGallery = ({ pictures, onImageClick }) => {
  return (
    <ul>
      {pictures !== null && Array.isArray(pictures) && (
        pictures.map((pic, index) => (
          <li key={`${pic.id}-${index}`}>
            {/* Додайте обробник події onClick для зображення */}
            <ImageCard pic={pic} onClick={() => onImageClick(pic)} />
          </li>
        ))
      )}
    </ul>
  );
}

export default ImageGallery;
