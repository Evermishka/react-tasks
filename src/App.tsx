import { useWindowScroll } from "./hooks/use-window-scroll";

function App() {
    const [scroll, scrollTo] = useWindowScroll();

    return (
        <div style={{ position: 'fixed', top: 0, left: 0 }}>
            <p>
              Scroll position x: {scroll.x}, y: {scroll.y}
            </p>
            <button onClick={() => scrollTo({ y: 0 })}>Scroll to top</button>
        </div>
    );
}

export default App
