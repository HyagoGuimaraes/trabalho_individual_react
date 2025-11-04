import React, { useState } from 'react';
import Login from '../pages/Login/Login.jsx';
import Home from '../pages/Home/Home.jsx';
import './App.css';

function App() {
  const [currentScreen, setCurrentScreen] = useState('login');

  const handleLoginSuccess = () => {
    setCurrentScreen('home');
    console.log('Login concluído com sucesso! Mudando para a tela Home.');
  }

  return (
    <div className='App'>
      {currentScreen === 'login' ? (
        <Login onLoginSuccess={handleLoginSuccess} />
      ) : (
        <Home />
      )}
    </div>
  );
}

export default App;