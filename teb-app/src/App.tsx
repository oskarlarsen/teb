import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Persons from './pages/Persons'
import './App.css'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/persons" element={<Persons />} />
      </Routes>
    </Router>
  )
}

export default App
