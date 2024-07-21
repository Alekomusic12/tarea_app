// src/App.js
import React, { useState } from 'react';
import Login from './components/Login';
import TodoPage from './components/TodoPage';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {!isLoggedIn ? (
        <Login onLogin={() => setIsLoggedIn(true)} />
      ) : (
        <TodoPage />
      )}
    </div>
  );
};

export default App;
