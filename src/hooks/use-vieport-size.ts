import { useState } from "react";
import { useWindowEvent } from "./use-window-event";

export const useViewportSize = () => {
    const [height, setHeight] = useState(window.innerHeight);
    const [width, setWidth] = useState(window.innerWidth);

    useWindowEvent("resize", () => {
        setHeight(window.innerHeight);
        setWidth(window.innerWidth);
    });

    return { height, width }
}