// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import DashBoard from './components/DashBoard';
import LandingPage from './components/LandingPage';
import './App.css';

const App = () => {
  const userDetails = {
    firstName: "Pavan",
    lastName:"Kalyan",
    profilePicture: "https://in.bmscdn.com/iedb/artist/images/website/poster/large/allu-arjun-125-03-10-2016-01-55-06.jpg"
  }
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<DashBoard userDetails={userDetails} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
