// LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1>Welcome to Our Website</h1>
      <p>Please sign up or log in to access our services.</p>
      <div className="buttons-container">
        <Link to="/signup" className="button">Sign Up</Link>
        <Link to="/login" className="button">Login</Link>
      </div>
    </div>
  );
};

export default LandingPage;
