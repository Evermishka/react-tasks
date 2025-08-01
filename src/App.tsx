import { useHover } from "./hooks/use-hover";

function App() {
    const { hovered, ref } = useHover<HTMLDivElement>();

    return (
        <div ref={ref}>
            {hovered ? 'На меня навели мышку' : 'Наведи мышкой на меня'}
        </div>
    );
}

export default App
