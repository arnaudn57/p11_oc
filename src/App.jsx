import React from 'react'
import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Flat from './pages/Flat'
import About from './pages/About'
import Error from './pages/Error'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/flat/:id" element={<Flat />} />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
