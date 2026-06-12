import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaBookOpen } from "react-icons/fa";

function Projects() {
  const liveProjects = [
    {
      title: "TrayamBakam AI",
      category: "AI Research",
      description:
        "Multimodal anxiety detection system using facial, voice, and text analysis.",
      features: ["Face analysis", "Voice analysis", "Text sentiment"],
      tech: ["Python", "NLP", "BERT", "Deep Learning"],
      github: "https://github.com/Sneha-patel16/trayambakam-ai",
      demo: "#",
      readme: "https://github.com/Sneha-patel16/trayambakam-ai#readme",
      icon: "🧠",
    },
    {
      title: "Visionix",
      category: "AI Analytics",
      description:
        "AI-powered analytics platform for data cleaning, EDA, dashboards, and insights.",
      features: ["Auto cleaning", "EDA automation", "Dashboard generation"],
      tech: ["Python", "Streamlit", "SQL", "Power BI"],
      github: "https://github.com/Sneha-patel16/visionix",
      demo: "#",
      readme: "https://github.com/Sneha-patel16/visionix#readme",
      icon: "📊",
    },
    {
      title: "Salary Prediction System",
      category: "Live ML App",
      description:
        "Machine learning web app for salary prediction using professional attributes.",
      features: ["Regression model", "Interactive UI", "Live app"],
      tech: ["Python", "ML", "Pandas", "Streamlit"],
      github: "https://github.com/Sneha-patel16/salary-prediction",
      demo: "https://salary-prediction-model-tc4gj8crzj.streamlit.app/",
      readme: "https://github.com/Sneha-patel16/salary-prediction#readme",
      icon: "💼",
    },
  ];

  const caseStudies = [
    {
      title: "IMDb India Movie Analysis",
      category: "EDA Project",
      description:
        "Exploratory data analysis on Indian movies to discover rating, genre, and trend insights.",
      features: ["Data cleaning", "Trend analysis", "Visual insights"],
      tech: ["Python", "Pandas", "Matplotlib", "Seaborn"],
      github: "https://github.com/Sneha-patel16/imdb-india-analysis",
      readme: "https://github.com/Sneha-patel16/imdb-india-analysis#readme",
      icon: "🎬",
    },
    {
      title: "Titanic Survival Prediction",
      category: "ML Case Study",
      description:
        "Classification model predicting Titanic passenger survival using feature engineering.",
      features: ["Preprocessing", "Feature engineering", "Classification"],
      tech: ["Python", "Pandas", "Scikit-Learn"],
      github: "https://github.com/Sneha-patel16/titanic-survival-prediction",
      readme: "https://github.com/Sneha-patel16/titanic-survival-prediction#readme",
      icon: "🚢",
    },
  ];

  const ActionButtons = ({ project, showDemo }) => (
    <div className="flex flex-wrap gap-2 mt-5">
      <a
        href={project.github}
        target="_blank"
        rel="noreferrer"
        className="px-3 py-2 text-sm bg-cyan-400 text-slate-950 rounded-lg font-bold inline-flex items-center gap-2 hover:bg-cyan-300 transition"
      >
        <FaGithub />
        Code
      </a>

      {showDemo && (
        <a
          href={project.demo}
          target="_blank"
          rel="noreferrer"
          className="px-3 py-2 text-sm border border-slate-600 rounded-lg font-bold inline-flex items-center gap-2 hover:border-cyan-400 transition"
        >
          <FaExternalLinkAlt />
          Demo
        </a>
      )}

      <a
        href={project.readme}
        target="_blank"
        rel="noreferrer"
        className="px-3 py-2 text-sm border border-slate-600 rounded-lg font-bold inline-flex items-center gap-2 hover:border-cyan-400 transition"
      >
        <FaBookOpen />
        Readme
      </a>
    </div>
  );

  const LiveProjectCard = ({ project }) => (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className="group overflow-hidden rounded-3xl border border-cyan-500/20 bg-slate-900/80 backdrop-blur-xl shadow-[0_0_25px_rgba(34,211,238,0.12)] hover:shadow-[0_0_40px_rgba(34,211,238,0.25)] transition-all duration-500"
    >
      <div className="h-32 bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-slate-950 flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-2">{project.icon}</div>
          <p className="text-cyan-300 font-semibold text-sm">
            {project.category}
          </p>
        </div>
      </div>

      <div className="p-6">
        <span className="inline-block px-3 py-1 mb-4 rounded-full bg-cyan-500/10 text-cyan-300 text-xs font-semibold">
          {project.category}
        </span>

        <h3 className="text-2xl font-bold mb-3 text-white">
          {project.title}
        </h3>

        <p className="text-slate-300 text-sm leading-6 mb-5">
          {project.description}
        </p>

        <ul className="space-y-2 mb-5">
          {project.features.map((feature, idx) => (
            <li key={idx} className="text-slate-300 text-sm">
              <span className="text-cyan-300">✓</span> {feature}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1 rounded-full bg-slate-800 border border-cyan-500/20 text-cyan-200 text-xs"
            >
              {tech}
            </span>
          ))}
        </div>

        <ActionButtons project={project} showDemo={true} />
      </div>
    </motion.div>
  );

  const CaseStudyCard = ({ project }) => (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className="rounded-3xl border border-cyan-500/20 bg-slate-900/80 backdrop-blur-xl p-6 hover:shadow-[0_0_40px_rgba(34,211,238,0.18)] transition-all duration-500"
    >
      <div className="flex flex-col md:flex-row gap-6 items-start">
        <div className="w-20 h-20 shrink-0 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-4xl">
          {project.icon}
        </div>

        <div className="flex-1">
          <span className="inline-block px-3 py-1 mb-3 rounded-full bg-cyan-500/10 text-cyan-300 text-xs font-semibold">
            {project.category}
          </span>

          <h3 className="text-2xl font-bold text-white mb-3">
            {project.title}
          </h3>

          <p className="text-slate-300 text-sm leading-6 mb-4">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-full bg-slate-800 border border-cyan-500/20 text-cyan-200 text-xs"
              >
                {tech}
              </span>
            ))}
          </div>

          <ActionButtons project={project} showDemo={false} />
        </div>
      </div>
    </motion.div>
  );

  return (
    <SectionWrapper>
      <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-center text-5xl font-extrabold mb-4">
          Featured{" "}
          <span className="bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>

        <p className="text-center text-slate-400 max-w-2xl mx-auto mb-16">
          Live applications, AI systems, and data analysis case studies built with practical impact.
        </p>

        <div className="flex items-center justify-between mb-8">
          <h3 className="text-3xl font-bold text-white">
            Live Applications
          </h3>
          <span className="text-sm text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 px-4 py-2 rounded-full">
            Demo Ready Projects
          </span>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {liveProjects.map((project, index) => (
            <LiveProjectCard key={index} project={project} />
          ))}
        </div>

        <div className="flex items-center justify-between mb-8">
          <h3 className="text-3xl font-bold text-white">
            Data Analysis & ML Case Studies
          </h3>
          <span className="text-sm text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 px-4 py-2 rounded-full">
            GitHub + Readme
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {caseStudies.map((project, index) => (
            <CaseStudyCard key={index} project={project} />
          ))}
        </div>
      </section>
    </SectionWrapper>
  );
}

export default Projects;