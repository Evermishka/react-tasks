import { useId } from 'react';
import styles from './input.module.css';
import type { InputProps } from './types';

export const Input = ({
    name,
    type = 'text',
    placeholder,
    label,
    description,
    error = false,
    variant = 'default',
    radius = 'xs',
    size = 'md',
    disabled = false,
    withAsterisk = false,
    icon = 'none'
}: InputProps) => {
    const inputId = useId();
    const descriptionId = useId();

    return (
        <div className={styles.wrapper} >
            <label 
                className={styles.label} 
                htmlFor={inputId} 
                data-size={size}
                data-required={withAsterisk}
            >
                {label}
            </label>
            <p 
                className={styles.description} 
                id={descriptionId} 
                data-size={size}
            >
                {description}
            </p>
            <div className={styles.inputContainer} data-size={size}>
                {icon !== 'none' && <div className={styles.icon} data-size={size}>{icon}</div>}
                <input 
                    className={styles.input}
                    id={inputId}
                    name={name} 
                    type={type} 
                    placeholder={placeholder} 
                    disabled={disabled}
                    aria-describedby={descriptionId}
                    data-variant={variant}
                    data-radius={radius}
                    data-size={size}
                    data-error={!!error}
                />
            </div>
            {error && <p className={styles.error} data-size={size}>{error}</p>}
        </div>     
    )
}