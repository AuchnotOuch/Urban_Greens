import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about">
            <div className="about-content">
                <div className="about-section">
                    <h1>About Urban Green's Cats and Things</h1>
                    <p>
                        Urban Green's Cats and Things is the premier destination for cat lovers who want to blend modern style with the charm of feline companionship.
                        Our curated selection of cat breeds, toys, and accessories is designed to bring joy to both you and your furry friends.
                        Whether you're looking to adopt a new kitten, find the perfect scratching post, or spoil your cat with luxurious accessories,
                        Urban Green's Cats and Things is the place to be.
                    </p>
                </div>
                <div className="owner-section">
                    <img src="/images/catowner.jpg" alt="Owner of Urban Green's Cats and Things" />
                    <div className="owner-info">
                        <h2>Michael Green</h2>
                        <p>Michael has been passionate about cats his entire life. From growing up with a house full of kittens to now owning and operating Urban Green's Cats and Things,
                            his love for these amazing creatures shines through in everything he does. MIchael believes that every cat deserves to live in luxury,
                            and he's dedicated to making that possible for your feline friends.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
