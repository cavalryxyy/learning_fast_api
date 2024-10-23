import React, { useState, useEffect } from 'react';
import axios from 'axios';

function RoleManagement() {
  const [users, setUsers] = useState([
    { username: 'user1', role: 'user' },
    { username: 'user2', role: 'user' },
    { username: 'admin', role: 'admin' }
  ]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:8080/auth/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleRoleChange = async (username, newRole) => {
    try {
      await axios.put('http://localhost:8080/auth/users', {
        username,
        new_role: newRole,
      });
      fetchUsers();  // Refresh the user list
    } catch (error) {
      console.error('Error updating user role:', error);
    }
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
