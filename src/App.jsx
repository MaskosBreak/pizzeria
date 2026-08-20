import { useState } from "react"
import Header from "./components/header"
import Hero from "./components/hero"
import Diferenciais from "./components/Diferenciais";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Hero />
      <Diferenciais/>
    </>
  )
}

export default App
