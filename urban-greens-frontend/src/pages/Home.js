import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
    const navigate = useNavigate();

    const goToShop = () => {
        navigate('/shop');
    };

    return (
        <div className="home">
            <div className="home-content">
                <div className="text-content">
                    <h1>Welcome to Urban Green Cats and Things</h1>
                    <p>Your go-to shop for all things cats.</p>
                    <button onClick={goToShop}>Shop Now</button>
                </div>
                <div className="image-content">
                    <img src="/images/cattree2.jpg" alt="Cat on a tree" />
                </div>
            </div>
        </div>
    );
};

export default Home;
