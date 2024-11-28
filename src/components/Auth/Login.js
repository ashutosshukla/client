import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../context/AuthContext.js';
import AuthService from '../../services/authService.js';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await AuthService.login(email, password);
      login(response.token);

      // Redirect based on role
      switch (response.role) {
        case 'admin':
          navigate('/admin-dashboard');
          break;
        case 'moderator':
          navigate('/moderator-dashboard');
          break;
        default:
          navigate('/user-dashboard');
      }
    } catch (err) {
      setError(err.message || 'Login failed');
    }
  };

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="card shadow p-4" style={{ maxWidth: '400px', width: '100%' }}>
        <div className="text-center mb-4">
          <h2 className="card-title">Welcome Back</h2>
          <p className="text-muted">Sign in to continue</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <div className="alert alert-danger text-center">{error}</div>}
          <button type="submit" className="btn btn-primary w-100">
            Sign In
          </button>
        </form>
        <div className="text-center mt-3">
          <p className="text-muted">
            Don’t have an account?{' '}
            <a href="/register" className="text-primary">
              Sign up now
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
