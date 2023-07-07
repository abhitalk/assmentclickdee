import React from 'react'
import './App.css'
const Card = ({ title, image, description, }) => {
  return (
    <div className='card'>
    <img src={image} alt=""/>
        <div className='card-body'>
            <div className='title'> {title} </div>
            <div className='description'> {description} </div>
        </div>   
    </div>
  )
}

export default Card