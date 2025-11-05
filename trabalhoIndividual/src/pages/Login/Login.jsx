import React, { useState } from 'react';
import Input from '../../components/Input/Input.jsx';
import Button from '../../components/Button/Button.jsx';
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
        <div className={styles.loginPageLayout}>
            <header className={styles.header}>
                <nav className={styles.navContent}>
                    <h1 className={styles.headerTitle}>NetShows!</h1>
                    
                    <div className={styles.navLinks}>
                        <a href="#produtos" className={styles.navLink}>Produtos</a>
                        <a href="#sobre" className={styles.navLink}>Sobre Nós</a>
                        <a href="#contato" className={styles.navLink}>Contato</a>
                    
                        <button 
                            className={styles.logoutButton} 
                            >
                                Sair
                            </button>
                        </div>
                </nav>
            </header>
            <main className={styles.loginMain}>
                <div className={styles.loginContainer}>
                    <h1 className={styles.loginTitle}>Login</h1>

                    <Input
                        type='email'
                        placeholder='Digite seu email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <Input
                        type='password'
                        placeholder='Digite sua senha'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <Button 
                        onClick={handleLogin}
                        optionalDisabled={!email || !password}
                    >
                        Entrar
                    </Button>
                </div>
            </main>

            <footer className={styles.footer}>
                <p className={styles.footerText}>© 2025 NetShows. Todos os direitos reservados.</p>
            </footer>
        </div>
    );
}

export default Login;