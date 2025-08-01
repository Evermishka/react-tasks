import { useReducer } from "react";

type Action = 
  | { type: "TOGGLE" }
  | { type: "SET_VALUE"; payload: string };

const reducer = (state: string | boolean, action: Action) => {
    switch (action.type) {
        case "TOGGLE":
            return !state;
        case "SET_VALUE":
            return action.payload;
        default:
            return state;
    }
};

export const useToggle = (values: Array<string | never> = []) => {
    const [value, dispatch] = useReducer(reducer, values.length > 0 ? values[0] : false);

    const toggle = (newValue = '') => {
        if (values.length > 0 && newValue) {
            dispatch({ type: "SET_VALUE", payload: newValue });
        } else if (values.length > 0) {
            const currentIndex = values.indexOf(value as string);
            const nextIndex = (currentIndex + 1) % values.length;
            dispatch({ type: "SET_VALUE", payload: values[nextIndex] });;
        } else {
            dispatch({ type: "TOGGLE" });
        }       
    };

    return [value, toggle] as const;
};