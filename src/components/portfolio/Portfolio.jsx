import React from 'react';
import './Portfolio.css';
import IMG1 from '../../assets/images/portfolio1.jpg';
import IMG2 from '../../assets/images/portfolio2.jpg';
import IMG3 from '../../assets/images/portfolio3.jpg';
import IMG4 from '../../assets/images/portfolio4.jpg';
import IMG5 from '../../assets/images/portfolio6.jpg';
import IMG6 from '../../assets/images/portfolio5.png';

const data = [
    {
        id: 1,
        title: "QuickCare",
        image: IMG1,
        description: "Doctor Consultation Application",
        github: "https://github.com/BimoChan07/QuickCare-PHP"
    },
    {
        id: 2,
        title: "KisanArea",
        image: IMG2,
        description: "Farmers Assistance Web Application",
        github: "https://github.com/BimoChan07/KisanArea"
    },
    {
        id: 3,
        title: "Strumo",
        image: IMG3,
        description: "Online Guitar Store",
        github: "https://github.com/BimoChan07/Strumo"
    },
    {
        id: 4,
        title: "Nepal Life Capital",
        image: IMG4,
        description: "NLC",
        github: "https://github.com/bimochanb/Nepal-Life-Insurance-Frontend"
    },
    {
        id: 5,
        title: "Hospital Management System",
        image: IMG5,
        description: "HMS",
        github: "https://github.com/BimoChan07/hms"
    },
    {
        id: 5,
        title: "Sawari Rental",
        image: IMG6,
        description: "Sawari Car Rental",
        github: "https://github.com/BimoChan07/sawari"
    }
];


const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>
            <div className="container portfolio__container">
                {
                    data.map(({ id, image, title, description, github }) => {
                        return (
                            < article key={id} className="portfolio__item" >
                                <div className="portfolio__item-img">
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <p>{description}</p>
                                <div className="portfolio__item-cta">
                                    <a href={github} className='btn'>Github</a>
                                    <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
                                </div>
                            </article>
                        )
                    })
                }

            </div>
        </section >
    );
}

export default Portfolio;
