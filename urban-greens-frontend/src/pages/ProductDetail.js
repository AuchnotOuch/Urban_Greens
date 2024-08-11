import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const ProductDetail = ({ product }) => {
    const { addToCart } = useContext(CartContext);

    return (
        <div>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
    );
};

export default ProductDetail;
