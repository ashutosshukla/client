// AdminDashboard.js
import React, { useState, useEffect, useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import axios from 'axios';

const AdminDashboard = () => {
  const { user, token } = useContext(AuthContext);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/admin/users', {
          headers: { 
            'Authorization': `Bearer ${token}` 
          }
        });
        setUsers(response.data);
        console.log("user data",users);
        
      } catch (error) {
        console.error('Error fetching users', error);
      }
    };

    fetchUsers();
  }, [token]);

  return (
    <div className="container my-5">
      <h1 className="text-center text-primary mb-4">Admin Dashboard</h1>
      <h2 className="text-secondary mb-4">User Management</h2>
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map(userData => (
              <tr key={userData._id}>
                <td>{userData.username}</td>
                <td>{userData.email}</td>
                <td>{userData.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
