import { useId } from 'react';
import styles from './radio-input.module.css';
import type { RadioInputProps } from './types';
import { Label } from '../label/label';
import { InputError } from '../input-error/input-error';
import { Input } from '../input/input';

export const RadioInput = ({
    name,
    value,
    label,
    error = false,
    size = 'md',
    disabled = false,
    withAsterisk = false,
}: RadioInputProps) => {
    const inputId = useId();

    return (
        <div className={styles.wrapper} >
            <div className={styles.inputContainer} data-size={size}>               
                <Label 
                    inputId={inputId} 
                    label={label}
                    size={size}
                    withAsterisk={withAsterisk}
                />
                <Input
                    inputId={inputId}
                    name={name} 
                    type='radio' 
                    value={value}                    
                    disabled={disabled}
                    size={size}
                    error={!!error}
                />
            </div>
            {error && <InputError error={error} size={size} />}
        </div>     
    )
}