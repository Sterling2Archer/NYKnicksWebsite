import React from 'react';
import './MainVideoStyles.css';
import knicksLogo from '../assets/NewYorkKnicksLogo-zyhLXOdc2Oo-1080p-1657080387358.mp4';

const MainVideo = () => {
  return (
    <div className='hero'>
        <video autoPlay loop muted id='video'>
            <source src={knicksLogo} type='video/mp4' />
        </video>
    </div>
  )
}

export default MainVideo;