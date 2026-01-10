import { Home } from "./pages/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { NotFound } from "./pages/NotFound"
import { useState } from "react"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}/>
        <Route path="*" element={<NotFound/>}/> // "*" means that if anything besides the pages we defined is entered, send to not found
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
