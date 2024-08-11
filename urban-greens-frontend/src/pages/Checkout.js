import React, { useState, useEffect } from 'react';
import './Checkout.css';

const Checkout = () => {
    const [cartItems, setCartItems] = useState([]);
    const [orderPlaced, setOrderPlaced] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCartItems(storedCart);
        calculateTotal(storedCart);
    }, []);

    const calculateTotal = (items) => {
        const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
        setTotalPrice(total);
    };

    const handleCheckout = () => {
        // Here, you would normally process payment and order
        setOrderPlaced(true);
        setCartItems([]);
        localStorage.removeItem('cart');
    };

    return (
        <div className="checkout-container">
            <h1>Checkout</h1>
            {orderPlaced ? (
                <p>Thank you for your order!</p>
            ) : (
                <>
                    <ul className="checkout-items">
                        {cartItems.map(item => (
                            <li key={item._id} className="checkout-item">
                                <img src={item.imageUrl} alt={item.name} className="checkout-item-image" />
                                <div className="checkout-item-details">
                                    <h2>{item.name}</h2>
                                    <p>${item.price} x {item.quantity}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="checkout-total">
                        <h2>Total: ${totalPrice.toFixed(2)}</h2>
                    </div>
                    <button onClick={handleCheckout} className="place-order">Place Order</button>
                </>
            )}
        </div>
    );
};

export default Checkout;
