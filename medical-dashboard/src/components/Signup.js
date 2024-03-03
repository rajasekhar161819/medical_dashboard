// SignIn.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../css/Signup.css';

const SignIn = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    profilePicture: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    address: {
      line1: '',
      city: '',
      state: '',
      pincode: ''
    }
  });
  const [passwordError, setPasswordError] = useState('');
  const [fileError, setFileError] = useState('');

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    if (type === 'file') {
      if (!['image/jpeg', 'image/png', 'image/jpg'].includes(e.target.files[0].type)) {
        setFileError('Please select a valid image file (JPG, PNG, JPEG)');
      } else {
        setFileError('');
      }
    }
    setFormData({ ...formData, [name]: value });
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (name === 'confirmPassword' && formData.password !== value) {
      setPasswordError('Passwords do not match');
    } else {
      setPasswordError('');
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="signin-container">
      <h2>Sign Up</h2>      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" name="firstName" placeholder="Enter your first name" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" name="lastName" placeholder="Enter your last name" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="profilePicture">Profile Picture</label>
          <input type="file" id="profilePicture" name="profilePicture" onChange={handleChange} required />
          {fileError && <span className="error-message">{fileError}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" placeholder="Choose a username" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Enter your email address" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" placeholder="Choose a password" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm your password" onChange={handlePasswordChange} required />
          {passwordError && <span className="error-message">{passwordError}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="line1">Address</label>
          <input type="text" id="line1" name="line1" placeholder="Enter your address (line1, city, state, pincode)" onChange={handleChange} />
        </div>
        <button type="submit">Sign In</button>
      </form>
      <Link to="/" className="back-link">Back to Home</Link>
    </div>
  );
};

export default SignIn;
