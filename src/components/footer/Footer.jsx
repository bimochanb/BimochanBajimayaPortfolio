import React from 'react';
import './Footer.css';
import { FaFacebookF } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer>
            <a href="#" className='footer__logo'>BB</a>
            <ul className='permalinks'>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#experience">Experience</a>
                </li>
                <li>
                    <a href="#services">Services</a>
                </li>
                <li>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                    <a href="#testimonials">Testimonials</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>

            <div className="footer__socials">
                <a href="https://facebook.com/bimochanb"><FaFacebookF /></a>
                <a href="https://instagram.com/bimo_as_337"><FiInstagram /></a>
                <a href="https://linkedin.com/bimochan07"><FaLinkedinIn /></a>
            </div>

            <div className="footer__copyright">
                <small>&copy; Bimochan Bajimaya. All rights reserved</small>
            </div>
        </footer>
    );
}

export default Footer;
