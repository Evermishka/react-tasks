import { useCallback, useEffect, useState } from "react";
import { useWindowEvent } from "./use-window-event";

type WindowScroll = {
    x?: number;
    y?: number;
};

type ScrollTo = (windowScroll: WindowScroll) => void;

export const useWindowScroll = () => {
    const [scroll, setScroll] = useState<WindowScroll>({ x: window.scrollX, y: window.scrollY });

    useEffect(() => {
        setScroll({ x: window.scrollX, y: window.scrollY });
    }, []);

    const scrollTo = useCallback<ScrollTo>(({ 
        x = scroll.x!, y = scroll.y! 
    }) => {
        window.scrollTo(x, y);
    }, [scroll.x, scroll.y]);

    useWindowEvent("scroll", () => {
        setScroll({ x: window.scrollX, y: window.scrollY });
    });

    return [scroll, scrollTo] as const;
};