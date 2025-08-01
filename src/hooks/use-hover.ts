import { useCallback, useEffect, useRef, useState } from "react";

export const useHover = <T extends HTMLElement>() => {
    const [hovered, setHovered] = useState(false);
    const ref = useRef<T | null>(null);

    const handleMouseOver = useCallback(() => {
        setHovered(true);
    }, []);
    
    const handleMouseOut = useCallback(() => {
        setHovered(false);
    }, []);

    useEffect(() => {        
        const element = ref.current;
        if (!element) return;

        element.addEventListener('mouseover', handleMouseOver);
        element.addEventListener('mouseout', handleMouseOut);

        return () => {
            element.removeEventListener('mouseover', handleMouseOver);
            element.removeEventListener('mouseout', handleMouseOut);
        };
    }, [handleMouseOver, handleMouseOut]);

    return { hovered, ref }
}