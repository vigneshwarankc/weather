import React, { useState } from 'react';

const LoginPage = ({ onLogin }) => {
 
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
   
  
    const handleLogin = () => {
      if (username=="vky" && password== "123456") {
        onLogin(username);
      } else {
        alert("Please enter valid username and password.");
      }
    };
  
    return (
      <div className="login-container">
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    );
  };
  export default LoginPage;