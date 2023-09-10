import React from 'react'
import './Navbar.css'
import Logo from '../../assets/img/Euphoria.png'
import Serachicon from '../../assets/img/search.png'
import ArrowDown from '../../assets/img/vector.png'
const Navbar = () => {
  return (
    <div className='nav-container'>
        <div>
            <img src={Logo} alt="" />
        </div>

        <div className={"search-input"}>
            <input type="text" placeholder='Search' />
            <img src={Serachicon} alt="" />
        </div>

        <div className={"nav-right"}>


        <div className={"nav-language"}>
            <p>English(united States)</p>
            <img src={ArrowDown} alt="" />
        </div>

        <div className={"nav-btn"}>
            <button className={"nav-btn-one"}>Login</button>
            <button className={"nav-btn-two"}>Sign Up</button>
        </div>
        </div>
    </div>
  )
}

export default Navbar