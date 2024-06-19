// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import ProfileList from './ProfileList';
import ProfileDetail from './ProfileDetail';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/profile" element={<ProfileList />} />
        <Route path="/profile/:id" element={<ProfileDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
