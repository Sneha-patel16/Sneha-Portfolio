import profile from "../assets/profile.jpg";
import { motion } from "framer-motion";
import { FaDownload, FaArrowRight } from "react-icons/fa";

function Hero() {
  return (
    <section className="min-h-[86vh] flex items-center px-6 pt-20 pb-6">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-[1.15fr_0.85fr] gap-8 items-center">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 text-sm font-semibold mb-5">
            <span className="w-2 h-2 rounded-full bg-cyan-300 animate-pulse"></span>
            Open to Data Science • AI/ML • Analytics Roles
          </div>

          <h1 className="text-4xl md:text-6xl font-black leading-[1.08] mb-4">
            Hi, I’m{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
              Sneha Patel
            </span>
          </h1>

          <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
            AI/ML Developer | Data Analyst | Data Science Undergraduate
          </h2>

          <p className="text-slate-300 text-base md:text-lg leading-7 max-w-2xl mb-6">
            I build practical AI, machine learning, and data analytics projects
            using Python, SQL, Power BI, and modern tools to solve real-world
            problems through intelligent, data-driven solutions.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-cyan-400 text-slate-950 rounded-xl font-bold hover:bg-cyan-300 transition inline-flex items-center gap-2"
            >
              View Projects
              <FaArrowRight />
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              className="px-6 py-3 border border-slate-600 rounded-xl font-bold hover:border-cyan-400 transition inline-flex items-center gap-2"
            >
              <FaDownload />
              Resume
            </a>
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative w-[285px] md:w-[340px]">
            <div className="absolute -inset-4 bg-cyan-400/20 blur-3xl rounded-full"></div>

            <div className="relative rounded-[2rem] overflow-hidden border border-cyan-400/40 bg-slate-900/70 shadow-[0_0_55px_rgba(34,211,238,0.25)]">
              <img
                src={profile}
                alt="Sneha Patel"
                className="w-full h-[335px] md:h-[395px] object-cover"
              />
            </div>

            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-[240px] bg-slate-950/95 border border-cyan-400/30 rounded-2xl py-3 text-center shadow-xl">
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