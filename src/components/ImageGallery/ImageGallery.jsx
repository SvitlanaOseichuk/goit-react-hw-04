import React from 'react'
import ImageCard from '../ImageCard/ImageCard'

const ImageGallery = ({pictures}) => {
  return (
    <ul>
      {pictures !== null &&
        Array.isArray(pictures) &&
        pictures.length > 0 ? (
          pictures.map((pic) => (
            <li key={pic.id}>
              <ImageCard pic={pic} />
            </li>
          ))
        ) : (
          <p>No images found</p>
        )}
    </ul>
  )
}

export default ImageGallery