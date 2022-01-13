import React, {useState} from 'react';
import { RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import './navbar.css'
//import logo from '../../assets/assets/logo.svg'
import logo from '../../assets/logo1.svg'

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className="gpt3__navbar">
                <div className = "gpt3__navbar-links_container">
                <div className="gpt3__navbar-links_container1">
                    <p><a href="#myself">Myself</a></p>
                    <p><a href="#contact">02 Contact</a></p>
                </div>
                <div className="gpt3__navbar-links_logo">
                    <img src= {logo} alt="logo" />
                    </div>
                <div className="gpt3__navbar-links_container2">
                    <p><a href="#projects">04 Projects</a></p>
                    <p><a href="#resume">05 Resume</a></p>
                </div>
                </div>
            
            {/* <div className="gpt3__navbar-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
            </div> */}
            <div className="gpt3__navbar-menu">
                {toggleMenu ? 
                <RiCloseLine color="#fff" size={27} onClick = {() => setToggleMenu (false)}/>
                :
                <RiMenu3Line color="#fff" size={27} onClick = {() => setToggleMenu(true)}
                 />}
            </div>
        </div>
    )
}

export default Navbar
