import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'

function App() {

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex items-center justify-center">
        <h1>Nettstedet er under konstant utvikling. Hele tiden liksom</h1>
      </main>
      <Footer />
    </div>
  )
}

export default App
