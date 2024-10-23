import React, { useState } from 'react';

function RoleManagement() {
  const [users, setUsers] = useState([
    { username: 'user1', role: 'user' },
    { username: 'user2', role: 'user' },
    { username: 'admin', role: 'admin' }
  ]);

  const handleRoleChange = (username, newRole) => {
    setUsers(users.map(user => 
      user.username === username ? { ...user, role: newRole } : user
    ));
  };

  return (
    <div>
      <h3>Role Management</h3>
      <ul>
        {users.map(user => (
          <li key={user.username}>
            {user.username} - 
            <select 
              value={user.role} 
              onChange={(e) => handleRoleChange(user.username, e.target.value)}
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RoleManagement;
