import React from 'react';
import RoleManagement from './RoleManagement';

function AdminPage() {
  return (
    <div>
      <h2>Admin Page</h2>
      <p>Welcome, Admin! You have full access to the system.</p>
      <RoleManagement />
    </div>
  );
}

export default AdminPage;
