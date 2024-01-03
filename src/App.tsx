
import { Header } from "./sections/Header"
import { Hero } from "./sections/Hero"
import { Technologies } from "./sections/Technologies"
import { Projects } from "./sections/Projects"
import { Activities } from "./sections/Activities"
import { Contact } from "./sections/Contact"
import { Footer } from "./sections/Footer"


function App() {

  return (
    <div className="app-container">
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
