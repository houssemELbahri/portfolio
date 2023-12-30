// import './App.css'

import { Contact } from "./sections/Contact"
import { Footer } from "./sections/Footer"
import { Header } from "./sections/Header"
import { Hero } from "./sections/Hero"
import { Projects } from "./sections/Projects"
import { Technologies } from "./sections/Technologies"

function App() {

  return (
    <div 
    className="container"
    >
      <Header />
      <Hero />
      <Technologies />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
