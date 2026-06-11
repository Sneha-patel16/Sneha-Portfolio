import profile from "../assets/profile.jpg";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-blue-400 font-semibold mb-3">
            Hello, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
            Sneha Patel
          </h1>

          <h2 className="text-xl md:text-2xl text-slate-300 mb-6">
            <TypeAnimation
              sequence={[
                "Data Science Undergraduate",
                1500,
                "AI/ML Enthusiast",
                1500,
                "Data Analytics Practitioner",
                1500,
                "Aspiring Data Scientist",
                1500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h2>

          <p className="text-slate-400 leading-relaxed mb-8">
            Building intelligent solutions through Data Science,
            AI, and Analytics to solve real-world problems
            and drive meaningful insights.
          </p>

          <div className="flex flex-wrap gap-4">

            <a
              href="#projects"
              className="bg-blue-500 px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition duration-300"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              className="border border-slate-600 px-6 py-3 rounded-lg font-medium hover:border-blue-400 transition duration-300"
            >
              Download Resume
            </a>

          </div>
        </motion.div>

        {/* Right Image */}

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <img
            src={profile}
            alt="Sneha Patel"
            className="w-80 h-80 object-cover rounded-full border-4 border-blue-500 shadow-[0_0_50px_rgba(59,130,246,0.5)] hover:scale-105 transition duration-500"
          />
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;