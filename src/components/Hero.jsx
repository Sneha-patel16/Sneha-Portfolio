import profile from "../assets/profile.jpg";
import bgWave from "../assets/data-wave-bg.png";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-screen flex items-center px-6 pt-24 pb-10 bg-slate-950"
    >
      {/* Exact Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-45"
        style={{ backgroundImage: `url(${bgWave})` }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-slate-950/60"></div>

      {/* Blue Glow */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-400/20 rounded-full blur-[130px]"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-[150px]"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/40 text-cyan-300 text-sm font-semibold mb-5">
            <span className="w-2 h-2 rounded-full bg-cyan-300 animate-pulse"></span>
            Open to Data Science • AI/ML • Analytics Roles
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.05] mb-5">
            Hi, I’m{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
              Sneha Patel
            </span>
          </h1>

          <h2 className="text-xl md:text-2xl font-bold text-white mb-5">
            AI/ML Developer | Data Analyst | Data Science Undergraduate
          </h2>

          <p className="text-slate-300 text-base md:text-lg leading-8 max-w-2xl mb-8">
            I build practical AI, machine learning, and data analytics projects
            using Python, SQL, Power BI, and modern tools to solve real-world
            problems through intelligent, data-driven solutions.
          </p>

          <a
            href="#projects"
            className="px-6 py-3 bg-cyan-400 text-slate-950 rounded-xl font-bold hover:bg-cyan-300 transition inline-flex items-center gap-2"
          >
            View Projects
            <FaArrowRight />
          </a>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative w-[340px] md:w-[380px]">
            <div className="absolute -inset-5 bg-cyan-400/25 blur-3xl rounded-full"></div>

            <div className="relative rounded-[2rem] overflow-hidden border border-cyan-400/50 bg-slate-900/70 shadow-[0_0_80px_rgba(34,211,238,0.35)]">
              <img
                src={profile}
                alt="Sneha Patel"
                className="w-full h-[410px] md:h-[460px] object-cover object-top"
              />
            </div>

            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[270px] bg-slate-950/95 border border-cyan-400/40 rounded-2xl py-4 text-center shadow-xl">
              <p className="text-xs text-slate-400">Currently Building</p>
              <p className="text-cyan-300 font-bold text-sm">
                AI + Data Science Projects
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;