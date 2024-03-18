import React from 'react';
import './Services.css';
import { BiCheck } from 'react-icons/bi';

const Services = () => {
    return (
        <section id='services'>
            <h5>What I Offer</h5>
            <h2>Services</h2>

            <div className="container services__container">
                <article className="service">
                    <div className="service__head">
                        <h3>UI/UX Design</h3>
                    </div>
                    <ul className="service__list">
                        <li><BiCheck className="service__list-icon" />
                            <p>Nepal Life Capital</p>
                        </li>
                        <li><BiCheck className="service__list-icon" />
                            <p>Mero Placement</p>
                        </li>
                        <li><BiCheck className="service__list-icon" />
                            <p>KisanArea</p>
                        </li>
                        <li><BiCheck className="service__list-icon" />
                            <p>Strumo</p>
                        </li>
                        <li><BiCheck className="service__list-icon" />
                            <p>Sawari Rental Services</p>
                        </li>
                        <li><BiCheck className="service__list-icon" />
                            <p>QuickCare</p>
                        </li>
                    </ul>
                </article>
                {/* End UI/UX */}
                <article className="service">
                    <div className="service__head">
                        <h3>Web Development</h3>
                    </div>
                    <ul className="service__list">
                        <li><BiCheck className="service__list-icon" />
                            <p>Nepal Life Capital</p>
                        </li>
                        <li><BiCheck className="service__list-icon" />
                            <p>Mero Placement</p>
                        </li>
                        <li><BiCheck className="service__list-icon" />
                            <p>KisanArea</p>
                        </li>
                        <li><BiCheck className="service__list-icon" />
                            <p>Strumo</p>
                        </li>
                        <li><BiCheck className="service__list-icon" />
                            <p>Sawari Rental Services</p>
                        </li>
                        <li><BiCheck className="service__list-icon" />
                            <p>QuickCare</p>
                        </li>
                    </ul>
                </article>
                {/* End Web Development */}
                <article className="service">
                    <div className="service__head">
                        <h3>Content Creation</h3>
                    </div>
                    <ul className="service__list">
                        <li><BiCheck className="service__list-icon" />
                            <p>Nepal Life Capital</p>
                        </li>
                        <li><BiCheck className="service__list-icon" />
                            <p>Mero Placement</p>
                        </li>
                        <li><BiCheck className="service__list-icon" />
                            <p>KisanArea</p>
                        </li>
                        <li><BiCheck className="service__list-icon" />
                            <p>Strumo</p>
                        </li>
                        <li><BiCheck className="service__list-icon" />
                            <p>Sawari Rental Services</p>
                        </li>
                        <li><BiCheck className="service__list-icon" />
                            <p>QuickCare</p>
                        </li>
                    </ul>
                </article>
            </div>
        </section >
    );
}

export default Services;
