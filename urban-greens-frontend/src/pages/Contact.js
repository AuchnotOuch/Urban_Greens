import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Contact.css'

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/contacts', formData);
            console.log('Message sent:', response.data);
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    return (
        <div className='container'>
            <div className='socials'>
                <Link>
                    <i className="fa-brands fa-facebook"></i>
                </Link>
                <Link>
                    <i className="fa-brands fa-twitter"></i>
                </Link>
                <Link>
                    <i className="fa-brands fa-instagram"></i>
                </Link>
                <Link>
                    <i className="fa-brands fa-tiktok"></i>
                </Link>
            </div>
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Your Name" onChange={handleChange} value={formData.name} required />
                <input type="email" name="email" placeholder="Your Email" onChange={handleChange} value={formData.email} required />
                <textarea name="message" placeholder="Your Message" onChange={handleChange} value={formData.message} required></textarea>
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
};

export default Contact;
