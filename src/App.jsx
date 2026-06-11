import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Experience from "./components/Experience"
import Certifications from "./components/Certifications"
import Achievements from "./components/Achievements"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import CodingProfiles from "./components/CodingProfiles"
import ScrollProgress from "./components/ScrollProgress"
import BackToTop from "./components/BackToTop";

function App() {
  return (
    <div className="min-h-screen bg-transparent text-white overflow-hidden">
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Achievements />
      <CodingProfiles />
      <Contact />
      <BackToTop />
      <Footer />
    </div>
  )
}

export default App