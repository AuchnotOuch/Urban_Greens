import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [message, setMessage] = useState(''); // State for the success message

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await axios.get('/api/products');
            setProducts(response.data);
        };
        fetchProducts();
    }, []);

    const addToCart = (product) => {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const itemExists = cart.find(item => item._id === product._id);
        if (itemExists) {
            cart = cart.map(item =>
                item._id === product._id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        localStorage.setItem('cart', JSON.stringify(cart));

        // Set the message and clear it after a few seconds
        setMessage(`${product.name} added to cart`);
        setTimeout(() => setMessage(''), 3000); // Clear the message after 3 seconds
    };

    return (
        <div>
            {/* Display the message if it exists */}
            {message && <div className="message">{message}</div>}

            <div className="product-grid">
                {products.map(product => (
                    <div key={product._id} className="product-card">
                        <img src={product.imageUrl} alt={product.name} />
                        <h2>{product.name}</h2>
                        <p>${product.price}</p>
                        <button onClick={() => addToCart(product)}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Shop;
