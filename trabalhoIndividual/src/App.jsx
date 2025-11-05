import React, { useState } from 'react';
import Login from './pages/Login/Login.jsx';
import Home from './pages/Home/Home.jsx';
import './App.css';

function App() {
  const [currentScreen, setCurrentScreen] = useState('login');

  const handleLoginSuccess = () => {
    setCurrentScreen('home');
    console.log('Login concluído com sucesso! Mudando para a tela Home.');
  }

  const handleLogout = () => {
    setCurrentScreen('login');
    console.log('Logout realizado! Voltando para a tela de Login.');
  }

  return (
    <div className='App'>
      {currentScreen === 'login' ? (
        <Login onLoginSuccess={handleLoginSuccess} />
      ) : (
        <Home onLogout={handleLogout} />
      )}
    </div>
  )
}

export default App;