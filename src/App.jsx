import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/home/Home'
import Pokemon from './pages/pokemon/Pokemon'
import Header from './components/header/Header'

const App = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route  path="/" element={<Home />} />
          <Route  path="/pokemon" element={<Pokemon/>} />
        </Routes>
      </main>
      <footer>

      </footer>
    </>
  )
}

export default App