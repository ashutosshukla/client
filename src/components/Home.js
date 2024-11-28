// Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero bg-primary text-white text-center py-5">
        <div className="container">
          <h1 className="display-4">Welcome to RBAC Authentication System</h1>
          <p className="lead">Seamless Role-Based Access Control for Your Applications</p>
        </div>
      </section>

      {/* Authentication Options */}
      <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
        <div className="card shadow-sm p-4" style={{ width: '100%', maxWidth: '400px' }}>
          <div className="d-grid gap-3">
            <Link 
              to="/login" 
              className="btn btn-primary btn-lg"
            >
              Login
            </Link>
            <Link 
              to="/register" 
              className="btn btn-outline-primary btn-lg"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
