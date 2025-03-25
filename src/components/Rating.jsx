import React from 'react'

const Rating = ({rating}) => {
  return (
    <div className='card p-3 mb-3'>
        <h3>{rating.Source}</h3>
        <p>{rating.Value}</p>
    </div>
  )
}

export default Rating