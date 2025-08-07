import { useViewportSize } from "./hooks/use-vieport-size";

function App() {
    const { size } = useViewportSize();

    return (
        <>
          Width: {size.width}, height: {size.height}
        </>
    );
}

export default App
