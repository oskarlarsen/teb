import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Home'
import Persons from './components/Persons'
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
