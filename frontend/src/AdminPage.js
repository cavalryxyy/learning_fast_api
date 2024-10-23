import React from 'react';
import { Link } from 'react-router-dom';
import RoleManagement from './RoleManagement';

function AdminPage() {
  return (
    <div>
      <h2>Admin Page</h2>
      <p>Welcome, Admin! You have full access to the system.</p>
      <RoleManagement />
      <div style={{ position: 'absolute', top: 10, right: 10 }}>
        <Link to="/calculator">Calculator</Link>
      </div>
    </div>
  );
}

export default AdminPage;
