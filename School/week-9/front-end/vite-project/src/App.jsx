// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import About from './About';
import Login from './Login';
import PrivateRoute from './PrivateRoute';
import Home from './Home';

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Public route for the login page */}
        <Route path="/login" element={<Login />} />

        {/* Private routes for home and about pages */}
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/about"
          element={
            <PrivateRoute>
              <About />
            </PrivateRoute>
          }
        />

        {/* Default route to redirect to home */}
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </Router>
  );
}
