import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/navbar.css";

const Navbar = () => {
    console.log("Navbar is rendering");

    return (
        <nav className="navbar">
            <h1>Medi Home</h1>
            <ul className="navbar-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">Signup</Link></li>
                <li><Link to="/chat">Chat</Link></li>
                <li><Link to="/summary">Summary</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
