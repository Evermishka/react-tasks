import { useState } from "react";
import { useWindowEvent } from "./use-window-event";

type ViewportSize = {
    height: number;
    width: number;
}

export const useViewportSize = () => {
    const [size, setSize] = useState<ViewportSize>({
        height: window.innerHeight,
        width: window.innerWidth
    })

    useWindowEvent("resize", () => {
        setSize({
            height: window.innerHeight,
            width: window.innerWidth
        })
    });

    return { size }
}