import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';

class AuthService {
  async register(username, email, password, role) {
    try {
      const response = await axios.post(`${API_URL}/register`, {
        username,
        email,
        password,
        role
      });
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : new Error('Registration failed');
    }
  }

  async login(email, password) {
    try {
      const response = await axios.post(`${API_URL}/login`, {
        email,
        password
      });
      
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
      }
      
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : new Error('Login failed');
    }
  }

  logout() {
    localStorage.removeItem('token');
  }

  getCurrentUser() {
    return localStorage.getItem('token');
  }
}

export default new AuthService();