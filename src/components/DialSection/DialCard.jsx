import React from 'react'

const DialCard = ({image, title, description}) => {
  return (
    <div className='p-4 text-center shadow-sm rounded-4 h-100' style={{backgroundColor: "#f7f7f7"}}>
        <img src={image} alt="" />
        <h5 className='mt-3'>{title}</h5>
        <p className='mb-0'>{description}</p>
    </div>
  )
}

export default DialCard