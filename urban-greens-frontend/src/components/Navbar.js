import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <NavLink to="/" activeclassame="active-link">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" activeclassname="active-link">About</NavLink>
                </li>
                <li>
                    <NavLink to="/shop" activeclassname="active-link">Shop</NavLink>
                </li>
                <li>
                    <NavLink to="/blog" activeclassname="active-link">Blog</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" activeclassname="active-link">Contact</NavLink>
                </li>
                <li>
                    <NavLink to="/faq" activeclassname="active-link">FAQ</NavLink>
                </li>
                <li>
                    <NavLink to="/cart" activeclassname="active-link">Cart</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
