import styles from './style.module.css';

function Button({ children, onClick, optionalDisabled = false}) {
    return (
        <button
            className={styles.primaryButton}
            onClick={onClick}
            disabled={optionalDisabled}
        >
            {children}
        </button>
    );
}

export default Button;