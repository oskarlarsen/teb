import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Persons from './pages/Persons'
import Contact from './pages/Contact'
import FlappyGame from './pages/Flappygame'
import './App.css'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/persons" element={<Persons />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/flappy" element={<FlappyGame />} />
      </Routes>
    </Router>
  )
}

export default App
