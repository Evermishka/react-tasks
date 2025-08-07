import { useToggle } from "./hooks/use-toggle";

function App() {
    const [option, toggle] = useToggle(['blue', 'orange', 'cyan', 'teal']);

    return (
        <button onClick={() => toggle((option) => !option)}>
            {option}
        </button>
    );
}

export default App
