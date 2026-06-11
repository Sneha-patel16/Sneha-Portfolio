import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import {
  FaPython,
  FaDatabase,
  FaCloud,
  FaCode,
  FaBrain,
} from "react-icons/fa";

const skillGroups = [
  {
    icon: <FaBrain />,
    title: "AI & Machine Learning",
    skills: ["Machine Learning", "Deep Learning", "NLP", "BERT", "Scikit-Learn"],
  },
  {
    icon: <FaPython />,
    title: "Programming",
    skills: ["Python", "NumPy", "Pandas", "OOP", "Data Structures"],
  },
  {
    icon: <FaDatabase />,
    title: "Database",
    skills: ["SQL", "MySQL", "Data Modeling", "Query Optimization"],
  },
  {
    icon: <FaCloud />,
    title: "Cloud & Platforms",
    skills: ["Google Cloud", "Oracle Cloud", "GitHub", "Vercel"],
  },
  {
    icon: <FaCode />,
    title: "Analytics & BI",
    skills: ["Power BI", "Excel", "EDA", "Visualization", "Statistics"],
  },
  {
    icon: <FaCode />,
    title: "Development",
    skills: ["React", "Tailwind", "Streamlit", "API Integration"],
  },
];

function Skills() {
  return (
    <SectionWrapper>
      <section
        id="skills"
        className="py-24 px-6 max-w-7xl mx-auto"
      >
        <h2 className="text-center text-5xl font-extrabold mb-4">
          Technical{" "}
          <span className="bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
            Arsenal
          </span>
        </h2>

        <p className="text-center text-slate-400 max-w-2xl mx-auto mb-14">
          Technologies and tools I use to build intelligent AI,
          analytics, and data-driven solutions.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillGroups.map((group, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              transition={{ duration: 0.2 }}
              className="relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-slate-900/70 backdrop-blur-lg p-7 shadow-[0_0_30px_rgba(34,211,238,0.15)]"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-3xl"></div>

              <div className="text-cyan-300 text-4xl mb-5">
                {group.icon}
              </div>

              <h3 className="text-xl font-bold mb-5">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-200 text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Highlight */}
        <div className="mt-16 grid md:grid-cols-4 gap-6">
          <div className="glow-card rounded-2xl p-6 text-center">
            <h3 className="text-4xl font-bold text-cyan-300">15+</h3>
            <p className="text-slate-300">Technologies</p>
          </div>

          <div className="glow-card rounded-2xl p-6 text-center">
            <h3 className="text-4xl font-bold text-cyan-300">10+</h3>
            <p className="text-slate-300">Projects</p>
          </div>

          <div className="glow-card rounded-2xl p-6 text-center">
            <h3 className="text-4xl font-bold text-cyan-300">1</h3>
            <p className="text-slate-300">Internship</p>
          </div>

          <div className="glow-card rounded-2xl p-6 text-center">
            <h3 className="text-4xl font-bold text-cyan-300">15+</h3>
            <p className="text-slate-300">Certificates</p>
          </div>
        </div>
      </section>
    </SectionWrapper>
  );
}

export default Skills;