import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/home/Home'
import Header from './components/header/Header'
import Pokemon from './pages/pokemon/Pokemon'
import PokemonDetails from './pages/pokemon/components/PokemonDetails'
import Footer from './components/footer/Footer'
import Items from './pages/items/Items'
import About from './pages/about/About'



const App = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route  path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route  path="/pokemon" element={<Pokemon/>} />
          <Route path="/pokemon/:name" element={<PokemonDetails/>} />
          <Route path="/items" element= {<Items />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App