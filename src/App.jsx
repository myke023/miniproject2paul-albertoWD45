import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/home/Home'
import Header from './components/header/Header'
import Pokemon from './pages/pokemon/Pokemon'
import PokemonDetails from './pages/pokemon/components/PokemonDetails'
import Footer from './components/footer/Footer'


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
          <Route path="/pokemon/:name" element={<PokemonDetails/>} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App