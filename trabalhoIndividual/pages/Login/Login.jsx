import React, { useState } from 'react';
import Input from '../../src/components/Input/Input.jsx';
import Button from '../../src/components/Button/Button.jsx';
import styles from './style.module.css';

function Login({ onLoginSuccess }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (email && password) {
            alert('Login concluído com sucesso!');
            onLoginSuccess();
        } else {
            alert('Por favor, preencha todos os campos.');
        }  
    };

    return (
        <div className={styles.loginContainer}>
            <h1 className={styles.loginTitle}>Login</h1>

            <Input
                type='email'
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                label='Email'
            />

            <Input
                type='password'
                placeholder='Senha'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                label='Senha'
            />

            <Button 
                onClick={handleLogin}
                optionalDisabled={!email || !password}
            >
                Entrar
            </Button>
        </div>
    );
}

export default Login;