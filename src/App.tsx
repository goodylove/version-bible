import MobileMenu from "./Components/MobileMenu/index"
import Footer from "./Components/Footer"
import NavBar from "./Components/NavBar"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import "./App.css"

function App() {
  return (
    <div className="App ">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
