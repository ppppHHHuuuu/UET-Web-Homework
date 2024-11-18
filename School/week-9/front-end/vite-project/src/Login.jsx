import React, { useState } from 'react';
import Sidebar from "./Sidebar";
import { useDispatch, useSelector } from 'react-redux';
import { saveToken } from './features/tokenSlice';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  // Access the token from Redux store
  const tokenRedux = useSelector((state) => state.auth.token);

  // Access the token from Local Storage
  const tokenLocalStorage = localStorage.getItem('token');

  // Register function
  const register = async () => {
    try {
      // Log username and password for debugging
      console.log("username", username);
      console.log("password", password);

      // Make POST request to register endpoint
      const response = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });

      // Check if the request was successful
      if (!response.ok) {
        throw new Error('Registration failed');
      }

      // Parse the JSON response
      const data = await response.json();

      // Save the token to Local Storage and Redux store
      localStorage.setItem('token', data.usernameEncoded);
      dispatch(saveToken(data.usernameEncoded));

      // Inform the user of successful registration
      alert("Thanks for registering!");
    } catch (error) {
      console.error("Error during registration:", error);
      alert("An error occurred during registration.");
    }
  };

  // Login function
  const login = async () => {
    try {
      // Get the token from Local Storage
      const token = localStorage.getItem('token');

      if (!token) {
        alert("No token found. Please register first.");
        return;
      }

      // Make POST request to login endpoint
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token })
      });

      // Check if the request was successful
      if (!response.ok) {
        throw new Error('Login failed');
      }

      // Parse the JSON response
      const data = await response.json();

      // Inform the user of the login message
      alert(data.message);
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred during login.");
    }
  };

  return (
    <div>
      <Sidebar />

      <div>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={register}>Register</button>
        <button onClick={login}>Login</button>
      </div>

      <div>
        <p>Current Token (Redux): {tokenRedux ? tokenRedux : 'No token saved'}</p>
        <p>Current Token (Local Storage): {tokenLocalStorage ? tokenLocalStorage : 'No token saved'}</p>
      </div>
    </div>
  );
}
