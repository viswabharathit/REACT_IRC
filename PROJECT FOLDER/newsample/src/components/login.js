import React, { useState } from 'react';
import "../assets/css/login.css";
import {Link} from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add your authentication logic here
    if (username === 'user' && password === 'password') {
      alert('Login successful!');
    } else {
      alert('Login failed. Please check your username and password.');
    }
  };

  return (
    <div className="logclass">
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
        </label>
        <Link to = "/"><button type="button" onClick={handleLogin}>
          Login
        </button>
        </Link>
      </form>
    </div>
    </div>
  );
};

export default Login;
