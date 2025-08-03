import { useId } from 'react';
import styles from './text-input.module.css';
import type { TextInputProps } from './types';
import { Label } from '../label/label';
import { Description } from '../description/description';
import { InputError } from '../input-error/input-error';
import { Input } from '../input/input';

export const TextInput = ({
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
}: TextInputProps) => {
    const inputId = useId();
    const descriptionId = useId();

    return (
        <div className={styles.wrapper} >
            <Label 
                inputId={inputId} 
                label={label}
                size={size}
                withAsterisk={withAsterisk}
            />
            <Description 
                descriptionId={descriptionId}
                description={description}
                size={size}
            />
            <div className={styles.inputContainer} data-size={size}>
                {icon !== 'none' && <div className={styles.icon} data-size={size}>{icon}</div>}
                <Input
                    inputId={inputId}
                    name={name} 
                    type={type} 
                    placeholder={placeholder} 
                    disabled={disabled}
                    descriptionId={descriptionId}
                    variant={variant}
                    radius={radius}
                    size={size}
                    error={!!error}
                    withIcon={icon !== 'none' ? true : false}
                />
            </div>
            {error && <InputError error={error} size={size} />}
        </div>     
    )
}