import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/home/Home'
import Header from './components/Header'
import About from './pages/testFolder/About'

const App = () => {
  return (
   <>
    <header>
      <Header />
    </header>
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </main>
    <footer>

    </footer>
   </>
  )
}

export default App