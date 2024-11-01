import React, { useState } from 'react';
import { useUser } from './UserContext';

function Home() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [adminLogin, setAdminLogin] = useState('');
  const { login } = useUser();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (adminLogin === 'xyy@xyy.cc') {
      login(username, 'admin');
      alert('Admin logged in successfully!');
    } else {
      login(username, 'user');
      alert('User logged in successfully!');
    }
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
