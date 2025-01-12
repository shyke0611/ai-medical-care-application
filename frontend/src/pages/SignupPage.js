import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/auth.css";

const SignupPage = () => {
    return (
        <div className="form-container">
            <div className="form-box">
                <h2>Sign Up</h2>
                <form>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" placeholder="Enter your username" />

                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="Enter your email" />

                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="Enter your password" />

                    <button type="submit">Sign Up</button>
                </form>
                <p>
                    Already have an account?{" "}
                    <Link to="/login" className="form-link">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignupPage;
