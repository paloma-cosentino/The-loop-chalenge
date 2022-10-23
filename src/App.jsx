import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home/index"
import FilmDetails from './pages/filmDescription'
import "./global.css"

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/"  element={<Home/>} />
        <Route path="/filmInfo/:idIMDb" element={<FilmDetails/>}/>
      </Routes>
    </Router>
  )
}

export default App
