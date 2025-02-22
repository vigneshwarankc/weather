import React, { useState, useEffect } from 'react';
import './App.css';
import HomePage from './components/Homepage';
import LoginPage from './components/Loginpage';








const App = () => {
  const [username, setUsername] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (username) => {
    setUsername(username);
    setLoggedIn(true);
  };

  return (
    <div className="App">
      {!loggedIn ? (
        <LoginPage onLogin={handleLogin} />
      ) : (
        <HomePage username={username} />
      )}
    </div>
    
  );
};

export default App;
