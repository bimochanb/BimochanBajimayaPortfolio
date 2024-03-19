import React from 'react';
import './Contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_b7dx3sl', 'template_qumut3h', form.current, 'szAKk2cfmjdKJNlf8')
            .then(
                (result) => {
                    console.log('SUCCESS!', result.text);
                },
                (error) => {
                    console.log('FAILED...', error.text);
                }
            );
        e.target.reset();
    };

    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>bmochanb@gmail.com</h5>
                        <a href="mailto:bmochanb@gmail.com" target='_blank'>Send a message</a>
                    </article>
                    <article className="contact__option">
                        <RiMessengerLine className='contact__option-icon' />
                        <h4>Messenger</h4>
                        <h5>Bimochan Bajimaya</h5>
                        <a href="https://m.me/bimochanb" target='_blank'>Send a message</a>
                    </article>
                    <article className="contact__option">
                        <BsWhatsapp className='contact__option-icon' />
                        <h4>Whatsapp</h4>
                        <h5></h5>
                        <a href="https://api.whatsapp.com/send?+9779860232480" target='_blank'>Send a message</a>
                    </article>
                </div>

                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Full Name' required />
                    <input type="email" name='email' placeholder='Email' required />
                    <textarea name="message" rows="7" placeholder='Message' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;
