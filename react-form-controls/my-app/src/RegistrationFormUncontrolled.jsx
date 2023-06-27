import React from 'react';

export default function RegistrationFormUncontrolled() {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const formValues = Object.fromEntries(formData.entries());
    console.log(formValues);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input name="user-name" />
      </label>
      <hr />
      <label>
        Password:
        <input name="password" />
      </label>
      <hr />
      <button name="submit-button">Submit</button>
    </form>
  );
}
