import { useState } from "react";
import { useWindowEvent } from "./use-window-event";

type WindowScroll = {
    x: number;
    y: number;
};

export const useWindowScroll = () => {
    const [scroll, setScroll] = useState<WindowScroll>({ x: window.scrollX, y: window.scrollY });

    const scrollTo = ({ 
        x = scroll.x, y = scroll.y 
    }:{ 
        x?: number; y?: number 
    }) => {
        window.scrollTo(x, y);
    };

    useWindowEvent("scroll", () => {
        setScroll({ x: window.scrollX, y: window.scrollY });
    });

    return [scroll, scrollTo] as const;
};