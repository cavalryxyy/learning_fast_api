import React, { useState } from 'react';
import Home from './Home';
import AdminPage from './AdminPage';
import UserPage from './UserPage';

function App() {
  const [userRole, setUserRole] = useState(null);

  return (
    <div className="App">
      {!userRole ? (
        <Home setUserRole={setUserRole} />
      ) : userRole === 'admin' ? (
        <AdminPage />
      ) : (
        <UserPage />
      )}
    </div>
  );
}

export default App;
