import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Research from "./components/Research";
import Experience from "./components/Experience";
import CertificationsAchievements from "./components/CertificationsAchievements";
import CodingJourney from "./components/CodingJourney";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";

function App() {
  return (
    <div className="min-h-screen bg-transparent text-white overflow-hidden">
      <ScrollProgress />

      <div className="fixed inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Skills />
      <Projects />
      <Research />
      <Experience />
      <CertificationsAchievements />
      <CodingJourney />
      <Contact />
      <BackToTop />
      <Footer />
    </div>
  );
}

export default App;