import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand text-indigo-600 font-weight-bold">
          RBAC System
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {!user ? (
              <>
                <li className="nav-item">
                  <Link to="/login" className="nav-link text-gray-600 hover:text-gray-900">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/register" className="nav-link text-gray-600 hover:text-gray-900">
                    Register
                  </Link>
                </li>
              </>
            ) : (
              <>
                {user.role === 'admin' && (
                  <li className="nav-item">
                    <Link to="/admin-dashboard" className="nav-link text-gray-600 hover:text-gray-900">
                      Admin Dashboard
                    </Link>
                  </li>
                )}
                {user.role === 'moderator' && (
                  <li className="nav-item">
                    <Link to="/moderator-dashboard" className="nav-link text-gray-600 hover:text-gray-900">
                      Moderator Dashboard
                    </Link>
                  </li>
                )}
                <li className="nav-item">
                  <Link to="/user-dashboard" className="nav-link text-gray-600 hover:text-gray-900">
                    User Dashboard
                  </Link>
                </li>
                <li className="nav-item">
                  <button 
                    onClick={handleLogout}
                    className="btn btn-link nav-link text-danger"
                  >
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
