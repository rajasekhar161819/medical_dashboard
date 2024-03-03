// Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Dashboard.css';

const DashBoard = ({ userDetails }) => {
  return (
    <div className="dashboard-container">
      <h2>Welcome to Your Dashboard</h2>
      {userDetails && (
        <div className="user-details">
          <img src={userDetails.profilePicture} alt="Profile" />
          <p><strong>First Name:</strong> {userDetails.firstName}</p>
          <p><strong>Last Name:</strong> {userDetails.lastName}</p>
          {/* Display other user details */}
        </div>
      )}
      <Link to="/">Log out</Link>
    </div>
  );
};

export default DashBoard;
