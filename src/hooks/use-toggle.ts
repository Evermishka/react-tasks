import { useReducer } from "react";

type ActionFn = (val: string | boolean) => string | boolean;
type Action = string | ActionFn;

export const useToggle = (options: (string | boolean)[] = [false, true]) => {
    const [[option], toggle] = useReducer((state, action: Action) => {
    const value = typeof action === "function" ? 
        action(state[0]) : 
        action;
    const index = Math.abs(state.indexOf(value));

    return state.slice(index).concat(state.slice(0, index));
  }, options);

  return [option, toggle] as const;
};