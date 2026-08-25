import Navbar from "./components/navbars/Navbar"
import Hero from "./sections/hero/Hero"
import About from "./sections/about/About"
import Skills from "./sections/skills/Skills"
import Projects from "./sections/projects/Projects"
import Experiences from "./sections/experiences/Experiences"
import Education from "./sections/education/Education"
import Contact from "./sections/contact/contact"
import Footer from "./sections/footer/Footer"


function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experiences />
      <Education />
      <Contact />
      <Footer />
    </div>
  )
}

export default App