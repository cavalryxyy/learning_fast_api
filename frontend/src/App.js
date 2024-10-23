import React from 'react';
import { UserProvider, useUser } from './UserContext';
import Home from './Home';
import AdminPage from './AdminPage';
import UserPage from './UserPage';
import RoleManagement from './RoleManagement';

function App() {
  return (
    <UserProvider>
      <Main />
    </UserProvider>
  );
}

function Main() {
  const { user } = useUser();

  if (!user) {
    return <Home />;
  }

  return user.role === 'admin' ? <AdminPage /> : <UserPage />;
}

export default App;
