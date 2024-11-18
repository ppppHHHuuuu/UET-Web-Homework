import { useSelector } from 'react-redux';
import Sidebar from './Sidebar';

export default function About() {
      // Access the token from Redux store
  const tokenRedux = useSelector((state) => state.auth.token);

  // Access the token from Local Storage
  const tokenLocalStorage = localStorage.getItem('token');
    return (
    <>
        <Sidebar/>
        About Page
        <div>
                <p>Current Token (Redux): {tokenRedux ? tokenRedux : 'No token saved'}</p>
                <p>Current Token (Local Storage): {tokenLocalStorage ? tokenLocalStorage : 'No token saved'}</p>
            </div>
    </>)
}