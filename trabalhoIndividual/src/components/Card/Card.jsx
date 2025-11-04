import styles from './style.module.css';

function Card ({ productName, price, description, imageSrc }) {
    const placeholderImage = '"https://via.placeholder.com/300x200/000000/FFFFFF?text=Produto";';
    return (
        <div className={styles.card}>
            <img
                src={imageSrc || placeholderImage}
                alt={`Imagem do produto ${productName}`}
                className={styles.cardImage}
            />
            <h3 className={styles.cardTitle}>{productName}</h3>
            <p className={styles.cardPrice}>R$ {price}</p>
            <p className={styles.cardDescription}>{description}</p>
        </div>
    );
}

export default Card;