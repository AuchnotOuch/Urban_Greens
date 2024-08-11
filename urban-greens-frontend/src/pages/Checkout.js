import React, { useState, useEffect } from 'react';

const Checkout = () => {
    const [cartItems, setCartItems] = useState([]);
    const [orderPlaced, setOrderPlaced] = useState(false);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCartItems(storedCart);
    }, []);

    const handleCheckout = () => {
        // Here, you would normally process payment and order
        setOrderPlaced(true);
        setCartItems([]);
        localStorage.removeItem('cart');
    };

    return (
        <div>
            <h1>Checkout</h1>
            {orderPlaced ? (
                <p>Thank you for your order!</p>
            ) : (
                <>
                    <ul>
                        {cartItems.map(item => (
                            <li key={item._id}>
                                {item.name} - ${item.price} x {item.quantity}
                            </li>
                        ))}
                    </ul>
                    <button onClick={handleCheckout}>Place Order</button>
                </>
            )}
        </div>
    );
};

export default Checkout;
