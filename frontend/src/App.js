import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserProvider, useUser } from './UserContext';
import Home from './Home';
import AdminPage from './AdminPage';
import UserPage from './UserPage';
import Calculator from './Calculator';

function App() {
  return (
    <UserProvider>
      <Router>
        <Main />
      </Router>
    </UserProvider>
  );
}

function Main() {
  const { user } = useUser();

  if (!user) {
    return <Home />;
  }

  return (
    <Routes>
      <Route path="/" element={user.role === 'admin' ? <AdminPage /> : <UserPage />} />
      <Route path="/calculator" element={<Calculator />} />
    </Routes>
  );
}

export default App;
