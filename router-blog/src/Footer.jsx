import React from 'react'
import './index.css';

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <p className='Footer'>copyright &copy; {year}</p>
  )
}

export default Footer