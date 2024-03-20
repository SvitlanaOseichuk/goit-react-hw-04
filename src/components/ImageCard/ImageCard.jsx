import React from 'react'

const ImageCard = ({pic, onImageClick}) => {
  return (
    <div>
        <img 
          onImageClick={() => onImageClick(pic)} 
          width={360}
          src={pic.urls && pic.urls.small} 
          alt={pic.description || 'Unsplash image'} 
        />
    </div>
  )
}

export default ImageCard