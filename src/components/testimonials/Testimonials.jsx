import React from 'react';
import './Testimonials.css';
import AVTR1 from '../../assets/images/avatar1.jpg'
import AVTR2 from '../../assets/images/avatar2.jpg'
import AVTR3 from '../../assets/images/avatar3.jpg'
import AVTR4 from '../../assets/images/avatar4.jpg'
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
    {
        avatar: AVTR1,
        name: 'Alisha BB Shrestha',
        review: 'My love for you knows no bounds. You fill my life with joy and laughter every day. Forever grateful for your presence in my life.'
    },
    {
        avatar: AVTR2,
        name: 'Roshan Neupane',
        review: 'Amazing service! Quick and efficient. Highly recommended!'
    },

    {
        avatar: AVTR3,
        name: 'Nischal Dahal',
        review: 'Amazing service! Quick and efficient. Highly recommended!'
    },

    {
        avatar: AVTR4,
        name: 'Subash Rai',
        review: 'Amazing service! Quick and efficient.'
    },
]

const Testimonials = () => {
    return (
        <section id='testimonials'>
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>
            <Swiper className="container testimonials__container"
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {
                    data.map(({ avatar, name, review }, index) => {
                        return (

                            <SwiperSlide key={index} className="testimonial">
                                <div className="client__avatar">
                                    <img src={avatar} alt={name} />
                                </div>
                                <h5 className='client__name'>{name}</h5>
                                <small className="client__review">{review}</small>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    );
}

export default Testimonials;
