import type { DesriptionProps } from "./types";
import styles from "./description.module.css";

export const Description = ({
    descriptionId,
    description,
    size
}: DesriptionProps) => (
    <p 
        className={styles.description} 
        id={descriptionId} 
        data-size={size}
    >
        {description}
    </p>
)