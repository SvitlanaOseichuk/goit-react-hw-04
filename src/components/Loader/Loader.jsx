import React from 'react'
import { MutatingDots } from 'react-loader-spinner'

const Loader = () => {
  return (
    <MutatingDots
      visible={true}
      height="100"
      width="100"
      color="#c56566"
      secondaryColor="#c56565"
      radius="12.5"
      ariaLabel="mutating-dots-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  )
}

export default Loader