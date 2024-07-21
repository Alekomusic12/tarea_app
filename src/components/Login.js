// src/components/Login.js
import React, { useState } from 'react';
import './LoginPage.css'; // Asegúrate de que la ruta sea correcta

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'admin' && password === 'admin') {
      onLogin();
    } else {
      alert('Usuario o clave incorrectos');
    }
  };

  return (
    <div className="login-container">
      <form>
        <h2>Iniciar Sesión</h2>
        <input 
          type="text" 
          placeholder="Usuario" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="Clave" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <button onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
};

export default Login;

