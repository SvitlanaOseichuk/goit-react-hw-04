import React from 'react'

const ImageCard = ({pic}) => {
  return (
    <li>
       <img
          width={360}
          src={pic.urls.small} 
          alt={pic.description || 'Unsplash image'} 
        />
   </li>
  )
}

export default ImageCard