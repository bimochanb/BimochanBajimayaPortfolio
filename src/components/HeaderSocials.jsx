import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { IoLogoInstagram } from "react-icons/io";


const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://linkedin.com" target='_blank'><BsLinkedin /></a>
            <a href="https://github.com" target='_blank'><FaGithub /></a>
            <a href="https://instagram.com" target='_blank'><IoLogoInstagram /></a>

        </div>
    );
}

export default HeaderSocials;
