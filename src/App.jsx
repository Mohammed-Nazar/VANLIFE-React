import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home/Home"
import About from "./components/about/about"
import Vans from "./components/vans/vans"
import VanDetails from "./components/vans/vanDetails"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/vans" element={<Vans />}/>
      <Route path="/vans/:id" element={<VanDetails />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
