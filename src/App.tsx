// import './App.css'

import { Contact } from "./sections/Contact"
import { Footer } from "./sections/Footer"
import { Header } from "./sections/Header"
import { Hero } from "./sections/Hero"
import { Projects } from "./sections/Projects"
import { Technologies } from "./sections/Technologies"
import { Activities } from "./sections/Activities"


function App() {

  return (
    <div 
    className="container"
    >
      <Header />
      <Hero />
      <Technologies />
      <Projects />
      <Activities/>
      <Contact />
      <Footer />
    </div>
  )
}

export default App
