import React from 'react'
import css from './ImageCard.module.css'

const ImageCard = ({pic, onImageClick}) => {
  return (
    <div>
        <img 
          className={css.image}
          onClick={() => onImageClick(pic)} 
          width={360}
          src={pic.urls && pic.urls.small} 
          alt={pic.description || 'Unsplash image'} 
        />
    </div>
  )
}

export default ImageCard