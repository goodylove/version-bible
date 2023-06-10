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
      <div className="mt-[9rem]">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
