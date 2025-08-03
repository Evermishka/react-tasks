import styles from './input.module.css';
import type { InputProps } from "./types";

export const Input = ({
    inputId,
    name,
    type,
    placeholder,
    error,
    variant,
    radius,
    size,
    disabled,
    descriptionId,
    withIcon = false
}: InputProps) => (
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
        data-icon={withIcon}
    />
)