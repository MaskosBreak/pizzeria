import { useState } from "react"
import Header from "./components/header"
import Hero from "./components/hero"
import Diferenciais from "./components/Diferenciais";
import Cardapio from "./components/cardapio"
import Sobre from "./components/sobre"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Hero />
      <Diferenciais/>
      <Cardapio />
      <Sobre />
    </>
  )
}

export default App
