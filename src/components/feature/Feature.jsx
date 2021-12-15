import React, { useState } from 'react';
import twitter from '../../assets/icons/twitter.svg'
import behance from '../../assets/icons/twitter.svg'
import dribbble from '../../assets/icons/twitter.svg'
import github from '../../assets/icons/twitter.svg'
import instagram from '../../assets/icons/twitter.svg'
import Navbar from '../navbar/Navbar'
import './feature.css'

const feature = () => {
    return (
        <div className="feature__sidebar">
            <div className="feature__sidebar__line">
                <Navbar/>
            </div>
            <div className="feature__sidebar__links">
                <p><a href="#twitter">{twitter}</a></p>
                <p><a href="#behance">{behance}</a></p>
                <p><a href="#dribbble">{dribbble}</a></p>
                <p><a href="#github">{github}</a></p>
                <p><a href="#instagram">{instagram}</a></p>
            </div>
        </div>
    )
}

export default feature
