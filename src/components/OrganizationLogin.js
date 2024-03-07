import React, { useState } from 'react';

function OrganizationLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false); // To track form submission

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulating a login/signup process
    console.log('Organization Login/Signup Submitted', { username, password });
    // Normally here you'd interact with the backend
    setIsSubmitted(true); // Simulate successful submission
  };

  // Display message upon successful login/registration
  if (isSubmitted) {
    return <div>Thanks for reaching out to us. We will contact you soon.</div>;
  }

  return (
    <div>
      <h2>Login/Register as an Organization</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username/Email:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default OrganizationLogin;
