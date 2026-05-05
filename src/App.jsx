import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from "./components/Header"
import Footer from "./components/Footer"

import Hero from "./components/Hero"
import About from "./components/About"
import Services from "./components/Services"
import Portfolio from "./components/Portfolio"

function App() {
  return (
    <BrowserRouter>

      <Header />

      <Routes>

        <Route path="/" element={
          <>
            <Hero />
            <About />
            <Services />
            <Portfolio />
          </>
        } />

        <Route path="/servicos" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/sobre" element={<About />} />

      </Routes>

      <Footer />

    </BrowserRouter>
  )
}

export default App