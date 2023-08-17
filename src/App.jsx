import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home/Home"
import About from "./components/about/about"
import Vans from "./components/vans/vans"
import VanDetails from "./components/vans/vanDetails"
import Error from "./components/error"
import Layout from "./components/layout/layout"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<Layout/>}>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/vans" element={<Vans />}/>
      <Route path="/vans/:id" element={<VanDetails />}/>
      <Route path="*" element={<Error/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
