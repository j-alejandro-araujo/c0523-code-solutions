import React, { useState } from 'react';

export default function RegistrationFormControlled() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          name="user-name"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </label>
      <hr />
      <label>
        Password:
        <input
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <hr />
      <button name="submit-button">Submit</button>
    </form>
  );
}
