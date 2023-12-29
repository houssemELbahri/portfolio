// import './App.css'

import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { Main } from "./components/Main"
import { Technologies } from "./components/Technologies"

function App() {

  return (
    <div className="container ">
      <Header />
      <Hero />
      <Technologies />
      {/* <div className="divider" /> */}
      <Main />
      <Contact />
      {/* <div className="divider" /> */}
      <Footer />
    </div>
  )
}

export default App
