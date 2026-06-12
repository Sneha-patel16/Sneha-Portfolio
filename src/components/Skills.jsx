import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";

import {
  FaDatabase,
  FaBrain,
  FaChartBar,
} from "react-icons/fa";

import {
  SiPython,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiMysql,
  SiGit,
  SiGithub,
  SiStreamlit,
  SiTensorflow,
} from "react-icons/si";

function Skills() {
  const focusAreas = [
    {
      title: "Data Analytics",
      subtitle: "EDA, Visualization & Business Insights",
      icon: <FaDatabase />,
      iconColor: "text-blue-400",
      bg: "bg-blue-500/10",
      glow: "hover:shadow-[0_0_35px_rgba(59,130,246,0.25)]",
    },
    {
      title: "Machine Learning",
      subtitle: "Predictive Models & AI Systems",
      icon: <FaBrain />,
      iconColor: "text-purple-400",
      bg: "bg-purple-500/10",
      glow: "hover:shadow-[0_0_35px_rgba(168,85,247,0.25)]",
    },
    {
      title: "Development Tools",
      subtitle: "Projects, Deployment & Version Control",
      icon: <SiGithub />,
      iconColor: "text-orange-400",
      bg: "bg-orange-500/10",
      glow: "hover:shadow-[0_0_35px_rgba(249,115,22,0.25)]",
    },
  ];

  const skills = [
    {
      name: "Python",
      icon: <SiPython />,
      color: "text-yellow-400",
    },
    {
      name: "NumPy",
      icon: <SiNumpy />,
      color: "text-cyan-400",
    },
    {
      name: "Pandas",
      icon: <SiPandas />,
      color: "text-indigo-400",
    },
    {
      name: "Scikit-Learn",
      icon: <SiScikitlearn />,
      color: "text-orange-400",
    },
    {
      name: "TensorFlow",
      icon: <SiTensorflow />,
      color: "text-orange-500",
    },
    {
      name: "Matplotlib",
      icon: "📊",
      color: "text-blue-400",
    },
    {
      name: "Seaborn",
      icon: "📈",
      color: "text-teal-400",
    },
    {
      name: "MySQL",
      icon: <SiMysql />,
      color: "text-blue-500",
    },
    {
      name: "Power BI",
      icon: <FaChartBar />,
      color: "text-yellow-500",
    },
    {
      name: "Git",
      icon: <SiGit />,
      color: "text-orange-500",
    },
    {
      name: "GitHub",
      icon: <SiGithub />,
      color: "text-slate-300",
    },
    {
      name: "Streamlit",
      icon: <SiStreamlit />,
      color: "text-red-400",
    },
  ];

  return (
    <SectionWrapper>
      <section id="skills" className="py-24 px-6 max-w-7xl mx-auto">

        {/* Focus Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-24">
          {focusAreas.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.25 }}
              className={`
                rounded-2xl
                border border-slate-700/70
                bg-slate-900/60
                p-7
                transition-all
                duration-300
                ${item.glow}
              `}
            >
              <div
                className={`
                  w-14 h-14
                  rounded-xl
                  ${item.bg}
                  flex items-center justify-center
                  text-3xl
                  ${item.iconColor}
                  mb-5
                `}
              >
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">
                {item.title}
              </h3>

              <p className="text-slate-400">
                {item.subtitle}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Technical{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
              Arsenal
            </span>
          </h2>

          <p className="text-slate-400">
            Building practical solutions through data, analytics, and machine learning.
          </p>
        </div>

        {/* Skill Icons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-5">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8, scale: 1.03 }}
              transition={{ duration: 0.2 }}
              className="group rounded-2xl border border-slate-700/70 bg-slate-900/60 p-6 text-center hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.18)] transition-all duration-300"
            >
              <div
                className={`text-5xl mb-4 flex justify-center ${skill.color}`}
              >
                {skill.icon}
              </div>

              <p className="font-semibold text-slate-300 group-hover:text-white">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>

      </section>
    </SectionWrapper>
  );
}

export default Skills;