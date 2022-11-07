import React from 'react';
import './FooterStyles.css';
import {FaTwitter, FaInstagram} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer'>
           <h4>#NewYork<text>Forever</text></h4>
            <p> 4 Pennsylvania Plaza, <text>New York, NY 10001</text></p>
            <a href='https://twitter.com/nyknicks'><FaTwitter size={80} style={{ color: '#FFA500'}}/></a> 
            <a href='https://www.instagram.com/nyknicks/?hl=en'><FaInstagram size={80} style={{ color: '#0000FF'}}/></a>
</div>       
  )
}

export default Footer;