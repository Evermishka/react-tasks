import { useState } from "react";
import { useWindowEvent } from "./use-window-event";

export const useWindowScroll = () => {
    const [scroll, setScroll] = useState({ x: window.scrollX, y: window.scrollY });

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