import React from 'react';
import { useDispatch } from 'react-redux';
import { login , logout} from '../features/user';

/**
 * Login component for handling user login and logout.
 */
function Login() {
  const dispatch = useDispatch();

  /**
   * Handles the login button click event.
   */
  const handleLogin = () => {
    // Dispatches the login action with user information.
    dispatch(login({ name: "user", age: 20 , email: "user@XXXXXXXXX.com" }));
  }

  /**
   * Handles the logout button click event.
   */
  const handleLogout = () => {
    // Dispatches the logout action.
    dispatch(logout());
  }

  return (
    <>
      {/* Login button */}
      <button className='login' onClick={handleLogin}>login</button>
  
      {/* Logout button */}
      <button className='logout' onClick={handleLogout}>logout</button>
    </>
  )
}

export default Login