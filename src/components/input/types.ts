export type InputProps = {
    inputId: string;
    name: string;
    type: HTMLInputElement["type"];
    value?: string;
    placeholder?: string;
    error?: string | boolean;
    variant?: string;
    radius?: string;
    size?: string;
    disabled?: boolean;
    descriptionId?: string;
    withIcon?: boolean;
}