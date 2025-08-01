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

type GetStorageValue = (key: string) => string;

const INITIAL_STATE = '';

const getStorageValue: GetStorageValue = (key) => {
    const savedValue = localStorage.getItem(key);

    if (savedValue) {
        const value = JSON.parse(savedValue);
        return value;
    }
    
    localStorage.setItem(key, JSON.stringify(INITIAL_STATE))
    return INITIAL_STATE;
}

export const useLocalStorage: UseLocalStorage = (key) => {
    const [value, setValue] = useState(() => {
        return getStorageValue(key);
    });

    const setItem = (value: string) => {
        setValue(value);
        localStorage.setItem(key, JSON.stringify(value));
    }

    const removeItem = () => {        
        setValue(INITIAL_STATE);
        localStorage.removeItem(key);
    }

    return [value, { setItem, removeItem }]
}