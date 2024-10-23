import React, { useState } from 'react';

function Home() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [newAccount, setNewAccount] = useState('');
  const [adminLogin, setAdminLogin] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="home">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">User Name:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">User Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="newAccount">Register New Account:</label>
          <input
            type="text"
            id="newAccount"
            value={newAccount}
            onChange={(e) => setNewAccount(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="adminLogin">Log in as Admin:</label>
          <input
            type="text"
            id="adminLogin"
            value={adminLogin}
            onChange={(e) => setAdminLogin(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Home;
