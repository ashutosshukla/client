// UserDashboard.js
import React, { useState, useEffect, useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import axios from 'axios';

const UserDashboard = () => {
  const { user, token } = useContext(AuthContext);
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/auth/profile', {
          headers: { 
            'Authorization': `Bearer ${token}` 
          }
        });
        setUserProfile(response.data);
      } catch (error) {
        console.error('Error fetching profile', error);
      }
    };

    fetchUserProfile();
  }, [token]);

  return (
    <div className="container my-5">
      <h1 className="text-center text-primary mb-4">User Dashboard</h1>
      {userProfile ? (
        <div className="card shadow-sm">
          <div className="card-body">
            <h5 className="card-title">Profile Details</h5>
            <p className="card-text">
              <strong>Username:</strong> {userProfile.username}
            </p>
            <p className="card-text">
              <strong>Email:</strong> {userProfile.email}
            </p>
            <p className="card-text">
              <strong>Role:</strong> {userProfile.role}
            </p>
          </div>
        </div>
      ) : (
        <p className="text-center text-secondary">Loading your profile...</p>
      )}
    </div>
  );
};

export default UserDashboard;
