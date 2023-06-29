import React, { useState } from 'react';
import './ValidatedInput.css';

export default function ValidatedInput() {
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(false);

  const handleChange = (event) => {
    const input = event.target.value;
    setPassword(input);
    setIsValid(input.length >= 8);
  };

  return (
    <div className="validated-input">
      <label className="password-text">Password</label>
      <input
        type="password"
        value={password}
        onChange={handleChange}
        className={isValid ? 'valid' : 'invalid'}
      />
      {isValid ? (
        <i className="fa-solid fa-check"></i>
      ) : (
        <i className="fa-solid fa-x"></i>
      )}
      {password.length > 0 && !isValid && password.length < 8 && (
        <div className="error-message">Your password is too short</div>
      )}
      {password.length === 0 && (
        <div className="error-message">A password is required</div>
      )}
    </div>
  );
}
