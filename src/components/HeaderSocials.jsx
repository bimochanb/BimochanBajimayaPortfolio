import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { IoLogoInstagram } from "react-icons/io";


const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://www.linkedin.com/in/bimochan-bajimaya-861b48158/" target='_blank'><BsLinkedin /></a>
            <a href="https://github.com/BimoChan07" target='_blank'><FaGithub /></a>
            <a href="https://www.instagram.com/bimo_as_337/" target='_blank'><IoLogoInstagram /></a>

        </div>
    );
}

export default HeaderSocials;
