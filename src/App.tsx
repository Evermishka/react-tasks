import { Signin, type SigninData } from "./components";

function App() {

  const handleSininSubmit = (data: SigninData) => {
    console.log('SigninData', data)
  }

  return (
    <>
      <Signin onSubmit={handleSininSubmit}/>
    </>
  )
}

export default App
