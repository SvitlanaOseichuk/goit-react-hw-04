import React from 'react';
import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css'

const ImageGallery = ({ pictures, onImageClick }) => {
  return (
    <ul className={css.picturesList}>
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
