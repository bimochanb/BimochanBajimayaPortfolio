import React from 'react';
import './Header.css';
import CTA from '../CTA';
import BIMO from '../../assets/images/bimo.png';
import HeaderSocials from '../HeaderSocials';

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Bimochan Bajimaya</h1>
                <h5 className='text-light'>Full Stack Developer</h5>
                <CTA />
                <HeaderSocials />
                <div className="bimo">
                    <img src={BIMO} className='' alt="Bimochan Bajimaya" />
                </div>

                <a href="#contact" className='scroll__down'>Scroll Down</a>
            </div>
        </header>
    );
}

export default Header;


