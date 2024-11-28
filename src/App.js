import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/Common/PrivateRoute';

// Import components
import Login from './components/Auth/Login.js';
import Register from './components/Auth/Register.js';
import AdminDashboard from './components/Dashboard/AdminDashboard.js';
import UserDashboard from './components/Dashboard/UserDashboard.js';
import ModeratorDashboard from './components/Dashboard/ModeratorDashboard.js';
import Navbar from './components/Common/Navbar.js';
import Home from './components/Home.js';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            
            {/* Protected Routes */}
            <Route 
              path="/admin-dashboard" 
              element={
                <PrivateRoute roles={['admin']}>
                  <AdminDashboard />
                </PrivateRoute>
              } 
            />
            <Route 
              path="/user-dashboard" 
              element={
                <PrivateRoute roles={['user', 'admin', 'moderator']}>
                  <UserDashboard />
                </PrivateRoute>
              } 
            />
            <Route 
              path="/moderator-dashboard" 
              element={
                <PrivateRoute roles={['moderator', 'admin']}>
                  <ModeratorDashboard />
                </PrivateRoute>
              } 
            />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;