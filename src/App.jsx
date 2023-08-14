import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home/Home"
import About from "./components/about/about"
import Vans from "./components/vans/vans"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/vans" element={<Vans />}/>

    </Routes>
    </BrowserRouter>
  )
}

export default App
