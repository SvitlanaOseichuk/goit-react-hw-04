import React from 'react'
import ImageCard from '../ImageCard/ImageCard'

const ImageGallery = ({pictures}) => {
  return (
    <ul>
      {pictures !== null &&
        Array.isArray(pictures) && (
          pictures.map((pic) => (
            <li key={pic.id}>
              <ImageCard pic={pic} />
            </li>
          ))
        )}
    </ul>
  )
}

export default ImageGallery