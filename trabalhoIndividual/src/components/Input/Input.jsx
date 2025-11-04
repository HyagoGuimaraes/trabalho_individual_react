import styles from './style.module.css';

function Input({ type, placeholder, value, onChange, label }) {
    return (
        <div className={styles.inputContainer}>
            {label && <label htmlFor={placeholder}>{label}:</label>}
            <input
                type={type}
                id={placeholder}
                className={styles.inputField}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />                
        </div>
    );
}

export default Input;