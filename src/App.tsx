import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css";
import Home from "./components/Home"
import Contact from "./components/Contact"
import Navbar from "./components/Navbar"
import Project from "./components/Project"
import About from "./components/About"
import Footer from "./components/Footer"

function App() {

  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])

  return (
    <>
      <div className="w-full bg-slate-900">
        {/* Navbar */}
        <Navbar />
        <div className="px-10 md:px-20">
          {/* About */}
          <Home id={"home"} />
          {/* About */}
          <About id={"about"} />
          {/* Project */}
          <Project id={"project"} />
          {/* Contact */}
          <Contact id={"contact"} />
          {/* Footer */}
          <Footer />
        </div>
      </div>

    </>
  )
}

export default App
