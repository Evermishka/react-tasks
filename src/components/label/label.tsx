import styles from './label.module.css';
import type { LabelProps } from './types';

export const Label = ({
    inputId,
    label,
    size,
    withAsterisk
}: LabelProps) => (
    <label 
        className={styles.label} 
        htmlFor={inputId} 
        data-size={size}
        data-required={withAsterisk}
    >
        {label}
    </label>
)