// Login.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Login.css'; // Import CSS file


const Login = () => {
  // Implement login functionality here
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log(formData);
    };
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" placeholder="Choose a username" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" placeholder="Choose a password" onChange={handleChange} />
        </div>
        <button type="submit">Log In</button>
      </form>
      <Link to="/" className="back-link">Back to Home</Link>
    </div>
  );
};

export default Login;
