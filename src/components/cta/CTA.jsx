import React from 'react'
import './cta.css'
import Navbar from '../navbar/Navbar'
import logo from '../../assets/logo1.svg'

const Cta = () => {
    return (
        <div className="center__rect">
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
    )
}

export default Cta
