import React from 'react'
import './HomeHeader.css'

const HomeHeader = ({text}) => {
  return (
    <div className='home-header-container'>
      <div className="stroke"></div>
      <h3>{text}</h3>
    </div>
  );
}

export default HomeHeader