import React from 'react'

const ImageCard = ({pic}) => {
  return (
    <div>
        <img
          width={360}
          src={pic.urls && pic.urls.small} 
          alt={pic.description || 'Unsplash image'} 
        />
    </div>
  )
}

export default ImageCard