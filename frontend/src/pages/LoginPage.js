import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/auth.css";

const LoginPage = () => {
    return (
        <div className="form-container">
            <div className="form-box">
                <h2>Login</h2>
                <form>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" placeholder="Enter your username" />

                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="Enter your password" />

                    <button type="submit">Login</button>
                </form>
                <p>
                    Don't have an account?{" "}
                    <Link to="/signup" className="form-link">
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;
