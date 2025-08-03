import type { JSX } from "react";

export type TextInputProps = {
    name: string;
    type: HTMLInputElement["type"];
    placeholder: string;
    label: string;
    description: string;
    error?: string | boolean;
    variant?: string;
    radius?: string;
    size?: string;
    disabled?: boolean;
    withAsterisk?: boolean;
    icon?: string | JSX.Element;
}