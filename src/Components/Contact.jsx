import React from 'react';
import './ContactCSS.css'; // Assuming you have a CSS file for styling
const Contact = () => {
    return (
        <section id="contact" data-aos="zoom-in" data-aos-delay="300">
            <h1 data-aos="fade-up">📞 Contact</h1>
            <p data-aos="fade-up"><strong data-aos="fade-up">Name:</strong> Akshat Shukla</p>
            <p data-aos="fade-up"><strong data-aos="fade-up">Location:</strong> Noida, India</p>
            <p data-aos="fade-up"><strong data-aos="fade-up">Phone:</strong> <a href="tel:+918376888676">+91 83768 88676</a></p>
            <p data-aos="fade-up"><strong data-aos="fade-up">Email:</strong> <a href="mailto:aksdec14@gmail.com">aksdec14@gmail.com</a></p>
            <p data-aos="fade-up"><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/akshat-shukla-549746289" target="_blank" rel="noreferrer">
                linkedin.com/in/akshat-shukla-549746289
            </a></p>
        </section>
    );
};

export default Contact;
