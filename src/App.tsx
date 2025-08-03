import { Signin, Signup } from "./components";
import type { FormData } from "./hooks";

function App() {
    const handleSininSubmit = (data: FormData) => {
        console.log('SigninData', data)
    }

    const handleSinupSubmit = (data: FormData) => {
       console.log('SignupData', data)
    }

    return (
        <>
            <Signin onSubmit={handleSininSubmit}/>
            <Signup onSubmit={handleSinupSubmit}/>
        </>
    )
}

export default App
