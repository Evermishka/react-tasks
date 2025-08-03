import { useRef } from 'react';
import styles from './input.module.css';
import type { InputProps } from "./types";

export const Input = ({
    inputId,
    name,
    type = 'text',
    value = '',
    placeholder = '',
    error,
    variant,
    radius,
    size,
    disabled,
    descriptionId = '',
    withIcon = false
}: InputProps) => {
    const inputRef = useRef(value);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target instanceof HTMLInputElement ) {
            inputRef.current = e.target.value;
        }        
    }

    return (
        <input 
            className={styles.input}
            id={inputId}
            name={name} 
            value={value}
            type={type} 
            placeholder={placeholder} 
            disabled={disabled}
            aria-describedby={descriptionId}
            data-variant={variant}
            data-radius={radius}
            data-size={size}
            data-error={!!error}
            data-icon={withIcon}
            onChange={handleChange}
        />
    )
}