import React from 'react'

const LoadMoreBar = ({ onClick }) => {
  return (
    <>
      {onClick && (
        <button onClick={onClick}>
          Load more
        </button>
      )}
    </>
  )
}


export default LoadMoreBar