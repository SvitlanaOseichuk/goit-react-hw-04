import React from 'react';
import ImageCard from '../ImageCard/ImageCard';

const ImageGallery = ({ pictures, onImageClick }) => {
  return (
    <ul>
      {pictures !== null && Array.isArray(pictures) && (
        pictures.map((pic, index) => (
          <li key={`${pic.id}${index}`}> 
            <ImageCard pic={pic} onImageClick={onImageClick} />
          </li>
        ))
      )}
    </ul>
  );
}

export default ImageGallery;
