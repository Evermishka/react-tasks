import type { InputErrorProps } from "./types";
import styles from './input-error.module.css';

export const InputError = ({
    error,
    size
}: InputErrorProps) => (
    <p className={styles.error} data-size={size}>{error}</p>
)