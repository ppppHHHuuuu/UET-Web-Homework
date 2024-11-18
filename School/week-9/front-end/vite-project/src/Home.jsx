import React from 'react';
import Sidebar from './Sidebar';
import { useSelector } from 'react-redux';

const Home = () => {
      // Access the token from Redux store
  const tokenRedux = useSelector((state) => state.auth.token);

  // Access the token from Local Storage
  const tokenLocalStorage = localStorage.getItem('token');
    return (
        <div>
            <Sidebar/>
            <div>
                <p>Current Token (Redux): {tokenRedux ? tokenRedux : 'No token saved'}</p>
                <p>Current Token (Local Storage): {tokenLocalStorage ? tokenLocalStorage : 'No token saved'}</p>
            </div>
        </div>
    );
};

export default Home;