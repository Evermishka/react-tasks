import { useState } from "react";

type LocalStorageSetValue = string;
type LocalStorageReturnValue = LocalStorageSetValue | null;

type UseLocalStorage = (key: string) => [
  value: LocalStorageReturnValue,
  {
    setItem: (value: LocalStorageSetValue) => void;
    removeItem: () => void;
  },
];

type GetStorageValue = (key: string) => LocalStorageReturnValue;

const getStorageValue: GetStorageValue = (key) => {
    const savedValue = localStorage.getItem(key);

    if (savedValue) {
        const value = savedValue;
        return value;
    }

    return null;
}

export const useLocalStorage: UseLocalStorage = (key) => {
    const [value, setValue] = useState(() => {
        return getStorageValue(key);
    });

    const setItem = (value: string) => {
        setValue(value);
        localStorage.setItem(key, value);
    }

    const removeItem = () => {        
        setValue('');
        localStorage.removeItem(key);
    }

    return [value, { setItem, removeItem }]
}