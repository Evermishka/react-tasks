import styles from './radio-input-group.module.css';
import type { RadioInputGroupProps } from './types';

export const RadioInputGroup = ({
    title,
    size = 'md',
    withAsterisk = false,
    children
}:  RadioInputGroupProps) => {

    return (        
        <fieldset className={styles.wrapper} >
            <legend 
                className={styles.legend}        
                data-size={size}
                data-required={withAsterisk}
            >
                {title}
            </legend>
            <div className={styles.inputsWrapper}>{children}</div>
        </fieldset>    
    )
}