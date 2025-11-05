import React from 'react';
import Card from '../../components/Card/Card.jsx';
import styles from './style.module.css';

function Home(onLogout) {
    const produto1 = {
        nome: 'Camiseta Nike Dry-FIT Academy Masculina',
        preco: '129,90',
        descricao: 'Camiseta esportiva de alta performance, ideal para treinos intensos e atividades físicas ao ar livre. Feita com tecido respirável que mantém o corpo seco e confortável.',
        imagem: '../../../src/assets/camiseta-dry-fit.jpg'
    };

    const produto2 = {
        nome: 'Tênis de Corrida Puma Velocity Nitro 3 Fade Masculino',
        preco: '899,90',
        descricao: 'Tênis de corrida leve e amortecido, projetado para oferecer máximo conforto e suporte durante suas corridas diárias. Solado com tecnologia de absorção de impacto.',
        imagem: '../../../src/assets/tenis-de-corrida=velocity.jpg'
    }

    return (
        <div className={styles.homeLayout}>
            <header className={styles.header}>
                <nav className={styles.navContent}>
                    <h1 className={styles.headerTitle}>NetShows!</h1>

                    <div className={styles.navLinks}>
                        <a href="#produtos" className={styles.navLink}>Produtos</a>
                        <a href="#sobre" className={styles.navLink}>Sobre Nós</a>
                        <a href="#contato" className={styles.navLink}>Contato</a>

                        <button 
                            className={styles.logoutButton} 
                            onClick={onLogout}>
                            Sair
                        </button>
                    </div>
                </nav>
            </header>
            <main className={styles.productList}>
                <h2>Produtos em Destaque</h2>

                <div className={styles.cardContainer}>

                    <Card
                        productName={produto1.nome}
                        price={produto1.preco}
                        description={produto1.descricao}
                        imageSrc={produto1.imagem}
                    />

                    <Card
                        productName={produto2.nome}
                        price={produto2.preco}
                        description={produto2.descricao}
                        imageSrc={produto2.imagem}
                    />    
                </div>
            </main>
            <footer className={styles.footer}>
                <p>© 2025 NetShows. Todos os direitos reservados.</p>
            </footer>
        </div>
    );
}

export default Home;