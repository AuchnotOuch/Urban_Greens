import React from 'react';
import './FAQ.css';

const FAQ = () => {
    return (
        <div>
            <h1>Frequently Asked Questions</h1>
            <div className="faq">
                <h3>What are the store hours?</h3>
                <p>We are open from 9 AM to 6 PM, Monday through Saturday.</p>

                <h3>Do you offer delivery for cat products?</h3>
                <p>Yes, we offer delivery within the city. Please contact us for more details on how we can deliver your cat's favorite products directly to your door.</p>

                <h3>What types of cats and accessories do you offer?</h3>
                <p>We offer a variety of cat breeds for adoption as well as a wide range of accessories, including toys, scratching posts, beds, and grooming tools. We also offer seasonal items to keep your cat entertained all year round.</p>

                <h3>How do I care for my new cat?</h3>
                <p>Each cat adoption comes with a care guide to help you get started. Our blog is also full of helpful tips and articles on cat care. If you have specific questions, our staff is always here to assist you.</p>

                <h3>Can I return a product if my cat doesn't like it?</h3>
                <p>We offer a 7-day satisfaction guarantee on all cat accessories. If your cat isn't satisfied with a product, you can return it for a replacement or store credit within 7 days of purchase.</p>
            </div>
        </div>
    );
};

export default FAQ;
