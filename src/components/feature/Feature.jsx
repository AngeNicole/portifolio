import React, { useState } from 'react';
import twitter from '../../assets/icons/twitter.svg'
import behance from '../../assets/icons/behance.svg'
import dribbble from '../../assets/icons/dribbble.svg'
import github from '../../assets/icons/github.svg'
import instagram from '../../assets/icons/instagram.svg'
import Navbar from '../navbar/Navbar'
import Cta from '../cta/CTA';
import './feature.css'

const feature = () => {
    return (
        
        <div className="feature__sidebar">
            <div className="feature__sidebar__links">
                <p><img src= {twitter} alt="" /></p>
                <p><img src={behance} alt="" /></p>
                <p><img src={dribbble} alt="" /></p>
                <p><img src={github} alt="" /></p>
                <p><img src= {instagram} alt="" /></p>
            </div>
            <div className="feature__sidebar__line">
                <Cta />
                
            </div>
            
        </div>
    )
}

export default feature
