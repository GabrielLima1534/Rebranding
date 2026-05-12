import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from "./components/Header"
import Footer from "./components/Footer"

import Hero from "./components/Hero"
import About from "./components/About"
import Services from "./components/Services"
import Portfolio from "./components/Portfolio"
import Projeto1 from "./pages/Projeto1"
import Projeto2 from "./pages/Projeto2"
import Projeto3 from "./pages/Projeto3"
import Projeto4 from "./pages/Projeto4"
import Projeto5 from "./pages/Projeto5"
import Projeto6 from "./pages/Projeto6"
import Projeto7 from "./pages/Projeto7"
import Projeto8 from "./pages/Projeto8"

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
        <Route path="/projeto1" element={<Projeto1 />} />
        <Route path="/projeto2" element={<Projeto2 />} />
        <Route path="/projeto3" element={<Projeto3 />} />
        <Route path="/projeto4" element={<Projeto4 />} />
        <Route path="/projeto5" element={<Projeto5 />} />
        <Route path="/projeto6" element={<Projeto6 />} />
        <Route path="/projeto7" element={<Projeto7 />} />
        <Route path="/projeto8" element={<Projeto8 />} />
        

      </Routes>

      <Footer />

    </BrowserRouter>
  )
}

export default App