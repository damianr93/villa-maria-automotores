import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import QuienesSomos from './components/AboutUs'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Facilities from './components/Facilities'


const App: React.FC = () => (
  <>
    <Navbar />
    <Hero />
    <QuienesSomos />
    <Facilities />
    <Gallery />
    <Contact />
    <Footer />
  </>
)

export default App