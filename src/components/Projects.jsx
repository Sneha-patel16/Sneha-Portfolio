import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaBookOpen } from "react-icons/fa";

function Projects() {
  const featuredProject = {
    title: "TrayamBakam AI",
    category: "AI Research Project",
    description:
      "A multimodal anxiety detection and emotional relief system using facial expression, voice tone, and text analysis.",
    features: [
      "Facial emotion analysis",
      "Voice emotion detection",
      "Text sentiment analysis",
      "AI emotional support assistant",
    ],
    tech: ["Python", "NLP", "BERT", "Deep Learning", "CLIP"],
    github: "https://github.com/Sneha-patel16/trayambakam-ai",
    demo: "#",
    readme: "https://github.com/Sneha-patel16/trayambakam-ai#readme",
  };

  const projects = [
    {
      title: "Visionix",
      category: "Data Analytics Platform",
      description:
        "AI-powered analytics and BI platform for data cleaning, EDA, visualization, and dashboard generation.",
      features: ["Data cleaning", "EDA automation", "Dashboard generation"],
      tech: ["Python", "Streamlit", "SQL", "Power BI"],
      github: "https://github.com/Sneha-patel16/visionix",
      demo: "#",
      readme: "https://github.com/Sneha-patel16/visionix#readme",
    },
    {
      title: "Salary Prediction System",
      category: "Machine Learning",
      description:
        "ML model that predicts salary based on professional and technical attributes.",
      features: ["Regression model", "Prediction UI", "Model evaluation"],
      tech: ["Python", "ML", "Pandas", "Streamlit"],
      github: "https://github.com/Sneha-patel16/salary-prediction",
      demo: "https://salary-prediction-model-tc4gj8crzj.streamlit.app/",
      readme: "https://github.com/Sneha-patel16/salary-prediction#readme",
    },
    {
      title: "IMDb India Movie Analysis",
      category: "Exploratory Data Analysis",
      description:
        "EDA project analyzing Indian movie trends, ratings, genres, and insights using IMDb data.",
      features: ["Data cleaning", "Trend analysis", "Visual insights"],
      tech: ["Python", "Pandas", "Matplotlib", "Seaborn"],
      github: "https://github.com/Sneha-patel16/imdb-india-analysis",
      demo: "#",
      readme: "https://github.com/Sneha-patel16/imdb-india-analysis#readme",
    },
    {
      title: "Titanic Survival Prediction",
      category: "Machine Learning",
      description:
        "A predictive machine learning model that determines passenger survival probability on the Titanic dataset using classification techniques.",
      features: ["Data preprocessing", "Feature engineering", "Classification model", "Prediction dashboard"],
      tech: ["Python", "Pandas", "Streamlit", "Scikit-learn"],
      github: "https://github.com/Sneha-patel16/Titanic-Survival-Analysis",
      demo: "#",
      readme: "https://github.com/Sneha-patel16/Titanic-Survival-Analysis/blob/main/README.md",
    },
  ];

  return (
    <SectionWrapper>
      <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-center text-5xl font-extrabold mb-4">
          Featured{" "}
          <span className="bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>

        <p className="text-center text-slate-400 max-w-2xl mx-auto mb-14">
          Practical AI, data science, and analytics projects focused on solving
          real-world problems.
        </p>

        {/* Featured Project */}
        <motion.div
          whileHover={{ y: -8 }}
          className="mb-12 overflow-hidden rounded-3xl border border-cyan-500/25 bg-slate-900/80 backdrop-blur-xl shadow-[0_0_45px_rgba(34,211,238,0.15)]"
        >
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="p-8 md:p-10">
              <span className="inline-block px-4 py-2 mb-5 rounded-full bg-cyan-500/10 text-cyan-300 text-sm font-semibold">
                Featured Project • {featuredProject.category}
              </span>

              <h3 className="text-4xl font-extrabold mb-4 text-white">
                {featuredProject.title}
              </h3>

              <p className="text-slate-300 leading-7 mb-6">
                {featuredProject.description}
              </p>

              <ul className="space-y-2 mb-6">
                {featuredProject.features.map((feature, index) => (
                  <li key={index} className="text-slate-300">
                    <span className="text-cyan-300">✓</span> {feature}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mb-7">
                {featuredProject.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-full bg-slate-800 border border-cyan-500/20 text-cyan-200 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href={featuredProject.github}
                  target="_blank"
                  className="px-5 py-3 bg-cyan-400 text-slate-950 rounded-xl font-bold inline-flex items-center gap-2 hover:bg-cyan-300 transition"
                >
                  <FaGithub /> GitHub
                </a>

                <a
                  href={featuredProject.demo}
                  target="_blank"
                  className="px-5 py-3 border border-slate-600 rounded-xl font-bold inline-flex items-center gap-2 hover:border-cyan-400 transition"
                >
                  <FaExternalLinkAlt /> Demo
                </a>

                <a
                  href={featuredProject.readme}
                  target="_blank"
                  className="px-5 py-3 border border-slate-600 rounded-xl font-bold inline-flex items-center gap-2 hover:border-cyan-400 transition"
                >
                  <FaBookOpen /> Details
                </a>
              </div>
            </div>

            <div className="min-h-[320px] bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-slate-950 flex items-center justify-center p-8">
              <div className="text-center">
                <div className="text-6xl mb-5">🧠</div>
                <h4 className="text-2xl font-bold text-cyan-300">
                  Multimodal AI System
                </h4>
                <p className="text-slate-300 mt-3">
                  Face + Voice + Text Analysis
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Other Projects */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="group overflow-hidden rounded-3xl border border-cyan-500/20 bg-slate-900/80 backdrop-blur-xl shadow-[0_0_30px_rgba(34,211,238,0.12)] hover:shadow-[0_0_45px_rgba(34,211,238,0.25)] transition-all duration-500"
            >
              <div className="h-44 bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-slate-950 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl mb-3">
                    {index === 0 ? "📊" : index === 1 ? "🤖" : index === 2 ? "🎬" : "💬"}
                  </div>
                  <p className="text-cyan-300 font-semibold">
                    {project.category}
                  </p>
                </div>
              </div>

              <div className="p-7">
                <span className="inline-block px-3 py-1 mb-4 rounded-full bg-cyan-500/10 text-cyan-300 text-xs font-semibold">
                  {project.category}
                </span>

                <h3 className="text-2xl font-bold mb-3 text-white">
                  {project.title}
                </h3>

                <p className="text-slate-300 mb-5 leading-7">
                  {project.description}
                </p>

                <ul className="space-y-2 mb-5">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="text-slate-300 text-sm">
                      <span className="text-cyan-300">✓</span> {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full bg-slate-800 border border-cyan-500/20 text-cyan-200 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    className="px-4 py-2 bg-cyan-400 text-slate-950 rounded-lg font-bold inline-flex items-center gap-2 hover:bg-cyan-300 transition"
                  >
                    <FaGithub /> GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    className="px-4 py-2 border border-slate-600 rounded-lg font-bold inline-flex items-center gap-2 hover:border-cyan-400 transition"
                  >
                    <FaExternalLinkAlt /> Demo
                  </a>

                  <a
                    href={project.readme}
                    target="_blank"
                    className="px-4 py-2 border border-slate-600 rounded-lg font-bold inline-flex items-center gap-2 hover:border-cyan-400 transition"
                  >
                    <FaBookOpen /> Details
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </SectionWrapper>
  );
}

export default Projects;