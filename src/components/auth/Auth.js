import React, { useState } from 'react';
import './auth.css';

const LoginSignup = () => {
  const [showSignUp, setShowSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formVisible, setFormVisible] = useState(false);

  const toggleSignUp = () => {
    setShowSignUp(!showSignUp);
    setFormVisible(true);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={`login-signup card ${formVisible ? 'visible' : ''}`}>
      <h2>{showSignUp ? 'Sign Up' : 'Login'}</h2>
      <form>
        {showSignUp && (
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" />
          </div>
        )}
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
            />
            <p

            style={{
              cursor: 'pointer',
              
            }}
              className="toggle-password-button"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? 'Hide' : 'Show'}
            </p>
          </div>
        
        {showSignUp && (
          <div className="input-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" id="confirmPassword" />
          </div>
        )}
        <button
          style={{
            cursor: 'pointer'
          }}
          className="login-button"
        >
          {showSignUp ? 'Sign Up' : 'Login'}
        </button>
      </form>
      <p
      style={{
        margin: '10px'
      }}
      >
        {showSignUp ? 'Already have an account? ' : "Don't have an account? "}
        <div
          className="toggle-button"
          style={{
            cursor: 'pointer'
          }}
          onClick={toggleSignUp}
        >
          {showSignUp ? 'Login' : 'Sign Up'}
        </div>
      </p>
    </div>
  );
};

export default LoginSignup;
