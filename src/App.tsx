import { useViewportSize } from "./hooks/use-vieport-size";

function App() {
    const { height, width } = useViewportSize();

    return (
        <>
          Width: {width}, height: {height}
        </>
    );
}

export default App
