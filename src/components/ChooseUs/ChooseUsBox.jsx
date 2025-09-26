import React from 'react'

const ChooseUsBox = ({title, description}) => {
  return (
    <div className='mb-5'>
        <h5 className='mb-2 fw-bold'>{title}</h5>
        <p>{description}</p>
    </div>
  )
}

export default ChooseUsBox