import React from 'react';
import './About.css';
import ME from '../../assets/images/huba.jpg'
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>
            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About Image" />
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5>
                                Experience
                            </h5>
                            <small>1 Year Experience</small>
                        </article>

                        <article className='about__card'>
                            <FiUsers className='about__icon' />
                            <h5>
                                Clients
                            </h5>
                            <small>50+ Clients</small>
                        </article>

                        <article className='about__card'>
                            <VscFolderLibrary className='about__icon' />
                            <h5>
                                Projects
                            </h5>
                            <small>10+ Completed Projects</small>
                        </article>
                    </div>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, aliquam magnam. Quidem eveniet cum eius dolores, culpa iusto nisi facere beatae harum reprehenderit, nesciunt reiciendis hic omnis ipsam dolorem exercitationem?</p>
                    <a href="#contact" className='btn btn-primary'>Let's talk</a>
                </div>
            </div>
        </section>
    );
}

export default About;
